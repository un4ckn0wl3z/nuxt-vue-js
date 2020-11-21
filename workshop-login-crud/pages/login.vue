<template lang="html">
  <div class="">
    Login page
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn @click="handleLoginClicked"> Login </v-btn>
  </div>
</template>

<script>
export default {
  layout: 'session',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLoginClicked() {
      const data = {
        user: {
          email: this.email,
          password: this.password,
        },
      }

      try {
        const response = await this.$auth.loginWith('local', { data })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
