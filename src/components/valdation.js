import React from 'react'
export default function Valdation  ()  {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Are you a previledge customer?</h2>
      <a>
        <button style={styles.button}>Yes</button>
      </a>
      <a href='/sign-in/customerSignin' style={styles.link}>
        <button style={styles.button}>No</button>
      </a>
    </div>
     


  )
}
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




