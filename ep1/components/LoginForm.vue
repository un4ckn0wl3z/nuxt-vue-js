<template lang="html">
  <div class="">
    <input type="text" name="username" v-model="username" />
    <br />
    <input type="password" name="password" v-model="password" />
    <br />
    <button @click="handleLoginClicked()">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'anuwat',
      password: '123456',
    }
  },
  methods: {
    handleLoginClicked() {
      this.$emit('login-submitted', this.username, this.password)
    },
  },
}
</script>

<style lang="css" scoped></style>
