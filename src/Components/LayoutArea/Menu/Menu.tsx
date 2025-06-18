import { NavLink } from "react-router-dom";
import "./Menu.css";
// import { useSelector } from "react-redux";
// import { AppState, store } from "../../../Redux/state";
import type { JSX } from "react";

export function Menu(): JSX.Element {


    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>


            <NavLink to="/portafolio" end>Portafolio</NavLink>

            <NavLink to="/price">Price</NavLink>

            <NavLink to="/about">About</NavLink>

            {/* end = only exact route will paint the menu */}
            <NavLink to="/contactus" end>Contact</NavLink>

        </div>
    );
}
