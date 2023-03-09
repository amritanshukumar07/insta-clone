import { useEffect } from "react";
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import LoggedInUserContext from "../context/logged-in-user";
import useUser from "../hooks/use-user";
import PropTypes from 'prop-types'


export default function Dashboard({user :loggedInUser}){
const {user} =useUser(loggedInUser.uid);
    useEffect(()=>{
         document.title = "Instagram";
    },[]);

    return(
        <LoggedInUserContext.Provider value={{user}}>
        <div className="bg-gray-background">
            <Header/>
            <div className="grid grid-cols-3 gap-4 mx-auto justify-between max-w-screen-lg px-4 lg:px-0 ">
                <Timeline/>
                <Sidebar/>
            </div>
        </div>
        </LoggedInUserContext.Provider>
    );
}

Dashboard.propTypes={
    user: PropTypes.object.isRequired
}