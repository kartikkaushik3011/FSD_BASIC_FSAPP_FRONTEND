import React from 'react'
import axios from 'axios'
const Register = () => {
  const apiUrl=import.meta.env.VITE_BACKEND_URL
    const handleregister =async (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const age =e.target.age.value;
        const users={name,age}
        await axios.post(`${apiUrl}/users`,users)
        alert('User registered successfully')
        e.target.name.value='';
        e.target.age.value='';    
    }
  return (
    <div>
      <form onSubmit={handleregister}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register