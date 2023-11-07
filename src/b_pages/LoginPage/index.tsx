import {lazy} from 'react'


export {LoginPage} from './ui/LoginPage.tsx'
export const LazyLoginPage = lazy(() => import('./ui/LoginPage.tsx').then(module => ({default: module.LoginPage})))