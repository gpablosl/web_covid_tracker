import React, { useCallback, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./landpage.css";

function Landpage() { 
    
    const [usernameReg, setUsernameReg] = useState("");
    const [apellidoReg, setApellidoReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [descriptionReg, setDescriptionReg] = useState("");
    const [statusReg, setStatusReg] = useState("");

    const register = useCallback(() => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            apellido: apellidoReg,
            password: passwordReg,
            email: emailReg,
            phone: phoneReg,
            description: descriptionReg,
            status: statusReg,

        }).then((response) => {
            console.log(response);
        });
    }, [usernameReg, apellidoReg, passwordReg, emailReg, phoneReg, descriptionReg, statusReg]);

    return ( 
        <div className="container ">
        <form className="row g-2">
            <h1> Crea una cuenta </h1> 
            <hr/>
            <div className="col mb-2 flex-column">
                <input type="text" placeholder="Nombre" className="form-control" id="Name" aria-describedby="Name" onChange={(e) => {setUsernameReg(e.target.value); }} />
            </div>
            <div className="col mb-2 flex-column">
                <input type="text" placeholder="Apellido" className="form-control" id="SecondName" aria-describedby="emailHelp" onChange={(e) => {setApellidoReg(e.target.value); }} />
            </div>
            <div className="my-2">
                <input type="email"  placeholder="Correo electrónico" className="form-control" id="Email" aria-describedby="emailHelp" onChange={(e) => {setEmailReg(e.target.value); }} />
            </div>
            <div className="my-2">
                <input type="tel"  placeholder="Número celular" className="form-control" id="Telephone" aria-describedby="Celular"onChange={(e) => {setPhoneReg(e.target.value); }} />
            </div>
            <div className="my-2">
                <input type="password" placeholder="Contraseña" className="form-control" id="Password" aria-describedby="Password" onChange={(e) => {setPasswordReg(e.target.value); }} />
            </div>
            <div className="d-grid gap-2  mx-auto ">
                <button onClick={register} type="submit" className="btn btn-primary btn-lg">Registrarse</button>
            </div>

            <button type="button" className="btn btn-link blue-600"><Link to="/inicioS">¿Ya tienes una cuenta?</Link></button>
        </form>
        </div>
    )
};

export default Landpage;

