import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '150px',
          marginBottom: '20px',
        }}
      >
        About
      </h1>
      <p style={{ textAlign: 'center' }}>
        This is the TODO List App v1.0.0. It is a part of a React crash course.
        <br />
        Source:{' '}
        <a href='https://www.youtube.com/watch?v=sBws8MSXN7A'>
          https://www.youtube.com/watch?v=sBws8MSXN7A
        </a>
      </p>
    </React.Fragment>
  )
}

export default About
