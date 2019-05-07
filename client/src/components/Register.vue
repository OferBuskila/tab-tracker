<template>
  <div >
    <h1>Resister</h1>
    <input     type="email"      name="email"      v-model="email"     placeholder="email"      />
    <input type="password"  v-model="password" name="password" placeholder="password" />
    <br>
    <button @click='register' >Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''

    }
  },
  watch: {
    email (value) {
      console.log('emai vhnagre value', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>
<style scoped>
</style>
