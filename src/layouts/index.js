import React, { useState, useEffect } from 'react'

import getFirebase from '../firebase'
import FirebaseContext from '../components/FirebaseContext'
import SignIn from '../containers/SignIn'

function Layout(props) {
  const [firebase, setFirebase] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    const database = import('firebase/database')

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      setFirebase(firebase)

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          setAuthenticated(false)
        } else {
          setAuthenticated(true)
        }
      })
    })
  }, [])

  if (!firebase) return null

  return (
    <FirebaseContext.Provider value={firebase}>
      {authenticated ? props.children : <SignIn />}
    </FirebaseContext.Provider>
  )
}

export default Layout
