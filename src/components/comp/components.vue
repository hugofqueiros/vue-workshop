<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
         <lifecycle></lifecycle>
         <comp1></comp1>
         <conditionals></conditionals>
         <h1>Loops</h1>
         <loops></loops>
      </div>
    </div>
  </div>
</template>

<script>
import Lifecycle from './lifecycle';
import Comp1 from './comp1';
import Conditionals from './conditionals';
import Loops from './loops';

export default {
  data() {
    return {

    }
  },
  components: {
    Lifecycle,
    Comp1,
    Conditionals,
    Loops
  }
}
</script>

<style scoped>

</style>
