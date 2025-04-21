import React, { useEffect } from 'react'
import axios from 'axios'

function View() {
    const [data, setData] = React.useState([])
    const apiUrl=import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        axios.get(`${apiUrl}/users`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [data, apiUrl])
  return (
    <div>
        {data.map((user) => {
            return (
                <div key={user.id}>
                    <p style={{"display":"flex", "alignItems":"center", "margin":"2px"}}>ID: <h3>{user.id}</h3></p>
                    <p style={{"display":"flex", "alignItems":"center", "margin":"2px"}}>Name: <h3>{user.name}</h3></p>
                    <p style={{"display":"flex", "alignItems":"center"}}>Age: <p>{user.age}</p></p>
                    <hr width="25%" align="left"/>
                </div>
            )
        })}
    </div>
  )
}

export default View
