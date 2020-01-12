<template>
  <v-carousel height="auto" cycle hide-delimiters>
    <v-carousel-item v-for="(image, index) in images" :key="index">
      <v-img :src="image.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['images']
}
</script>
