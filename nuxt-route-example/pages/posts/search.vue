<template lang="html">
  <div class="">
    name: 'posts-search' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }} <br />
    <v-text-field v-model="query" label="key word"></v-text-field>
    <v-btn @click="handleSearchClicked" depressed color="primary">
      Search
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
    handleSearchClicked() {
      // console.log(this.query)
      // this.$router.replace({
      //   name: 'posts-search',
      //   query: {
      //     q: this.query,
      //   },
      // })
      this.$router.push({
        name: 'posts-search',
        query: {
          q: this.query,
        },
      })
    },
  },
}
</script>

<style lang="css" scoped></style>
