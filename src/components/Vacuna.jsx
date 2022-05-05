import React,{ Component } from "react";
import "./landpage.css";

class Vacuna extends Component { 
    render() {
        return ( 
            //<div className="register-box"> </div>
            <div className="container-sm">
            <form className="mb-3">
                <h1> ¿Haz sido vacunado? </h1> 
                <hr/>
                <div name="radio">
                    <input type="radio" name="format" value="cha"/>
                    <label>Si</label>
                </div>
                <input type="number" list="vacunas"/>
                <div className = "Dropdown">
                    <datalist id="vacunas">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="más de 3"></option>
                    </datalist>
                </div>
                <br/>
                <div name="radio">
                    <input type="radio" name="format" value="cha"/>
                    <label>No</label>
                </div>
                <hr/>
                <button type="submit" className="btn btn-primary">Continuar</button>
            </form>
            </div>
        )
    }
}
export default Vacuna