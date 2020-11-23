<template>
  <div class="game-card">
    <div class="game-img">
        <img :src="game.image">
    </div>
    <div class="game-info">
        <div class="container">
            <div class="title"> Título </div>
            <label class="description">{{ game.name }}</label>
        </div>

        <div class="container">
            <div class="title"> Preço </div>
            <label class="description">R$ {{ game.price }}</label>
        </div>
        <div class="container">
            <div class="title"> Descrição </div>
            <label class="description">{{ game.description }}</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        game: Object
    }
}
</script>

<style scoped>

    .game-card {
        display: flex;
        flex-direction: row;
        max-height: 300px;
        height: 300px;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
        margin: 0px 16px 16px 16px;
    }

    .game-img {
        width: 40%;
        margin-right: 12px;
    }

    .game-img > img  {
        border-radius: 8px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .game-info {
        width: 60%;
    }

    .container {
        width: 100%;
        margin-bottom: 16px;
    }

    .title {
        padding: 8px;
        background: #2c3e50;
        color: white;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .description {
        display: block;
        padding: 8px 0px 0px 8px;
    }
</style>