<template>
  <nav class="navbar">
    <label>
      SteamBR
    </label>
  </nav>
  <Library/>
</template>

<script>
import Library from './Library';

export default {
    components: {
        Library
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