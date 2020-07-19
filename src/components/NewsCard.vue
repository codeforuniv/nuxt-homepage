<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2" class="mx-auto">
      <v-img :src="news.imageUrl" class="white--text align-end" height="200px">
        <div class="news-title" style="height: 30%">
          <v-card-title>{{ news.title }}</v-card-title>
        </div>
      </v-img>

      <v-card-subtitle>
        {{ news.date }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ news.content }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>
          Share
        </v-btn>

        <v-btn color="orange" text>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: () => ({
        title: '',
        imageUrl: '',
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
