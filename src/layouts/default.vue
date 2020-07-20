<template>
  <v-app>
    <v-app-bar class="clear" fixed app>
      <a href="/">
        <img src="/logo-wide.png" width="160px" />
      </a>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/common/Footer.vue'

export default {
  components: { Footer },
  data() {
    return {}
  }
}
</script>
