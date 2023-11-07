import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App.tsx";
import {LazyRegistrationPage} from "../b_pages/RegistrationPage";
import {LazyLoginPage} from "../b_pages/LoginPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={"/"}
                   element={<App/>}>
                <Route path={"/registration"}
                       element={<LazyRegistrationPage/>}/>
                <Route path={"/login"}
                       element={<LazyLoginPage/>}/>
            </Route>
        </Route>,
    )
)