import PullToRefresh from 'react-pull-to-refresh';
import type { JSX } from "react";
import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    
    const handleRefresh = async () => {
        // You can refresh different things based on current page
        console.log('Refreshing page...');
        
        // Simple page reload (easiest approach)
        window.location.reload();
        
        // OR more sophisticated: check current route and refresh accordingly
        // const currentPath = window.location.pathname;
        // if (currentPath === '/portafolio') {
        //     await refreshPortfolio();
        // } else if (currentPath === '/home') {
        //     await refreshHome();
        // }
    };

    return (
        <PullToRefresh onRefresh={handleRefresh}>
            <div className="Layout">
                <header>
                    <Header />
                    <aside>
                        <Menu />
                    </aside> 
                </header>

                <main>
                    <Routing />
                </main>
                
                <footer>
                    <Copyrights />
                </footer>
            </div>
        </PullToRefresh>
    );
}