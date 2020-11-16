<template lang="html">
  <div class="">
    name: 'users' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }} <br />
    <v-text-field v-model="query" label="key word"></v-text-field>
    <v-btn
      v-for="i in [1, 2, 3, 4, 5, 6]"
      :key="i"
      @click="handleSearchClicked(i)"
      depressed
      color="primary"
    >
      Go to user ID {{ i }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    handleSearchClicked(userId) {
      // console.log(userId)
      this.$router.push({
        name: 'users-id',
        params: { id: userId },
      })
    },
  },
}
</script>

<style lang="css" scoped></style>
