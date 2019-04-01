import React from 'react'
import { Box, Heading } from 'grommet'

const AppBar = () => (
  <Box
    tag="nav"
    direction="row"
    align="center"
    justify="between"
    background="dark-1"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    <Heading level="1" size="small" margin="none" color="light">
      Doorman
    </Heading>
  </Box>
)

export default AppBar
