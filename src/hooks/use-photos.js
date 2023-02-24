import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "../context/user";
import {getPhotos,getUserByUserId} from '../services/firebase';
export default function usePhotos(){
const [photos,setPhotos]=useState(null);
// const {
//     user:{uid: userId=''}
// }= useContext(UserContext);
const {user}=useContext(UserContext);

useEffect(()=>{
    async function getTimelinePhotos(){
        const [{following}]= await getUserByUserId(user.uid);

        let followedUserPhotos =[];
if(following.length>0){
    followedUserPhotos = await getPhotos(user.uid,following);
    
}

   followedUserPhotos.sort((a,b)=> b.dateCreated-a.dateCreated);
   setPhotos(followedUserPhotos);

    }
    getTimelinePhotos();
},[user.uid]);



    return {photos};
}