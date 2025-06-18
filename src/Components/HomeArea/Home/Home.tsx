import myHome from "./Home.module.css";
import homeSource from "../../../Assets/Images/home.png";
import { useTitle } from "../../../Utils/UseTitle";
// import type { JSX } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Home(){
  useTitle("Home");

  const name = "Vitali";
  const phone = "050-0000000";

  return (
    <div
      className={myHome.container}
      style={{ backgroundImage: `url(${homeSource})` }}
    >
      <div className={myHome.overlay}>
        <h1>הצטרפו אלי לחוות את העולם מבעד לעדשה</h1>
        <h2>{name}</h2>
        <h5>{phone}</h5>

        <div className={myHome.socialIcons}>
          <IconButton href="https://www.instagram.com/vitaly_photography/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
          <IconButton href="https://api.whatsapp.com/send?phone=972526691896&text=%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%9C+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%D7%A2%D7%9C+%D7%94%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA+%D7%A6%D7%99%D7%9C%D7%95%D7%9D+" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}/>
            </IconButton>
          <IconButton href="https://www.facebook.com/mskyphoto?locale=he_IL" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
          <IconButton href="https://www.pinterest.com/vitaly_photography/" target="_blank">
            <FontAwesomeIcon icon={faPinterest} />
          </IconButton>
          <IconButton href="https://www.tiktok.com/@vitaly_machkovsky?is_from_webapp=1&sender" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </IconButton>
        </div>

        <p>
           אני {name} צלם דחגמכדמכגלחדגלדגכמחדגמכלדמגכחמדגמכדלגחמחדמחכדחדג
        </p>
      </div>
    </div>
  );
}
