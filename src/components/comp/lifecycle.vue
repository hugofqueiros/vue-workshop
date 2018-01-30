<template>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
  beforeCreate: function() {
		console.log("beforeCreate");
	},
	created: function() {
		console.log("created");
	},
	beforeMount: function() {
		console.log("beforeMount");
	},
	mounted: function() {
		console.log("mounted");
	},
	beforeUpdate: function() {
		console.log("beforeUpdate");
	},
	updated: function() {
		console.log("updated");
	},
	beforeDestroy: function() {
		console.log("beforeDestroy");
	},
	destroyed: function() {
		console.log("destroyed");
	}
}
</script>
