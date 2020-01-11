import { firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const ref = db.collection('news')

export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => state.posts
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', ref)
  })
}
