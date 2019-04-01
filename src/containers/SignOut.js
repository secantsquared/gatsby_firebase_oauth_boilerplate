import React from 'react'
import { withFirebase } from '../components/FirebaseContext'
import { Button } from 'grommet'
import { Logout } from 'grommet-icons'

const Signout = props => {
  const signOut = () => {
    props.firebase.auth().signOut()
  }
  return (
    <Button
      style={{ marginBottom: '80px', transform: 'scale(0.8)' }}
      icon={<Logout />}
      onClick={signOut}
      label="Sign Out"
    />
  )
}

export default withFirebase(Signout)
