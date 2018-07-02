import Rebase from 're-base'
import firebase from 'firebase' 

const config = {
    apiKey: "AIzaSyCdZqBVKDZj-NUg1jAs9hddEcLh0vLTs9E",
    authDomain: "teca-online.firebaseapp.com",
    databaseURL: "https://teca-online.firebaseio.com",
    projectId: "teca-online",
    storageBucket: "",
    messagingSenderId: "514624770338"
  }; 

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const auth = firebase.auth()
export default base 