<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
         <lifecycle></lifecycle>
         <comp1></comp1>
      </div>
    </div>
  </div>
</template>

<script>
import Lifecycle from './lifecycle';
import Comp1 from './comp1';

export default {
  data() {
    return {

    }
  },
  components: {
    Lifecycle,
    Comp1
  }
}
</script>

<style scoped>

</style>
