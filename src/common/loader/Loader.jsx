import React from 'react';
import './Loader.css';

export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
