<template>
  <div>
    <!-- loop throught 10<-->
    <span v-for="(n, i) in 10" :key="i">{{ n }}</span>
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="i">{{ ingredient }} ({{ i }})</li>
    </ul>
    <button @click="ingredients.push('spices')">Add New</button>
    <hr>
      <!-- You can use like this -->
    <template v-for="(ingredient, index) in ingredients">
      <h1>{{ingredient}}</h1>
      <p>{{ index }}</p>
    </template>

    <ul>
      <li v-for="(person, i) in persons" :key="i">
        <div v-for="(value, key, index) in person" :key="index">{{ key }}: {{ value }} ({{ index }})</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Max', age: 27, color: 'red' },
        { name: 'Anna', age: 'unknown', color: 'blue' }
      ]
    }
  }
}
</script>
