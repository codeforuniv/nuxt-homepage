<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(post, index) in events"
        :key="index"
        sm="6"
      >
        <NewsCard :post="post" />
        <!-- <v-card
          class="mx-auto"
          height="500px"
          fluid
        >
          <v-card
            class="pa-4 title"
            tile
            height="90px"
          >
            {{ post.title }}
            <v-img
              :src="post.images[0]"
            />
            <v-card-text>{{ post.content }}</v-card-text>
          </v-card> -->
        <!-- <v-dialog v-model="post.dialog" max-width="600px">
            <v-card class="grey fluid">
              <v-card class="pa-4 font headline">
                {{ post.title }}
              </v-card>
              <v-divider />
              <v-carousel>
                <v-carousel-item
                  v-for="(image, i) in post.images"
                  :key="i"
                  :src="image"
                />
              </v-carousel>
              <v-card tile="true" class="pa-4">
                {{ post.content }}
              </v-card>
              <v-card class="mt-4 pl-2" tile="true">
                コメント
              </v-card>
              <v-divider />
              <v-card v-if="post.tasks.length > 0">
                <v-slide-y-transition class="py-0" group tag="v-list">
                  <template v-for="(task, i) in post.tasks">
                    <v-divider v-if="i !== 0" :key="`${i}-divider`" />
                    <v-list-item :key="`${i}-${task.comment}`">
                      <v-list-item-action>
                        <div v-text="task.time" class="mr-4" />
                        <div v-text="task.comment" class="m-1" />
                      </v-list-item-action>

                      <v-spacer />
                    </v-list-item>
                  </template>
                </v-slide-y-transition>
              </v-card>
              <v-row class="align-start">
                <v-col cols="10">
                  <v-text-field
                    v-model="post.word"
                    class="mt-4"
                    label="コメント入力"
                    solo
                  />
                </v-col>
                <v-spacer />
                <v-col cols="2">
                  <v-btn
                    v-on:click="create(index, post.word)"
                    outlined
                    height="50px"
                    class="green mt-4"
                  >
                    投稿
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog> -->
        <!-- </v-card> -->
      </v-col>
    </v-row>
    <v-divider class="mb-4" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Events',
  components: {
    NewsCard
  },
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions({
      init: 'events/init'
    })
  }
}
</script>
