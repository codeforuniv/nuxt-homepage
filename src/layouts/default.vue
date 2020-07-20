<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" class="clear" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <a href="/">
        <img src="/logo-wide.png" width="160px" />
      </a>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: { Footer },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-animation',
          title: 'Apps',
          to: '/apps'
        },
        {
          icon: 'mdi-file-edit',
          title: 'Ideathon',
          to: '/ideas'
        }
      ]
    }
  }
}
</script>
