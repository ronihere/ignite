import React, { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Components/Game";
import GameDetail from "../Components/GameDetail";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { loadGameDetails } from "../actions/gameDetailsAction";


const Home = () => {
    const {GameId} = useParams();
    const dispatch = useDispatch();
    const { gameDetails, screenshots } = useSelector((state) => state.detail);
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
    useEffect(() => {
        dispatch(loadGames());
        if (GameId) dispatch(loadGameDetails(GameId));
    }, []);
    console.log('GameId:::',typeof GameId);
    console.log('GameDetail id:::',typeof gameDetails.id);
    return (
        <GamesList>
            {parseInt(GameId)===gameDetails.id ? <GameDetail /> : null}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => {
                    return (
                        <Link to={`/${game.id}`} key={game?.id} >
                            <Game name={game?.name} id={game?.id} image={game?.background_image} released={game?.released} />
                        </Link>
                    )
                })}
            </Games>

             <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => {
                    return (
                        <Link to={`/${game.id}`} key={game?.id} >
                            <Game name={game?.name} key={game?.id} id={game?.id} image={game?.background_image} released={game?.released} />
                        </Link>
                    )
                })}
            </Games>


             <h2>New Games</h2>
            <Games>
                {newGames.map((game) => {
                    return (
                        <Link to={`/${game.id}`} key={game?.id} >
                            <Game name={game?.name} key={game?.id} id={game?.id} image={game?.background_image} released={game?.released} />
                            </Link>
                    )
                })}
            </Games>
        </GamesList >

    ) 
}

const GamesList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
    
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    
`
export default Home;