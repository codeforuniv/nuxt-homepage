import { firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const ref = db.collection('events')

export const state = () => ({
  events: []
})

export const getters = {
  events: state => state.events
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('events', ref)
  })
}
