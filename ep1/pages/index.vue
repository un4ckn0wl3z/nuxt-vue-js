<template>
  <div>
    <span>{{ message }}</span>
    <br />
    <input type="text" name="" value="" v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style></style>
