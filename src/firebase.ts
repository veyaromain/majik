import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpy_hDQRgiOAagl_B-60X40Un-xXgIqI0",
  authDomain: "majik-93819.firebaseapp.com",
  projectId: "majik-93819",
  storageBucket: "majik-93819.firebasestorage.app",
  messagingSenderId: "769115065126",
  appId: "1:769115065126:web:2f941215d76932ccfbcfe7",
  measurementId: "G-E801C5SNZ9"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
