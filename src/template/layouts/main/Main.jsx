import React from 'react';
import PropTypes from 'prop-types';
import Header from 'template/layouts/header/Header';
import Nav from 'template/nav/Nav';
import { makeStyles } from '@material-ui/core';
function Main({ head, children }) {
  const classes = useStyles();
  return (
    <>
      <Header head={head} />
      <main className={classes.main}>
        <Nav />
        {children}
      </main>
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

export default Main;

const useStyles = makeStyles(() => ({
  main: {
    minHeight: '40vh',
    background: '#fff',
    color: 'black',
    position: 'relative'
  },
  container: { padding: '1rem', maxWidth: 1360, margin: '0 auto' }
}));
