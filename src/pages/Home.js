import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'
import GitHub from '@material-ui/icons/GitHub'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Carolina</h2>
        <div className='prompt'>
          <p> 
            A software developer with a passion for learning and creating.
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'></div>
    </div>
  )
}

export default Home 