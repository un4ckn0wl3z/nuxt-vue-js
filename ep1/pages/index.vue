<template lang="html">
  <div class="">
    <LoginForm @login-submitted="handleLoginFormSubmitted"></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  components: {
    LoginForm,
  },
  methods: {
    handleLoginFormSubmitted(username, password) {
      console.log('indexPage', username, password)
    },
  },
}
</script>

<style lang="css" scoped></style>
