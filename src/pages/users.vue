<template>
  <div>
    <h1>firestore contents here</h1>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Users',
  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions({
      init: 'users/init'
    })
  }
}
</script>
<style></style>
