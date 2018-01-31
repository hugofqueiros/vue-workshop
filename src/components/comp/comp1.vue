<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
    <button @click="changeLink">Click to changeLink</button>
    <a :href="link">Link  - {{ link }}</a>
    <hr>
    <p>Counter {{ counter }}</p>
    <button v-on:click="increase(2, $event)">Increase by 2</button>
    <button v-on:click="counter++">Click me</button>
    <p>{{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10' }}</p>
    <hr>
    <!-- same doing stopPropagation or .stop-->
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }} -
      <span v-on:mousemove="onMouseMove">DEAD SPOT</span>
      <span v-on:mousemove.stop="">DEAD SPOT2</span>
    </p>

    <hr>
    <!-- Key modifiers -->
    <input type="text" v-on:keyup.enter.space="alertMe">

    <!-- Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) Only fire if the "key down" is the ENTER key -->
    <hr>
    <div>
        what
        <input type="text" v-on:keydown="val = $event.target.value">
        <p>{{ val }}</p>
    </div>
    <div>
        Only enter
        <input type="text" v-on:keydown.enter="val = $event.target.value">
        <p>{{ val }}</p>
    </div>

    <hr>
    <!-- danger allows cross browser attacks -->
    <p v-html="finishedLink"></p>

    <!-- 2 way binding -->
    <hr>
    <p>VueJs is cool - {{name}}</p>
    <input type="text" v-model="name">

    <hr>
    <div>
      <div class="demo" v-bind:class="{red: attachRed}"></div>
      <div class="demo" @click="attachRed = !attachRed" :class="{red: attachRed, blue: !attachRed}"></div>
      <div class="demo" :class="[color, {red: attachRed}]"></div>
      <hr>
      <div class="demo" :style="{backgroundColor: color}"></div>
      <!-- for some reason this is not working -->
      <div class="demo" :style="myStyle"></div>
      <hr>
      <input type="type" v-model="color">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'wooooo',
      link: 'http://google.com',
      counter: 0,
      finishedLink: '<a href="google.com">Google</a>',
      x: 0,
      y: 0,
      name: '',
      val: '',
      attachRed: false,
      color: 'green',
      color2: 'gray'
    }
  },
  methods: {
    sayHello: () => {
      this.title = 'Hello!';
      return this.title;
    },
    changeLink: function() {
      this.link = 'http://apple.com'
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    onMouseMove: function(event) {
      event.stopPropagation();
    },
    alertMe: function() {
      alert('Alert!');
    },
    myStyle: function() {
      return {
        width: this.width + 'px',
        backgroundColor: 'green'
      }
    }
  },
  // async things
  watch: {
    counter: function(value) {
      const vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  }
}
</script>

<style scoped>
.demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.blue {
    background-color: blue;
}
</style>

