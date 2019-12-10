/**
 * firebase initialize plugin
 */
import Vue from 'vue'
import * as firebase from 'firebase'

const FIREBASE_CONFIG = process.env.FIREBASE_CONFIG
const firebaseConfig = JSON.parse(FIREBASE_CONFIG)

firebase.initializeApp(firebaseConfig)

Object.defineProperty(Vue.prototype, '$firebase', { value: firebase })
