import axios from 'axios';

// const defaultGame = { id: 1, name: "teste", description: "teste", price: 100, image: "https://picsum.photos/200/300"};

const getGames = async () => {
    let url = 'http://localhost:1337/games';    

    try {
        const response = await axios.get(url);
        const content = response.data._embedded;
        let games = content.games;

        games.map((item) => {
            const itemLink = item._links.self.href;
            const id = itemLink.replace('http://localhost:1337/games/', '');
            item.id = id;
        })

        games = (games.length === 0) ? [] : games;
        return games;
    } catch {
        return [];
    }
}

const updateGame = async (game) => {
    const url = `http://localhost:1337/games/${game.id}`;
    try {
        await axios.put(url, game);
        return true;
    } catch {
        return false;
    }
}

const createGame = async (game) => {
    const url = `http://localhost:1337/games`;
    try {
        await axios.post(url, game);
        return true;
    } catch {
        return false;
    }
}

export {
    getGames,
    updateGame,
    createGame
}