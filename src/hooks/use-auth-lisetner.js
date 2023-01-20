import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener(){

const    [user,SetUser]=useState(JSON.parse(localStorage.getItem('authUser')));
const {firebase}= useContext(FirebaseContext);


useEffect (()=>{
    const  listener = firebase.auth().onAuthStateChanged((authUser) =>{
          if(authUser){
          localStorage.setItem('authUser',JSON.stringify(authUser));
          SetUser(authUser);
          }
          else{
            localStorage.removeItem('authUser');
            SetUser(null);
          }
    })
return ()=> listener();
},[firebase]);
    return{user};
}
