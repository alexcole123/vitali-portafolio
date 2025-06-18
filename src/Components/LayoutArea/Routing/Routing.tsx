import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { About } from "../../AboutArea/About/About";
import type { JSX } from "react";
import { Home } from "../../HomeArea/Home/Home";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";
import { Thanks } from "../../HomeArea/Thanks/Thanks";
import { Portafolio } from "../../HomeArea/Portafolio/Portafolio";
import { Pricing } from "../../HomeArea/Pricing/Pricing";

export function Routing(): JSX.Element {
    return (
        <div>

            <Routes>

            {/* Home Route */}
            <Route path="/home" element={<Home />}/>
    
            {/* Default Route (redirect to "/home") */}
            <Route path="/" element={<Navigate to="/home" />}/>

            {/* About Route: */}
            <Route path="/about" element={<About />} />

            {/* ContactUs Route: */}
            <Route path="/contactus" element={<ContactUs />} />

            {/* Page not found Route: */}
            <Route path="*" element={<PageNotFound />} />

            {/* Thanks page Route: */}
            <Route path="/thanks" element={<Thanks />} />

            {/* Pricing page Route: */}
            <Route path="/price" element={<Pricing />} />

            {/* Thanks page Route: */}
            <Route path="/portafolio" element={<Portafolio />} />
			
            </Routes>
        </div>
    );
}
