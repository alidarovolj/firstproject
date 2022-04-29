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

    <input v-model="inpData" type="text" class="border border-black"><br>

    <button @click="increment()">+</button><p>Counter: {{ counter }}</p><button @click="decrement()">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0,
      inpData: null,
      test: 0,
      items: [0,1,2,3,4,5,6,7]
    }
  },
  methods: {
    showAlert() {
      alert('hello World')
    },
    increment() {
      this.counter = this.counter + 1
    },
    decrement() {
      this.counter = this.counter - 1
    }
  }
};
</script>