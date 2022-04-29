<template>
  <div id="app">
    <div class="flex items-center hover:cursor-pointer">
      
      <div class="w-10 h-10 bg-techonodom m-5 rounded-full text-center flex items-center justify-center">
        <i class="fa-solid fa-chevron-right text-white font-bold"></i>
      </div>

      <p class="font-montserrat font-bold">Click me!</p>

      <p @click="showAlert()" v-if="test === 1">Hello World!</p>
      <p @click="test = 1" v-if="test === 0">Hello Vue!</p>

      </div>

      <div v-for="item of items" :key="item">
        <div class="block">
          <p class="text-green-500">Hello!</p>
          <p>{{ item }}</p>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      test: 0,
      items: [0,1,2,3,4,5,6,7]
    }
  },
  methods: {
    showAlert() {
      alert('hello World')
    }
  }
};
</script>