import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { useTitle } from "../../../Utils/UseTitle";
import { useState } from "react";
import "./ContactUs.css";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';


export function ContactUs() {
  useTitle("Contact Us");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://formsubmit.co/alexj.cole@hotmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _captcha: "false",
        _template: "table",
        _subject: "New Contact Message",
      }),
    });

    navigate("/thanks"); // redirect to Home page in your React app
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  

  return (
    <div className="ContactUs">
      <Typography variant="h4">Contact Us</Typography>

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

      <form onSubmit={handleSubmit} onReset={handleReset} className="contact-form">
      <TextField label="שם מלא" name="fullName" fullWidth required value={formData.fullName} onChange={handleChange} className="textBox"/>
        <TextField label="נייד" name="phone" fullWidth required value={formData.phone} onChange={handleChange} className="textBox"/>
        <TextField label="Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} className="textBox"/>
        <TextField label="טקס חופשי" name="message" multiline rows={3} fullWidth required value={formData.message} onChange={handleChange} className="textBox"/>

        <ButtonGroup fullWidth variant="contained">
          <Button type="submit" color="primary">
            שלח
          </Button>
          <Button type="reset" color="secondary">
            נקה
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}
