<template>
  <div>
    <h1>Custom Directives</h1>
    <p v-highlight="'green'">Color this</p>
    <p v-whatever>WHATEVER DUDE</p>
  </div>
</template>

<script>
export default {
  directives: {
    'whatever': {
      bind(el, binding, vnode) {
        el.style.backgroundColor = 'blue'
      }
    }
  }
}
</script>

