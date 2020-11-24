<template>
  <div class="form-container">
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
      statusMsg: null
    }
  },
  methods: {
    newGame: function() {
      if (this.name === '' || this.description === '' || this.image === '' || this.price <= 0) {
        alert('Formulário inválido');
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
            alert('Sucesso ao criar jogo')
          } else {
            alert('Falha ao criar jogo')
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
</style>