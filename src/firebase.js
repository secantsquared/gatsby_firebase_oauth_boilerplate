const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGE_ID
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
