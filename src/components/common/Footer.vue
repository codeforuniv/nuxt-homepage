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
          <v-row class="ma-2">Twitter</v-row>
          <v-row class="px-2 justify-center">
            <a
              class="twitter-timeline"
              data-width="400"
              data-height="300"
              href="https://twitter.com/codeforuniv?ref_src=twsrc%5Etfw"
              >Tweets by codeforuniv</a
            >
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="text-left">
          <v-row class="ma-2">Facebook</v-row>
          <v-row class="mx-10 justify-center">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/Code-for-University-103516374334392/"
              data-tabs="timeline,events,messages"
              data-width=""
              data-height="300"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="text-left">
          <v-row class="ma-2">Contact</v-row>
          <v-row class="px-10 align-center">
            <v-list flat color="rgba(0,0,0,0)">
              <v-list-item>
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
