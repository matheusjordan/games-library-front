<template>
  <h1 class="title">Biblioteca de jogos</h1>
  <div class="games" v-if="!isLoading">
    <div class="detail-container" v-if="selectedGame">
        <Detail :game="selectedGame"/>
    </div>
    <Presentation @click="showDetail(game)" :game="game" v-for="game in games" :key="game.id"/>
  </div>
  <div v-else-if="isLoading">
    <Loader/>
  </div>
</template>

<script>
import Presentation from './Presentation';
import Detail from './Detail';
import Loader from './Loader';

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
        const games = [
            { 
                id: 1, 
                price: 120,
                image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/42700/header.jpg', 
                name: 'call of duty', 
                description: 'Um jogo de guerra foda pkrl!'},
            { 
                id: 2, 
                price: 60,
                image: 'https://www.minecraft.net/content/dam/games/minecraft/screenshots/massivelymultiplayer.png', 
                name: 'minecraft', 
                description: 'Pra que vida social, se vc pode minerar matar zumbis?'},
            { 
                id: 3, 
                price: 30,
                image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg', 
                name: 'counter strike: global offensive', 
                description: 'Bota a cara varanda pai!'},
            { 
                id: 4, 
                price: 45,
                image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/286690/header.jpg', 
                name: 'metro 2033', 
                description: 'Seja um lobo solitário sobrevivencialista.'},
            { 
                id: 5, 
                price: 0,
                image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg', 
                name: 'dota 2', 
                description: 'Eu sei onde vc gosta de sentar... e não é na cadeira kkk'}
        ];

        setTimeout(() => {
            this.games = games;
            this.isLoading = false;
        }, 1200);
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

</style>