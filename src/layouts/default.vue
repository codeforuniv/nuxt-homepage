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
      <v-footer padless>
        <v-card
          flat
          tile
          width="100%"
          class="white--text text-center pa-5"
          style="background: rgb(40,170,170)"
        >
          <v-row>
            <v-col cols="12" md="4" class="text-left">
              <v-row class="ma-2">
                Twitter
              </v-row>
              <v-row class="justify-center">
                <a
                  class="twitter-timeline"
                  data-width="400"
                  data-height="300"
                  href="https://twitter.com/codeforuniv?ref_src=twsrc%5Etfw"
                  >Tweets by codeforuniv</a
                >
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                />
              </v-row>
            </v-col>
            <v-col cols="12" md="4" class="text-left">
              <v-row class="ma-2">
                クイックリンク
              </v-row>
              <v-row class="px-10 align-center">
                <v-list flat color="rgba(0,0,0,0)">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    class="white--text"
                  >
                    {{ item.title }}
                  </v-list-item>
                </v-list>
              </v-row>
            </v-col>
            <v-col cols="12" md="4" class="text-left">
              <v-row class="ma-2">
                お問い合わせ
              </v-row>
              <v-row class="px-10 align-center">
                <v-list flat color="rgba(0,0,0,0)">
                  <v-list-item class="white--text">
                    Email: code4univ@gmail.com
                  </v-list-item>
                  <v-list-item href="https://twitter.com/codeforuniv">
                    Twitter: @codeforuniv
                  </v-list-item>
                  <v-list-item
                    href="https://www.facebook.com/Code-for-University-103516374334392"
                  >
                    Facebook: Code for University
                  </v-list-item>
                </v-list>
              </v-row>
            </v-col>
          </v-row>

          <v-divider />

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>Code for University.</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
