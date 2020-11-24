<template>
  <div class="form-container">
    <div v-if="info" :class="{'info success': info.success, 'info fail': !info.success}">
      {{ info.msg }}
    </div>
    <form>
      <div class="container">
        <div class="title"> Título </div>
        <div class="input-field">
          <input type="text" v-model="name">
        </div>
      </div>

      <div class="container">
        <div class="title"> Preço </div>
        <div class="input-field">
          <input type="number" v-model="price">
        </div>
      </div>

      <div class="container">
        <div class="title"> Imagem </div>
        <div class="input-field">
          <input type="text" v-model="image">
        </div>
      </div>

      <div class="container">
        <div class="title"> Descrição </div>
        <div class="input-field">
          <textarea v-model="description"></textarea>
        </div>
      </div>

    </form>
    <div class="input-field form-actions">
      <button @click="newGame"> cadastrar </button>
    </div>
  </div>
</template>

<script>
import { createGame } from '../shared/services/games.service';
export default {
  data() {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      info: null
    }
  },
  methods: {
    newGame: function() {
      this.info = null;
      if (this.name === '' || this.description === '' || this.image === '' || this.price <= 0) {
        this.info = { msg: 'Formulário inválido', success: false}

        return;
      }

      const game = { name: this.name, description: this.description, image: this.image, price: this.price }
      createGame(game)
        .then((data) => {
          if (data) {
          this.name = '';
          this.price = 0;
          this.description = '';
          this.image = '';
            this.info = { msg: 'Sucesso ao criar jogo', success: true}
          } else {
            this.info = { msg: 'Falha ao criar jogo', success: false}
          }
        });
    }
  }
}
</script>

<style scoped>
  .form-container {
    width: 50%;
    padding: 16px;
    margin: auto;
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

  .input-field {
    position: relative;
    padding: 4px 0px 4px 4px;
    margin: 4px 0px 0px 4px;
  }

  .input-field > input, textarea {
    border-radius: 5px;
    height: 25px;
    width: calc(100% - 16px);
  }

  .form-actions {
    height: 40px;
    display: flex;
    justify-content: flex-end;
  }

  .form-actions > button {
    margin-right: 8px;
  }

  .info {
    padding: 10px;
    margin: 6px 6px 20px 6px;
    border-radius: 8px;
    
    font-weight: 600;
    transition: .5s;
  }

  .fail {
    background: rgb(136, 0, 0);
    color: white;
  }

  .success {
    background: green;
    color: white;
  }
</style>