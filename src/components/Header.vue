<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock App</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/" activeClass="active" tag="li"><a>Home</a></router-link>
                    <router-link to="/whatever" activeClass="active" tag="li"><a>Whatever</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Wallet: {{ bitcoin }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      funds: 100
    }
  },
  computed: {
    bitcoin() {
      return 100 * 20;
    }
  },
  methods: {
    endDay() {
      console.log('end of day!');
    },
    saveData() {
      console.log('save data');
    }
  }
}
</script>

<style scoped>

</style>
