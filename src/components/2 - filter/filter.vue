<template>
  <div class="">
    <h1>Filters & Mixins</h1>
    <p>{{ text | toUppercase }}</p>
    <hr>
    <input v-model="filterText">
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>

// I can add this to a js file and add it as a mixin
// import {whatever-mixin} from './mixin.js'
// mixins: whatever-mixin
export default {
  data() {
    return {
      text: "Hello there!",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  filters: {
    toUppercase(value) { // local filter
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

