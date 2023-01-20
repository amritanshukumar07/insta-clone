import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { lazy,Suspense } from "react";
import * as ROUTES from './constants/routes';
import useAuthListener from "./hooks/use-auth-lisetner";
import UserContext from "./context/user";


const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(()=>import('./pages/sign-up'));
const Dashboard = lazy(()=>import('./pages/dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));


export default function App() {
const {user} = useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element= {<Login/>}/>
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}


