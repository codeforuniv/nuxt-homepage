<template>
  <v-carousel height="auto" cycle hide-delimiters>
    <v-carousel-item v-for="(image, index) in images" :key="index">
      <v-img :src="image.src" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    'images': {
      type: Array,
      'default': () => ([])
    }
  }
}
</script>
