<template>
  <div id="app">
    <h1 class="bg-yellow-600 
    text-center
    text-3xl
    text-white
    font-bold
    my-10
    p-10">
      Hello World djaskldj askldjklas jklasj dklsaj kld!
    </h1>
    <test />
  </div>
</template>

<script>
import test from "./components/FirstComponent.vue";

export default {
  name: "App",
  components: {
    test,
  },
};
</script>