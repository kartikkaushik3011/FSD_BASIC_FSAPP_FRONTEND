import React from 'react'
import axios from 'axios'

function Delete() {
    const apiUrl=import.meta.env.VITE_BACKEND_URL
    const [id, setId] = React.useState('')
    const handleSubmit =async (e) => {
        e.preventDefault()
        await axios.delete(`${apiUrl}/users/${id}`)
        .catch((err) => {
            console.error('Error:', err.response?.data || err.message);
          }); 
        alert('User deleted successfully')
        setId('')     
        e.target.id.value='';    
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder='ID' name='id' onChange={(e)=>{
            setId(e.target.value)
        }}/>
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}

export default Delete
