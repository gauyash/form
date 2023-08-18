import React from 'react'
import Form from '../Form'

const PersonalInfo = () => {
  return (
    <div className='box mx-auto rounded-xl'>
      <h1 className='text-5xl font-bold mb-3'>Personal info</h1>
      <p>Please provide your name, email address, and phone number</p>

      <Form />
    </div>
  )
}

export default PersonalInfo