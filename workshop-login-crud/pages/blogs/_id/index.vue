<template lang="html">
  <div class="">{{ blog }}</div>
</template>

<script>
import * as BlogsApi from '@/utils/blogsApi'
export default {
  data() {
    return {
      blog: null,
    }
  },
  async mounted() {
    const res = await BlogsApi.show(this.$route.params.id)
    this.blog = res.data
  },
}
</script>

<style lang="css" scoped></style>
