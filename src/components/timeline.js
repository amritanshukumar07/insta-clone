import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from "../hooks/use-photos";
import Post from "./post";


export default function Timeline(){
const {user} = useContext(LoggedInUserContext)
const {photos}=usePhotos(user);
    return(
        <div className="container col-span-2">
       {!photos ?(
            <Skeleton count={4} height={250} className="mb-5"/>

       ) : (
        photos.map((content)=> <Post key={content.docId} content={content} />)
       )}
        </div>
     
    );
}