import React, { useState } from "react";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateContact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleRegisterContact = async () => { 
        let newContact ={
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        }
        try {
            const response = await fetch ("https://playground.4geeks.com/contact/agendas/JosuVentu04/contacts/", {
              method: "POST",
              headers: {
                "Content-Type" : "application/json"
              },
              body: JSON.stringify(newContact)
            });
            if (!response.ok){
              throw new Error("Ocurrio un error al crear  el contacto")
            }
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");

        } catch (error) {
            console.log(error)
        }

    }

    return(
        <div className="text-white">
          <div className="text-center">
          <h1>Crear Contacto </h1>
          </div>
            <form>
  <div className="m-3">
    <label htmlFor="inputName" className="form-label">
      Nombre
    </label>
    <input
      type="text"
      value= {name}
      className="form-control"
      style={{backgroundColor: "#171717", color: "white", borderColor: "#4c4f55"}}
      id="inputName"
      onChange={e=>{
        setName(e.target.value)
      }}
    />
  </div>
  <div className="m-3">
    <label htmlFor="inputPhone" className="form-label">
      Numero de telefono
    </label>
    <input
      type="text"
      value={phone}
      className="form-control"
      style={{backgroundColor: "#171717", color: "white", borderColor: "#4c4f55"}}
      id="inputPhone"
      onChange={e=>{
        setPhone(e.target.value)
      }}
    />
  </div>
  <div className="m-3">
    <label htmlFor="inputEmail" className="form-label">
      Email
    </label>
    <input
      type="text"
      value={email}
      className="form-control"
      style={{backgroundColor: "#171717", color: "white", borderColor: "#4c4f55"}}
      id="inputEmail"
      onChange={e=>{
        setEmail(e.target.value)
      }}
    />
  </div>
  <div className="m-3">
    <label htmlFor="inputAddress" className="form-label">
      Direccion
    </label>
    <input
      type="text"
      value={address}
      className="form-control"
      style={{backgroundColor: "#171717", color: "white", borderColor: "#4c4f55"}}
      id="inputAddress"
      onChange={e=>{
        setAddress(e.target.value)
      }}
    />
  </div>
  <div className="text-center">
  <button type="button" className="btn btn-primary" onClick={handleRegisterContact}>
    Registrar Contacto
  </button>
  <div className="mt-2">
    <Link to="/" className="d-block">O regresar a contactos</Link>
  </div>
</div>
  
</form>

        </div>
    )
}

export default CreateContact;

