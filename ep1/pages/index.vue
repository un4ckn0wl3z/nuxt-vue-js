<template lang="html">
  <div>
    <div>{{ msg }}</div>
    <br />
    <div v-html="rawHtml"></div>
    <br />
    <span :id="spanId">hello</span>
    <br />
    <button :disabled="btnDisable">cannot click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      rawHtml: '<h1>Hello World!</h1>',
      spanId: 'hello',
      btnDisable: true,
    }
  },
}
</script>

<style lang="css" scoped></style>
