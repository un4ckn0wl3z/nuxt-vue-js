<template lang="html">
  <div class="">
    Blog !!! Required login
    <v-card
      v-for="blog in blogs"
      :key="blog.id"
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p class="display-1 text--primary">el·ee·mos·y·nar·y</p>
      </v-card-text>
      <p class="display-1 text--primary">{{ blog.id }}</p>

      <v-card-actions>
        <v-btn
          :to="{ name: 'blogs-id', params: { id: blog.id } }"
          text
          color="teal accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import * as BlogsApi from '@/utils/blogsApi'
export default {
  middleware: 'auth',
  data() {
    return {
      blogs: [],
    }
  },
  async mounted() {
    const res = await BlogsApi.index()
    this.blogs = res.data
  },
}
</script>

<style lang="css" scoped></style>
