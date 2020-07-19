<template>
  <v-container>
    <v-row>
      <v-col v-for="(post, index) in posts" :key="index" sm="6">
        <NewsCard :post="post" />
      </v-col>
    </v-row>
    <v-divider class="mb-4" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'News',
  components: {
    NewsCard
  },
  computed: {
    ...mapGetters({
      posts: 'news/posts'
    })
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions({
      init: 'news/init'
    })
  }
}
</script>
