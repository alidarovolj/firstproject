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

    <div v-for="item of jsonData" :key="item.id">
      <div class="block my-4">
        <p>{{ item.title }} - {{ item.description }}</p>
      </div>
    </div>

    <input v-model="inpData" type="text" class="border border-black"><br>

    <form class="w-1/3 block mx-auto" action="">
      <input v-model="form.title" type="text" class="w-full p-2 bg-gray-200 rounded-xl my-3" placeholder="Enter title...">
    </form>
    <button @click="sendData()" class="block mx-auto bg-black text-white w-max px-3 py-2 rounded-lg">Send data</button>

    <button @click="increment()">+</button><p>Counter: {{ counter }}</p><button @click="decrement()">-</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      counter: 0,
      inpData: null,
      test: 0,
      items: [0,1,2,3,4,5,6,7],
      jsonData: null,
      form: {
        title: null
      }
    }
  },
  methods: {
    async sendData() {
      await axios.post('http://localhost:3001/mountains', { title: this.form.title })
      console.log('Data sent')
    },
    showAlert() {
      alert('hello World')
    },
    increment() {
      this.counter = this.counter + 1
    },
    decrement() {
      this.counter = this.counter - 1
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  async mounted() {
    let res = await axios.get('http://localhost:3001/mountains');
    this.jsonData = res.data
  },
};
</script>