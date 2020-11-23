<template>
  <div class="game-chip">
    <div class="game-img">
        <img :src="game.image">
    </div>
    <div class="game-name">
        <label>{{ game.name }}</label>
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
    .game-chip {
        display: flex;
        flex-direction: column;
        max-width: 280px;
        max-height: 180px;
        height: 180px;
        margin: 8px;
        padding: 4px;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .game-chip:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }

    .game-img {
        max-width: 360px;
        object-fit: cover;
    }

    .game-img > img {
        width: 100%;
        max-height: 128px;
        object-fit: cover;
        border-radius: 8px;
    }

    .game-name {
        width: 100%;
        text-align: center;
        height: 100%;
        display: flex;
    }

    .game-name > label {
        margin: auto;
        font-weight: 600;
    }
</style>