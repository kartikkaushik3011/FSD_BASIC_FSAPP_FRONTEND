import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'

function App() {
  return (
    <div>
      <h1>User Registration Portal</h1>
      <Register/>
      <br />
      <hr />
      <br />
      <h2>Update User:</h2>
      <br />
      <Update/>
      <br />
      <hr />
      <br />
      <h2>Delete User:</h2>
      <br />
      <Delete/>
      <br />
      <hr />
      <h2>User Details:</h2>
      <View/>
      <hr />

    </div>
  )
}

export default App
