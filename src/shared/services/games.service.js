import axios from 'axios';

const defaultGame = { name: "teste", description: "teste", price: 100, image: "https://picsum.photos/200/300"};

const getGames = async (url) => {

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

export {
    getGames
}