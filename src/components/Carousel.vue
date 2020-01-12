<template>
  <v-carousel height="auto" cycle hide-delimiters>
    <v-carousel-item v-for="(image, index) in images" :key="index">
      <v-img :src="image.src">
        <!-- <v-row
          class="dark fill-height"
          align="center"
          justify="center"
        >
          <p class="tagline display-1">
            {{ item.text }}
          </p> -->
        <!-- </v-row> -->
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['images']
}
</script>

<style lang="sass" scoped>
.tagline
  color: white

.dark
  background-color: black
  opacity: 0.5
</style>
