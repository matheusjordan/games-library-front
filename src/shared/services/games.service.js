import axios from 'axios';

const defaultGame = { id: 1, name: "teste", description: "teste", price: 100, image: "https://picsum.photos/200/300"};

const getGames = async () => {
    let url = 'http://localhost:1337/games';    

    try {
        const response = await axios.get(url);
        const content = response.data._embedded;
        let games = content.games;

        games = (games.length === 0) ? [defaultGame] : games;
        return games;
    } catch {
        alert('Falha ao carregar');
        return [defaultGame];
    }
}

const updateGame = async (game) => {
    const url = `http://localhost:1337/games/${game.id}`;
    try {
        const response = axios.post(url, game);
        console.log(response)
        return true;
    } catch {
        return false;
    }
}

export {
    getGames,
    updateGame
}