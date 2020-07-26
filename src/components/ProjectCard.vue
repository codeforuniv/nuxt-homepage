<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :href="post.appUrl"
      class="mx-auto"
      height="100%"
      target="_blank"
    >
      <v-img :src="post.image.url" class="white--text align-end" height="200px">
        <div class="post-title" style="height: 30%">
          <v-card-title>{{ post.title }}</v-card-title>
        </div>
      </v-img>
      <v-card-text class="text--primary">{{ post.content }}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({
        title: '',
        image: '',
        content: '',
        appUrl: ''
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.post-title
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
</style>
