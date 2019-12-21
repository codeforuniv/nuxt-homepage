<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      class="clear"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <a href="/">
        <img
          src="/logo-wide.png"
          width="160px"
        >
      </a>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
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
    <v-content>
      <v-container
        class="pa-0"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2019 Code for University</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
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
          icon: 'mdi-alien-outline',
          title: 'Test',
          to: '/test'
        },
        {
          icon: 'mdi-animation',
          title: 'Products',
          to: '/products'
        },
        {
          icon: 'mdi-file-edit',
          title: 'Ideas',
          to: '/ideas'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="sass" scoped>
.clear
  opacity: 1
</style>
