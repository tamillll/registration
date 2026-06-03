import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import axios from 'axios'
import { useEffect } from 'react'



function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState();
  let [data, setData] = useState([]);
  let [newdata, setNew] = useState()

  function submit() {
    axios.post("http://localhost:3000/post", {
      name, pass, email
    })
  }
  useEffect(() => {
    axios.get("http://localhost:3000/read").then(d => setData(d.data))
  })
  function update(id) {
    axios.put("http://localhost:3000/update", {
      id: id, name: newdata
    })
  }
  function dele(id) {

    axios.delete(`http://localhost:3000/delete/${id}`)
    console.log("delte")

  }

  return (
    <>
      <div className='reg'>
        <label>UserName</label><br /><br />
        <input type="text" onChange={(e) => { setName(e.target.value) }} /><br /><br />
        <label>Password</label><br /><br />
        <input type="text" onChange={(e) => { setPass(e.target.value) }} /><br /><br />
        <label>Email</label><br /><br />
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
        <button onClick={submit}>Submit</button>
        
      </div>
      <h1>all Users</h1>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>update name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value) => {
              return (
                <tr key={value._id}>
                  <th>{value.name}</th>
                  <th>{value.password}</th>
                  <th>{value.email}</th>
                  <th><input type="text" onChange={(e) => { setNew(e.target.value) }} /></th>
                  <th><button onClick={() => { update(value._id) }}>Update</button></th>
                  <th><button onClick={() => { dele(value._id) }}>delete</button></th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    
    </>
  )
}

export default App
