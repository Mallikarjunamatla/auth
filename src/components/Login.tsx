import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import styles from '../styles/Auth.module.css'


const theme = createTheme();

export default function SignIn() {
    const [logged , setLogged] = React.useState<boolean>(false);
  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setLogged(true)
    //Api call
  };
 const onSignInWithGoogle = (e : React.MouseEvent<HTMLButtonElement>)=>{
     e.preventDefault();
     //firebase api call
     setLogged(true)
 }
  return (
    <ThemeProvider theme={theme}>
     {!logged ? (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        className={styles.login__box}
        sx={{
            marginTop : 8
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
             <Typography className={styles.g__text}  component='div'>or</Typography>
            <Button
             onClick={onSignInWithGoogle}
              fullWidth
              variant="contained"
              className={styles.google}
              sx={{ mt: 3, mb: 2, 
                backgroundColor : 'AppWorkspace',
               
             }}
            >
             <Avatar sx={{
                 backgroundColor : 'AppWorkspace'
             }}><img 
             className={styles.g__image}
             src='google.svg'
             alt='google sign in'
             ></img></Avatar> Sign In with Google
            </Button>
          </Box>
        </Box>
      </Container> 
     ) : (
         <Navigate to='/home' />
     )} 
    </ThemeProvider>
  );
}