<template>
  <v-container style="max-width: 800px">
    <v-row>
      <v-col v-for="(post,index) in posts" :key="index" :cols="post.flex">
        <v-card class="mx-auto" height='500px' fluid @click.stop="post.dialog = true">
          <v-card class="pa-4 title" tile="true" height='90px'>{{ post.title }}</v-card>
          <v-img fluid :src="post.images[0]"></v-img>
          <v-card-text>{{ post.content }}</v-card-text>

          <v-dialog v-model="post.dialog" max-width="600px">
            <v-card class="grey fluid">
              <v-card class="pa-4 font headline">{{ post.title }}</v-card>
              <v-divider></v-divider>
              <v-carousel>
                <v-carousel-item
                  v-for="(image,i) in post.images"
                  :key="i"
                  :src="image"
                >
                </v-carousel-item>
              </v-carousel>
              <v-card tile="true" class="pa-4">{{ post.content }}</v-card>
              <v-card class="mt-4 pl-2" tile="true">コメント</v-card>
              <v-divider></v-divider>
              <v-card v-if="post.tasks.length > 0">
                <v-slide-y-transition class="py-0" group tag="v-list">
                  <template v-for="(task, i) in post.tasks">
                    <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                    <v-list-item :key="`${i}-${task.comment}`">
                      <v-list-item-action>
                        <div
                          class="mr-4"
                          v-text="task.time"
                        ></div>
                        <div
                          class="m-1"
                          v-text="task.comment"
                        ></div>
                      </v-list-item-action>

                      <v-spacer></v-spacer>
                    </v-list-item>
                  </template>
                </v-slide-y-transition>
              </v-card>
              <v-row class="align-start">
                <v-col cols='10'>
                  <v-text-field class="mt-4" v-model="post.word" label="コメント入力" solo>
                  </v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols='2'>
                  <v-btn outlined height='50px' class="green mt-4" v-on:click="create(index,post.word)">投稿</v-btn>
                </v-col>
              </v-row>
            </v-card>

          </v-dialog>

        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mb-4"></v-divider>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    posts: [
      {
        dialog: false,
        title: '2019/8/12 アイデアソン@Code for Japan オフィス',
        content: '前半に2人のスピーカーによるセッションの後、各グループで今の大学が抱える課題感をKJ法を使って構造化しました。ケータリングはかささぎ食堂さん(@magpie_kitchen1116)でした！',
        images: [
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/68310782_116681003017929_3993429826970058752_o.jpg?_nc_cat=110&_nc_oc=AQnWFRGs8t9djUKlozZyAO2nzS-7KEBkNTfKKgdeeld_GmwZchjSPVi0IKyGVepWZBM&_nc_ht=scontent-nrt1-1.xx&oh=b72d8ae610d1b9edeaf67ef3e4aa8d1c&oe=5E55DF5E'
        ],
        tasks: [
        //   {
        //     // done: false,
        //     // comment: 'Foobar',
        //     // time: '2019-11-18 00:13'
        //   },
        //   {
        //     // done: false,
        //     // comment: 'Fizzbuzz',
        //     // time: '2019-11-18 00:15'
        //   }
        ],
        word: null,
        flex: 6
      },
      {
        dialog: false,
        title: '2019 11/15 開発@東大',
        content: 'いよいよ本腰入れて開発はじめ！！まずはプラットホームになるページから作って、大学をもっと面白くしていけるものにするぞ…Code for Japan, America, IKOMA, Niigata, AICHI,みんな個性あってとっても参考になる！',
        images: [
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/75412289_150687489617280_6605594129982291968_n.jpg?_nc_cat=104&_nc_ohc=nWLJeeNAs6IAQklaZMzBVMDXCdmYkNtPL5XsKHRMBhv_XlG1gru9oOf3w&_nc_ht=scontent-nrt1-1.xx&oh=f4589280ce0980d710ab275f465fc2ef&oe=5E46C146',
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/74826467_150687506283945_4268904755843039232_n.jpg?_nc_cat=100&_nc_ohc=XqJHC7rXTDQAQkE0xSGdu1-pLZN0jmQy0dI-duMjwPlBkNATbMVU2NlGw&_nc_ht=scontent-nrt1-1.xx&oh=3b0f8e3683806d9fa0cf74f4c7dd0b8b&oe=5E4430B2',
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/74333545_150687532950609_2777432028927229952_n.jpg?_nc_cat=108&_nc_ohc=kufRB5WtlugAQnMC-syP_jrzU3Jqr3YfH39S8ZzaEv53jAvpG98efqRpg&_nc_ht=scontent-nrt1-1.xx&oh=f7aca4cb452f95afc315598e422ede2b&oe=5E4E5E55'
        ],
        tasks: [
          // {
          //   done: false,
          //   comment: 'Foobar',
          //   time: '2019-11-18 00:13'
          // },
          // {
          //   done: false,
          //   comment: 'Fizzbuzz',
          //   time: '2019-11-18 00:15'
          // }
        ],
        word: null,
        flex: 6
      }
    ]
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
    create (index, word) {
      if (word != null) {
        const d = new Date()
        const fmt = d.getFullYear() + '-' + ('00' + (d.getMonth() + 1)).slice(-2) + '-' + ('00' + d.getDate()).slice(-2) + ' ' + ('00' + d.getHours()).slice(-2) + ':' + ('00' + d.getMinutes()).slice(-2)

        this.posts[index].tasks.push({
          // done: false,
          comment: this.posts[index].word,
          time: fmt
        })
        this.posts[index].word = null
      }
    }
  }
}
</script>
