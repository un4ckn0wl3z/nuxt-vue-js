<template lang="html">
  <li>{{ item.text }}</li>
</template>

<script>
export default {
  props: ['item'],
  mounted() {
    console.log(JSON.stringify(this.item))
  },
}
</script>

<style lang="css" scoped></style>
