<template>
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
          <v-row class="px-2 justify-center">
            <a
              class="twitter-timeline"
              data-width="500"
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
            Facebook
          </v-row>
          <v-row class="px-2 justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCode-for-University-103516374334392%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="300"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="text-left">
          <v-row class="ma-2">
            Contact
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
</template>
