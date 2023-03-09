import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';
export default function Login(){
    
    const navigate  = useNavigate();
const {firebase}= useContext(FirebaseContext);
const [emailAddress,setEmailAddress]= useState('');
const [password,setPassword]=useState('');

const [error,setError]=useState('');

const isInvalid = password ==='' || emailAddress ==='';
const handleLogin = async (event) => {
 event.preventDefault();

 try {
    await firebase.auth().signInWithEmailAndPassword(emailAddress,password);
    navigate(ROUTES.DASHBOARD);
} catch (error) {
    setEmailAddress('');
    setPassword('');
    setError(error.message);
 }
};
useEffect(()=> {
    document.title= 'Login-Instagram';
},[]);

    return(
     
     <div className="container flex flex-col lg:flex-row mx-auto max-w-screen-md items-center h-screen px-4 lg:px-0">
        <div className="  lg:flex hidden w-5/5 lg:w-3/5">
            <img src="/images/iphone-with-profile.jpg" alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-2/5 justify-center h-full max-w-md m-auto ">
           <div className="flex flex-col items-center bg-white p-4 border rounded border-gray-primary">
           <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 mb-4"/>
           </h1>
           {error && <p data-testid="error" className=" mb-4 text-xs text-red-primary">{error}</p>}
       
    <form onSubmit={handleLogin} method="POST" data-testid="login">
        <input
        aria-label="Enter your email address"
        type="text"
        placeholder="Email address"
        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
        onChange={({target})=> setEmailAddress(target.value)}
        />
         <input
        aria-label="Enter your password"
        type="password"
        placeholder="Password"
        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
         onChange={({target})=> setPassword(target.value)}
        />
      <button
      disabled={isInvalid}
      type="submit"
      className={`bg-blue-medium text-white w-full rounded h-8 font-bold
      ${isInvalid && "opacity-50"}`
      }>Login</button>
    </form>     
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 my-4 border border-gray-primary">
            <p className="text-sm">
                Don't have an account?{``}
                <Link to={ROUTES.SIGN_UP} className="font-bold mx-1 text-blue-medium"
                data-testid="sign-up">
                    Sign up
                </Link>
            </p>
        </div>
        </div>
     </div>
    );
}


//TODO: tailwind config
// bg-blue-medium -> hexvalues
// text-red-primary -> hex values
// text-gray-base -> hex values
// border-gray-primary -> hex values