//Base URL
const base_url = 'https://api.rawg.io/api/';
const api_key = 'key=9a536354c97240b19b100978761cc5ec';
//Getting the dates
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}
const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
}
const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
}

//current Date
const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth(); 
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-added&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}&${api_key}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}&${api_key}`;
export const newGamesUrl = () => `${base_url}${new_games}&${api_key}`;
export const gameDetailsUrl = (id) => `${base_url}games/${id}?${api_key}`;
export const gameDetailsScreenShots = (id) => `${base_url}games/${id}/screenshots?${api_key}`