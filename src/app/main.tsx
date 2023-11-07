import React from 'react'
import ReactDOM from 'react-dom/client'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
