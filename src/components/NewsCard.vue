<template>
  <v-card class="mx-auto" height="100%">
    <v-img :src="post.image.url" class="white--text align-end" height="200px">
      <div class="news-title" style="height: 30%">
        <v-card-title>{{ post.title }}</v-card-title>
      </div>
    </v-img>

    <v-card-subtitle>
      {{ post.date | formatDate }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ post.content }}
    </v-card-text>
  </v-card>
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
        date: Date()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.news-title
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
</style>
