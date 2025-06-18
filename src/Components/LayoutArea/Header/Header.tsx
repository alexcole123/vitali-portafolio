import "./Header.css";
import headerSource from "../../../Assets/Images/header.png";


export function Header() {
    return (
        <div className="Header">
            <img src={headerSource} alt="Header" />
        </div>
    );
}
