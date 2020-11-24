<template>
  <nav class="navbar">
    <label>
      SteamBR
    </label>
  </nav>

  <router-view/>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style scoped>
  .navbar {
    height: 64px;
    background: #2c3e50;
    color: white;
    display: flex;
  }

  .navbar > label {
    margin: auto;
    font-weight: 600;
    font-size: 1.6rem;
  }
</style>