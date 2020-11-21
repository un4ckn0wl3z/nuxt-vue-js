<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from '@/Components/Global/Sidebar'
import Topbar from '@/Components/Global/Topbar'

export default {
  components: {
    Sidebar,
    Topbar,
  },
}
</script>
