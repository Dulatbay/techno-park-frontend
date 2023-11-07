import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import App from "./App.tsx";
import {LazyRegistrationPage} from "@/b_pages/RegistrationPage";
import {LazyLoginPage} from "@/b_pages/LoginPage";
import React from "react";
import {MainContentPage} from "../b_pages/MainContentPage/ui/MainContentPage.tsx";

const getAuth = () => false;

const Protected = ({children}: { children: React.ReactNode }) => {
    const isAuthenticated = getAuth();
    return isAuthenticated ? children : <Navigate to={'/login'}/>;
}

const NotAuthProtected = ({children}: { children: React.ReactNode }) => {
    const isAuthenticated = getAuth();
    return !isAuthenticated ? children : <Navigate to={'/'}/>;
}


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={"/"}
                   element={<App/>}>
                <Route path={"/registration"}
                       element={
                           <NotAuthProtected>
                               <LazyRegistrationPage/>
                           </NotAuthProtected>
                       }/>
                <Route path={"/login"}
                       element={
                           <NotAuthProtected>
                               <LazyLoginPage/>
                           </NotAuthProtected>
                       }/>
                <Route index element={
                    <Protected>
                        <MainContentPage/>
                    </Protected>
                }/>
            </Route>
        </Route>,
    )
)