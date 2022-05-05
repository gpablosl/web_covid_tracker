import React, { useCallback, useState } from "react";
import Axios from "axios";

function InicioSesion() { 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
            username: username,

        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
        });
    };

    return ( 
        <div className="container ">
            <form className="row g-2">
                <h1> Inicio sesión </h1> 
                <hr/>
                <div className="my-2">
                <input type="email"  placeholder="Correo electrónico" className="form-control"  aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value); }}/>
                </div>
                <div className="my-2">
                <input type="password"  placeholder="Contraseña" className="form-control"  aria-describedby="emailHelp" onChange={(e) => {setPassword(e.target.value); }}/>
                </div>
                <div className="d-grid gap-2  mx-auto ">
                <button onClick={login} type="submit" className="btn btn-primary btn-lg">Iniciar sesión</button>
                </div>
                <button type="button" className="btn btn-link blue-600">¿Olvidaste tu contraseña?</button>
            </form>
            <div className="">
            {loginStatus}
            </div>
        </div>


    )
};

export default InicioSesion;

