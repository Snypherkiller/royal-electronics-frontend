import { Button } from 'flowbite-react';
import React from 'react';

const CusVal = () => {
  return (
    <div style={styles.container}>
      <h4 style={styles.heading}>Do you want to be a privileged Customer?</h4>
      <a href='/Sign-up/previledge'>
        <button style={styles.button}>Yes</button>
      </a>
      <a href="/Sign-up/normal" style={styles.link}>
        <button style={styles.button}>No</button>
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '250px',
    fontSize:'50px'
  },
  heading: {
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    margin: '0 10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#1D4ED8',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CusVal;
