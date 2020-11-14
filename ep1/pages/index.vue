<template>
  <div>
    <span v-if="canSee"> you can see me</span>
    <span v-else> you cannot see me</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canSee: false,
    }
  },
}
</script>

<style></style>
