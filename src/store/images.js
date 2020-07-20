import { firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const ref = db.collection('images')

export const state = () => ({
  images: []
})

export const getters = {
  images: state => state.images
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('images', ref)
  })
}
