<template>
  <nav class="navbar">
    <label>
      SteamBR
    </label>

    <div class="router-container">
      <button>
        <router-link 
          to="/">Home</router-link>
      </button>

      <button>
        <router-link
        to="/new">Cadastrar Jogo</router-link>
      </button>
    </div>
  </nav>

  <router-view/>
</template>

<script>
export default {
    components: {
    },
    methods: {
      changeActualPath: function(path) {
        this.actualPath = path;
        console.count()
      }
    },
    data() {
      return {
        actualPath: '/'
      }
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
    margin-left: 16px;
    font-weight: 600;
    font-size: 1.6rem;
  }

  .router-container {
    display: flex;
    padding: 16px;
  }

  .router-container > button:first-of-type {
    margin-right: 16px;
  }
</style>