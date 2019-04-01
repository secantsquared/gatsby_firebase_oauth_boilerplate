import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import AppBar from '../components/AppBar'

const SignIn = ({ firebase }) => (
  <div>
    <AppBar />
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default withFirebase(SignIn)
