// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Components/LayoutArea/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    {/* Send the store object to any useSelector hook */}
    {/* <Provider store={store}> */}

        {/* <ThemeProvider theme={theme}> */}
            <Layout />
        {/* </ThemeProvider> */}
        
    {/* </Provider> */}
    </BrowserRouter>
)
