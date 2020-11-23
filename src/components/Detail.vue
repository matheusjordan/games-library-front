<template>
  <div class="game-card">
    <img :src="image">
    <div class="game-info">
        <div class="game-title">
            {{ name }}
        </div>
        <div class="game-description">
            {{ description }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
        image: String
    }
}
</script>

<style>

</style>