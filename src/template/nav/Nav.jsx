import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { TokenContext } from 'common/context/context';

export default function Nav() {
  return <ButtonAppBar />;
}

function ButtonAppBar() {
  const [accessToken, setAccessToken] = useState(null);
  const { setToken } = useContext(TokenContext);
  const classes = useStyles();

  const handleChange = e => {
    setAccessToken(e.target.value.toString());
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log('Output ~ file: Nav.jsx ~ line 52 ~ ButtonAppBar ~ e', e.target.value);
    setToken(accessToken);
    localStorage.setItem('access_token', accessToken);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.typoGrow}>
            <NavLink to="/" className={classes.homeTitle}>
              Slender Github Explorer
            </NavLink>
          </Typography>
          <form onSubmit={onSubmit}>
            <Input placeholder="Access Token" type="text" className={classes.inputD} onChange={handleChange} />
            <Button type="submit" color="inherit" onSubmit={onSubmit}>
              Login
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  typoGrow: {
    flexGrow: 1
  },
  homeTitle: {
    color: 'white',
    textDecoration: 'none'
  },
  inputD: {
    backgroundColor: 'white',
    padding: '0.5rem',
    borderRadius: '4px'
  }
}));
