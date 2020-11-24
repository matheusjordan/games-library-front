<template>
  <div :class="{'game-card big-card': editMode, 'game-card': !editMode}">
    <div class="game-img">
        <img :src="game.image">

        <div class="edit-actions" v-if="editMode">
             <button disabled>Cancelar</button>
            <button @click="saveGame">Salvar</button>
        </div>
    </div>
    <div class="game-info">
        <div class="container">
            <div class="title"> Título </div>
            <label v-if="!editMode" class="description">{{ game.name }}</label>
            
            <div v-else class="input-field">
                <input type="text" v-model="name">
            </div>
        </div>

        <div class="container">
            <div class="title"> Preço </div>
            <label v-if="!editMode" class="description">R$ {{ game.price }}</label>

            <div v-else class="input-field">
                <input type="text" v-model="price">
            </div>
        </div>
        <div class="container">
            <div class="title"> Descrição </div>
            <label v-if="!editMode" class="description">{{ game.description }}</label>
            
            <div v-else class="input-field">
                <input type="text" v-model="description">
            </div>
        </div>
        <div class="container" v-if="editMode">
            <div class="title"> Imagem </div>

            <div class="input-field">
                <input type="text" v-model="image">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { updateGame } from '../shared/services/games.service';
export default {
    props: {
        game: Object,
        editMode: Boolean
    },
    methods: {
        saveGame: function() {
            const game = { 
                id: this.game.id,
                name: this.name,
                description: this.description,
                price: this.price,
                image: this.image 
            }

            updateGame(game)
                .then((sucess) => {
                    alert(sucess ? 'sucesso' : 'falha')
                })
        }
    },
    data() {
        console.log(this.game)
        return {
            price: this.game.price,
            name: this.game.name,
            description: this.game.description,
            image: this.game.image,
        }
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

    .big-card {
        height: unset;
        max-height: 362px;
    }

    .game-img {
        width: 40%;
        margin-right: 12px;
        max-height: 300px;
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

    .input-field {
        position: relative;
        padding: 4px 0px 4px 4px;
        margin: 4px 0px 0px 4px;
    }

    .input-field > input {
        border-radius: 5px;
        height: 25px;
        width: calc(100% - 16px);
    }

    .edit-actions {
        height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        overflow-x: auto;
    }

    .edit-actions > button {
        margin: 12px;
        height: 40px;
        border-radius: 8px;
        padding: 0px 16px;
        cursor: pointer;
    }
</style>