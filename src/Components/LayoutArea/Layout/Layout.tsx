import type { JSX } from "react";
import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header />
            <aside>
                < Menu />
            </aside> 
            </header>


            <main>
                <Routing />
            </main>
            
            <footer>
                <Copyrights />
            </footer>


        </div>
    );
}
