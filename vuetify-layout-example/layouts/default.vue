<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from '@/Components/Global/Sidebar'
import Topbar from '@/Components/Global/Topbar'
import Footer from '@/Components/Global/Footer'

export default {
  components: {
    Sidebar,
    Topbar,
    Footer,
  },
}
</script>
