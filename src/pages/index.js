import React from 'react'
import AddUserForm from '../components/AddUserForm'
import Layout from '../components/Layout'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <SignOut />
    <AddUserForm />
  </Layout>
)

export default IndexPage
