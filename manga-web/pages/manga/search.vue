<template lang="html">
  <div class="">
    <div class="">
      <v-text-field v-model="query" label="Search"></v-text-field>
      <v-btn @click="handleSearchManga">Search</v-btn>
    </div>
    <v-divider class="mt-2 mb-2"></v-divider>
    <div class="d-flex flex-wrap">
      <v-card
        v-for="(manga, index) in results"
        :key="index"
        class="ma-2"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Rated: {{ manga.rated }}</div>
            <v-list-item-title class="headline mb-1">
              {{ manga.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ manga.synopsis }}</v-list-item-subtitle>
          </v-list-item-content>

          <img :src="manga.image_url" alt="" :style="{ width: '80px' }" />
        </v-list-item>
      </v-card>
    </div>
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
    handleSearchManga() {
      const url = `https://api.jikan.moe/v3/search/anime?q=${this.query}&page=1`
      axios.get(url).then((res) => {
        console.log(res.data)
        this.results = res.data.results
      })
    },
  },
}
</script>

<style lang="css" scoped></style>
