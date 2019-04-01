import React from 'react'
import { Box, Button, CheckBox, Form, FormField } from 'grommet'
import { Deploy, FormTrash, Group, User, UserAdd } from 'grommet-icons'

const AddUserForm = props => (
  <Box width="medium">
    <Form onSubmit={({ value }) => console.log('Submit', value)}>
      <Box margin="medium">
        <User />
        <FormField name="gh-user-handle" />
      </Box>
      <Button
        type="submit"
        label="Submit"
        style={{ marginLeft: '1.5%', transform: 'scale(0.8)' }}
      />
    </Form>
  </Box>
)

export default AddUserForm
