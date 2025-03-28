import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

    
const EditContact = () => { 
    const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");

        const params = useParams();
        const {store} = useGlobalReducer();
    
        const handleUpdateContact = async (contact_id) => {
            let updaptedContact ={
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
            }
            try {
                const response = await fetch (`https://playground.4geeks.com/contact/agendas/JosuVentu04/contacts/${contact_id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(updaptedContact)
                });
                if (!response.ok){
                  throw new Error("Ocurrio un error al editar el contacto con id: " + contact_id )
                }
                
    
            } catch (error) {
                console.log(error)
            }
    
        };

        useEffect(() => {
          const contact = store.contacts.find((contact) => contact.id == params.contactId);
      
          if (contact) {  
              console.log(contact);
              setName(contact.name);
              setPhone(contact.phone);
              setEmail(contact.email);
              setAddress(contact.address);
          } else {
              console.log('Contacto no encontrado');
          }
      }, [params.contactId, store.contacts]);
        
        return(
            <div className="text-white">
              <div className="text-center">
                <h1>Actualizar contacto {params.contactId}</h1>
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
      <button type="button" className="btn btn-primary" onClick={() => handleUpdateContact(params.contactId)}>
        Actualizar Contacto
      </button>
      <Link to={"/"}>Regresar</Link>
      </div>
    </form>
    
            </div>
        )
    };

export default EditContact;

