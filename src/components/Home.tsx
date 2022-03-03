import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Auth.module.css'
type Props = {}

function Home({}: Props) {
  return (

    <Container >
        <Box
         className={styles.hello}
        >
            <Typography variant='subtitle1' component='div'>
            Hello Welcome Back !
            </Typography>
            <NavLink  to='/login' >
                Sign Out
            </NavLink>
        </Box>
    </Container>
  )
}

export default Home