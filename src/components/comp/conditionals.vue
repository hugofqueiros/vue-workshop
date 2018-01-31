<template>
  <div>
    <hr>
    <h1>Conditionals</h1>
    <p v-if="show">You can see me <span>Hello</span></p>
    <p v-else>Now you don't</p>
    <hr>
      <!-- Template to group elements and don't have a div attached here -->
    <template v-if="show">
      <h1>Heading</h1>
      <p>Inside a template</p>
    </template>

    <hr>
    <p v-show="show">Do you also see me?</p>
    <button @click="show = !show">Switch</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
