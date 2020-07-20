import { firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const ref = db.collection('users')

export const state = () => ({
  users: []
})

export const getters = {
  user: state => state.users
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', ref)
  })
}
