<template lang="html">
  <div class="container">
    Manga Search Page
    <Input
      v-model="query"
      placeholder="Enter something..."
      style="width: 100%; margin-top: 10px"
    />
    <Button @click="handleSearchMange" style="margin-top: 20px" type="primary"
      >Search</Button
    >
    <Button
      @click="handleClearSearchMange"
      style="margin-top: 20px"
      type="error"
      >Clear</Button
    >
    <Divider></Divider>
    <Row type="flex" justify="space-around">
      <Card
        v-for="(manga, index) in results"
        :key="index"
        style="width: 300px; margin-top: 10px"
      >
        <p slot="title">{{ manga.title }}</p>
        <p>
          {{ manga.synopsis }}
        </p>
        <img
          style="
            width: auto !important;
            height: 140px !important;
            margin: 0 auto 1em auto;
          "
          :src="manga.image_url"
          alt=""
        />
      </Card>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      results: [],
    }
  },
  methods: {
    async handleSearchMange() {
      const endpoint = `https://api.jikan.moe/v3/search/anime?q=${this.query}&page=1`
      const res = await axios.get(endpoint)
      this.results = res.data.results
    },
    handleClearSearchMange() {
      this.results = []
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  margin: 40px 60px;
}
</style>
