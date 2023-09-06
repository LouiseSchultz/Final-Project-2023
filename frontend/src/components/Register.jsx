import { useState } from "react"
import axios from 'axios'
// import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    vorName: '',
    nachName: '',
    strasse: '',
    hausNummer: 0,
    postleitzahl: 0,
    ort: '',
    telefon: 0,
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name,email, password} = data

    try {
      const {data} = await axios.post('http://localhost:5000/register', {
        name, email, password
      })
      if(data.error){
        console.error(data.error)
      } else {
        setData({})
        console.log('Login Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
      <label htmlFor="">Vorname</label>
        <input type="text" placeholder='Vorname' value={data.vorName} onChange={(e) => setData({...data, vorName: e.target.value})} />

        <label htmlFor="">Nachname</label>
        <input type="text" placeholder='Nachname' value={data.nachName} onChange={(e) => setData({...data, nachName: e.target.value})} />
        <label htmlFor="">Strasse</label>
        <input type="text" placeholder='Straße' value={data.strasse} onChange={(e) => setData({...data, strasse: e.target.value})} />

        <label htmlFor="">Hausnummer</label>
        <input type="number" placeholder='Hausnummer' value={data.hausNummer} onChange={(e) => setData({...data, hausNummer: e.target.value})} />
        <label htmlFor="">Plz</label>
        <input type="number" placeholder='PLZ' value={data.postleitzahl} onChange={(e) => setData({...data, postleitzahl: e.target.value})} />
        <label htmlFor="">Ort</label>
        <input type="text" placeholder='Ort' value={data.ort} onChange={(e) => setData({...data, ort: e.target.value})} />

        <label htmlFor="">Telefon</label>
        <input type="number" placeholder='Telefonnummer' value={data.telefon} onChange={(e) => setData({...data, telefon: e.target.value})} />
        
        <label htmlFor="">Email</label>
        <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

        <label htmlFor="">Password</label>
        <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
