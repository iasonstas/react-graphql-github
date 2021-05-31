/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
// Not Found Page , 404.js in Next is for mispelling and redirection for 404 error

export default function Custom404() {
  const classes = useStyles();
  return (
    <main className={classes.flexCenter}>
      <h1 className={classes.title}>404 - That page does not seem to exist...</h1>
      <iframe src="https://giphy.com/embed/l2JehQ2GitHGdVG9y" width="480" height="362" frameBorder="0" allowFullScreen></iframe>

      <Link to="/">
        <Button variant="contained" color="primary" className={classes.m2}>
          Go home
        </Button>
      </Link>
    </main>
  );
}

export const useStyles = makeStyles(e => ({
  root: {
    width: '100%'
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    justifyContent: 'center'
  },
  m2: {
    margin: '2rem'
  }
}));
