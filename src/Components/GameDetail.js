import React from "react";
import {useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CloseButtonImg from "../assets/SVGs/closeButton";
// import { clearGameDetails } from '..actions/gameDetailsAction'


const GameDetail = () => {
    const { gameDetails, screenshots } = useSelector((state) => state.detail);
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('/');
    }
    if (!gameDetails?.id) return null;
    return (
        <CardShadow>         
            <Detail>
                <CloseButton onClick={()=>closeHandler()}>
                    <CloseButtonImg/>
                </CloseButton>
                <Stats>
                    <div className="rating">
                        <h3>{gameDetails.name}</h3>
                        <p>Rating: {gameDetails.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {gameDetails.platforms.map(data => (
                                <h3 key={data.platform.id}>{ data.platform.name}</h3>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={gameDetails.background_image} alt="image"></img>
                </Media>
                <Description>
                    <p>{gameDetails.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screenshots.results.map((screen) => (
                        <img key={screen.id} src={screen.image} alt="screenshots"></img>
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track{
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
        object-fit: cover;
        margin-bottom: 2rem;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align: center;
    width: 70%;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`
const CloseButton = styled(motion.div)`
    position: absolute;
    top: -0.1rem;
    background: #FBFAFA;
    right: 0rem;
    cursor: pointer;
    border-radius: 1rem;
`
export default GameDetail; 