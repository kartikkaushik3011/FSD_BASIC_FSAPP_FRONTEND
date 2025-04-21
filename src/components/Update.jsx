import React from 'react'
import axios from 'axios'

function Update() {
    const [id, setId] = React.useState('')
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const handleSubmit =async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:9000/users/${id}`, { name, age })
        .catch((err) => {
            console.error('Error:', err.response?.data || err.message);
          });   
        alert('User updated successfully')
        setId('')
        setName('')
        setAge('')
        e.target.id.value='';
        e.target.name.value='';
        e.target.age.value='';      
    }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{"display":"flex", "alignItems":"center", "margin":"2px", "gap":"10px"}}>
        <input type="number" placeholder='ID' name='id' onChange={(e)=>{
            setId(e.target.value)
        }}/>
        <input type="text" placeholder='Name' name='name' onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input type="number" placeholder='Age' name='age' onChange={(e)=>{
            setAge(e.target.value)
        }}/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update
