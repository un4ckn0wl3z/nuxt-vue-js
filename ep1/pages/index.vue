<template lang="html">
  <div class="">
    <h1 :class="[activeClass, errorClass]">Hello World</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      activeClass: 'active',
      errorClass: 'text-dange',
      classObject: {
        active: true,
        'text-danger': true,
      },
    }
  },
}
</script>

<style lang="css" scoped>
h1.active {
  color: red;
}
</style>
