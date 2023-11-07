import {lazy} from "react";

export {RegistrationPage} from './ui/RegistrationPage.tsx'
export const LazyRegistrationPage = lazy(() => import('./ui/RegistrationPage.tsx').then(module => ({default: module.RegistrationPage})))
