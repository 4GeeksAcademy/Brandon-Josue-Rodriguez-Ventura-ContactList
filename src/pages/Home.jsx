import { useState, useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const API_URL_BASE = "https://playground.4geeks.com/contact"
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  const deleteContact = async (contactId) => {
	try {
		const response = await fetch (API_URL_BASE + `/agendas/JosuVentu04/contacts/${contactId}`, {
			method: "DELETE"
		});

		if (!response.ok){
			throw new Error("Hubo un problema al obtener la tarea")
		}
		obtenerContactos();
	} catch(error) {
		console.log(error)
	}
  };

  const obtenerContactos = async () => {
	try {
		const response = await fetch (API_URL_BASE + "/agendas/JosuVentu04");

		if (!response.ok){
			throw new Error("Hubo un problema al obtener el contacto")
		};
		const data = await response.json();
		dispatch({type:"set_contact", payload:{contacts: data.contacts}})
	} catch (error) {
		console.log(error)
	}
  }
  useEffect (()=>{
	obtenerContactos()
  }, []);
  return (
	<div className="text-center mt-5 text-white" style={{backgroundColor: "#171717", borderRadius: "15px"}} >
		<h1>Contactos</h1>
		
		<ul className="pe-3 pb-2">
			{store.contacts.map((contact, index)=>{
				return (
				<div key= {contact.id} className="d-flex text-center justify-content-between rounded-3 fs-4 border p-2 mb-3"> 
					<div className="">
					<li className="fs-4"> {contact.name} - {contact.address} - {contact.id}  </li>
					</div>
					<div>
					<i className="fa-solid fa-trash me-3" onClick={()=>{deleteContact(contact.id)}} style={{ cursor: 'pointer' }}></i>
					<Link to={`/edit-contact/${contact.id}`}>
                                <i className="fa-solid fa-user-pen me-3"></i>
                            </Link>
					</div>
				</div>
			)})}
		</ul>
		<Link to={"/create-new-contact"}>Crear nuevo contacto</Link>
	</div>
);
}; 
