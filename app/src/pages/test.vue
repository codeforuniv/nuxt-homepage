<template>
  <v-container style="max-width: 800px">
    <!-- <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
      </v-fade-transition>
    </h2> -->

    <!-- <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-3">Remaining: {{ remainingTasks }}</strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 black--text">Completed: {{ completedTasks }}</strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row> -->
    <v-card>
        <v-card-title>2019/8/12 イデアソン @Code for Japan</v-card-title>
        <v-img :src="image_src" max-width="800px"></v-img>
        <v-card-text>2019/8/12 @Code for Japan オフィス

前半に2人のスピーカーによるセッションの後、各グループで今の大学が抱える課題感をKJ法を使って構造化しました。

ケータリングはかささぎ食堂さん(@magpie_kitchen1116)でした！</v-card-text>
    </v-card>

    <v-divider class="mb-4"></v-divider>

    <v-card>コメント</v-card>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <!-- <v-checkbox v-model="task.done" color="info darken-1"> -->
              <!-- <template v-slot:label> -->
              <div
                :class="task.done && 'grey--text' || 'text--primary'"
                class="mr-4"
                v-text="task.time"
              ></div>
              <div
                :class="task.done && 'grey--text' || 'text--primary'"
                class="m-1"
                v-text="task.text"
              ></div>
              <!-- </template> -->
              <!-- </v-checkbox> -->
            </v-list-item-action>

            <v-spacer></v-spacer>

            <!-- <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success">check</v-icon>
            </v-scroll-x-transition> -->
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
    <v-row class="align-center">
      <v-col cols='10'>
        <v-text-field class="mt-4" v-model="task" label="コメント入力" solo>
          <!-- <v-fade-transition v-slot:append>
            <v-icon v-if="task" @click="create">add_circle</v-icon>
          </v-fade-transition> -->
        </v-text-field>
      </v-col>
      <v-col cols='2'>
        <v-btn outline round class="green mt-4" @click="create">投稿</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    image_src: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/68310782_116681003017929_3993429826970058752_o.jpg?_nc_cat=110&_nc_oc=AQnWFRGs8t9djUKlozZyAO2nzS-7KEBkNTfKKgdeeld_GmwZchjSPVi0IKyGVepWZBM&_nc_ht=scontent-nrt1-1.xx&oh=b72d8ae610d1b9edeaf67ef3e4aa8d1c&oe=5E55DF5E',
    tasks: [
      {
        done: false,
        text: 'Foobar',
        time: '2019-11-18 00:13'
      },
      {
        done: false,
        text: 'Fizzbuzz',
        time: '2019-11-18 00:15'
      }
    ],
    task: null
  }),

  computed: {
    completedTasks () {
      return this.tasks.filter(task => task.done).length
    },
    progress () {
      return (this.completedTasks / this.tasks.length) * 100
    },
    remainingTasks () {
      return this.tasks.length - this.completedTasks
    }
  },

  methods: {
    create () {
      const d = new Date()
      const fmt = d.getFullYear() + '-' + ('00' + (d.getMonth() + 1)).slice(-2) + '-' + ('00' + d.getDate()).slice(-2) + ' ' + ('00' + d.getHours()).slice(-2) + ':' + ('00' + d.getMinutes()).slice(-2)

      this.tasks.push({
        done: false,
        text: this.task,
        time: fmt
      })

      this.task = null
    }
  }
}
</script>
