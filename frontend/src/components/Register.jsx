import { useState } from "react";
import axios from "axios";
// import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom/dist";

// function Register() {
//   const navigate = useNavigate()
//   const [data, setData] = useState({
//     vorName: '',
//     nachName: '',
//     strasse: '',
//     hausNummer: 0,
//     postleitzahl: 0,
//     ort: '',
//     telefon: 0,
//     email: '',
//     password: '',
//   })

//   const registerUser = async (e) => {
//     e.preventDefault()
//     const {name,email, password} = data

//     try {
//       const {data} = await axios.post('http://localhost:5000/register', {
//         name, email, password
//       })
//       if(data.error){
//         console.error(data.error)
//       } else {
//         setData({})
//         console.log('Register Successful. Welcome!')
//         navigate('/login')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={registerUser}>
//       <label htmlFor="">Vorname</label>
//         <input type="text" placeholder='Vorname' value={data.vorName} onChange={(e) => setData({...data, vorName: e.target.value})} />

//         <label htmlFor="">Nachname</label>
//         <input type="text" placeholder='Nachname' value={data.nachName} onChange={(e) => setData({...data, nachName: e.target.value})} />
//         <label htmlFor="">Strasse</label>
//         <input type="text" placeholder='Straße' value={data.strasse} onChange={(e) => setData({...data, strasse: e.target.value})} />

//         <label htmlFor="">Hausnummer</label>
//         <input type="number" placeholder='Hausnummer' value={data.hausNummer} onChange={(e) => setData({...data, hausNummer: e.target.value})} />
//         <label htmlFor="">Plz</label>
//         <input type="number" placeholder='PLZ' value={data.postleitzahl} onChange={(e) => setData({...data, postleitzahl: e.target.value})} />
//         <label htmlFor="">Ort</label>
//         <input type="text" placeholder='Ort' value={data.ort} onChange={(e) => setData({...data, ort: e.target.value})} />

//         <label htmlFor="">Telefon</label>
//         <input type="number" placeholder='Telefonnummer' value={data.telefon} onChange={(e) => setData({...data, telefon: e.target.value})} />

//         <label htmlFor="">Email</label>
//         <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

//         <label htmlFor="">Password</label>
//         <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

//         <button type='submit'>Submit</button>
//       </form>
//     </div>

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    vorName: "",
    nachName: "",
    strasse: "",
    hausNummer: "",
    postleitzahl: "",
    ort: "",
    telefon: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {
      vorName,
      nachName,
      strasse,
      hausNummer,
      postleitzahl,
      ort,
      telefon,
      email,
      password,
    } = data;

    try {
      const { data } = await axios.post("http://localhost:5000/register", {
        vorName,
        nachName,
        strasse,
        hausNummer,
        postleitzahl,
        ort,
        telefon,
        email,
        password,
      });
      if (data.error) {
        console.error(data.error);
      } else {
        setData({
          vorName: "",
          nachName: "",
          strasse: "",
          hausNummer: "",
          postleitzahl: "",
          ort: "",
          telefon: "",
          email: "",
          password: "",
        });
        console.log("Register Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Register
        </h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label
              htmlFor="vorName"
              className="block text-sm font-medium text-gray-600">
              Vorname
            </label>
            <input
              type="text"
              id="vorName"
              placeholder="Vorname"
              value={data.vorName}
              onChange={(e) => setData({ ...data, vorName: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nachName"
              className="block text-sm font-medium text-gray-600">
              Nachname
            </label>
            <input
              type="text"
              id="nachName"
              placeholder="Nachname"
              value={data.nachName}
              onChange={(e) => setData({ ...data, nachName: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="strasse"
              className="block text-sm font-medium text-gray-600">
              Straße
            </label>
            <input
              type="text"
              id="strasse"
              placeholder="Straße"
              value={data.strasse}
              onChange={(e) => setData({ ...data, strasse: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hausNummer"
              className="block text-sm font-medium text-gray-600">
              Hausnummer
            </label>
            <input
              type="text"
              id="hausNummer"
              placeholder="Hausnummer"
              value={data.hausNummer}
              onChange={(e) => setData({ ...data, hausNummer: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="postleitzahl"
              className="block text-sm font-medium text-gray-600">
              PLZ
            </label>
            <input
              type="text"
              id="postleitzahl"
              placeholder="PLZ"
              value={data.postleitzahl}
              onChange={(e) =>
                setData({ ...data, postleitzahl: e.target.value })
              }
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ort"
              className="block text-sm font-medium text-gray-600">
              Ort
            </label>
            <input
              type="text"
              id="ort"
              placeholder="Ort"
              value={data.ort}
              onChange={(e) => setData({ ...data, ort: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefon"
              className="block text-sm font-medium text-gray-600">
              Telefonnummer
            </label>
            <input
              type="text"
              id="telefon"
              placeholder="Telefonnummer"
              value={data.telefon}
              onChange={(e) => setData({ ...data, telefon: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter email..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="enter password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="btn-primary px-4 py-2 rounded-md text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out">
            Konto erstellen
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
