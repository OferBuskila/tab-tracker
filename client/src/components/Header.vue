<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{
          name: 'root'
        }">TabTracker</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark :to="{
          name: 'login'
        }">Login</v-btn>
      <v-btn flat dark :to="{
          name: 'register'
        }">Sign Up</v-btn>
      <v-btn flat dark>Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #e9e;
}
</style>
