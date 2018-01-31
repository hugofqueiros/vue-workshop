<template>
  <div>
    <div class="title">
        <slot name="title"></slot>
        <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
      </div>
      <hr>
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-style: italic;
}
</style>
