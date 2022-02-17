<template>
  <div id="app">
    <router-view/>
    <notifications group="success">
      <template slot="body" slot-scope="props">
        <div class="text-sm font-montserrat font-medium rounded-lg bg-white text-big-stone shadow-lg mt-2 mr-2 py-2">
            <a class="title">
              {{props.item.title}}
            </a>
            <a class="close" @click="props.close">
              <i class="fa fa-fw fa-close"></i>
            </a>
            <div v-html="props.item.text">
            </div>
        </div>
      </template>
    </notifications>
    <vue-confirm-dialog></vue-confirm-dialog>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
