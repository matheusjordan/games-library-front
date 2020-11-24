<template>
  <h1 class="title">Biblioteca de jogos</h1>
  <div class="games" v-if="!isLoading">
    <div class="detail-container" v-if="selectedGame">
        <Detail :game="selectedGame"/>
    </div>
    <div v-if="games.length === 0">
        Buscando jogos...
        <Loader/>
    </div>
    <Presentation @click="showDetail(game)" :game="game" v-for="game in games" :key="game.id"/>
  </div>
  <div v-else-if="isLoading" class="loading-container">
    Buscando jogos...
    <Loader/>
  </div>
</template>

<script>
import Presentation from './Presentation';
import Detail from './Detail';
import Loader from './Loader';

import axios from 'axios';

export default {
    components: {
        Presentation,
        Detail,
        Loader
    },
    methods: {
        showDetail: function(game) {
            this.selectedGame = game;
        }
    },
    mounted() {
        setTimeout(() => {
            axios.get('http://localhost:1337/games')
                .then((data) => {
                    const games = data.data._embedded.games;
                    this.games = games;
                    this.isLoading = false;
                })
                .catch(() => {
                    alert('Falha ao carregar');
                    this.isLoading = false;

                    this.games.push({ name: "teste", description: "teste", price: 100, image: "https://picsum.photos/200/300"})
                })
        }, 3000);
    },
    data() {
        return {
            games: [],
            isLoading: true,
            selectedGame: null
        }
    },
}
</script>

<style scoped>
    .games {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .title {
        text-align: center;
    }

    .detail-container {
        width: 100%;
    }

    .loading-container {
        text-align: center;
    }

</style>