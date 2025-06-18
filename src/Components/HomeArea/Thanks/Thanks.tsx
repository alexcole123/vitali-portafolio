import { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Thanks.css";

export function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000); // wait 3 seconds before redirecting

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Thanks">
      <Typography variant="h4" gutterBottom>
        תודה רבה על הפנייה!
      </Typography>
      <Typography variant="body1" gutterBottom>
        ההודעה נשלחה בהצלחה. אנו ניצור איתך קשר בהקדם.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/home")}>
        חזרה מיידית לדף הבית
      </Button>
    </div>
  );
}
