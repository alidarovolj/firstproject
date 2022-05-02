<template>
  <div id="app">
    <div class="container mx-auto">
      <div>
        <div class="flex items-start justify-between my-5" v-for="game of games" :key="game.id">
          <div class="flex-shrink-0">
            <img :src="game.image" alt="">
          </div>

          <div class="text-left px-4">
            <p class="font-bold mb-3">{{ game.id }}. {{ game.title }}</p>
            <p class="text-sm">{{ game.description }}</p>
          </div>

          <div>
            <p class="bg-green-500 text-white font-bold p-3 rounded-lg">{{ game.metascore }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data() {
    return {
      games: null
    }
  },
  async mounted() {
    let res = await axios.get('http://localhost:3001/games');
    this.games = res.data;
  }
};
</script>