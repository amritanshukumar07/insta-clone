import { useEffect, useState,useContext } from "react";
import PropTypes from 'prop-types'
import Skeleton from "react-loading-skeleton";
import useUser from '../../hooks/use-user'
import {isUserFolllowingProfile, toggleFollow} from '../../services/firebase'
import UserContext from "../../context/user";


export default function Header({
    photosCount,
    followerCount,
    setFollowerCount,
    profile:{
    docId:profileDocId,userId:profileUserId,fullName,
    following ,
    followers ,
    username: profileUsername}
}){

  const { user: loggedInUser} =useContext(UserContext);
    const {user} = useUser(loggedInUser?.uid);
    const [isFollowingProfile,setIsFollowingProfile] = useState(false);
    const activeBtnFollow =  user?.username && user?.username !== profileUsername;
    const handleToggleFollow = async ()=>{
        setIsFollowingProfile((isFollowingProfile)=> !isFollowingProfile);
        setFollowerCount({
            followerCount: isFollowingProfile? followerCount-1 : followerCount+1
        });
       await toggleFollow(isFollowingProfile,user.docId,profileDocId,profileUserId,user.userId);
    };

    useEffect (()=>{
    const isLoggedInUserFolllowingProfile = async() => {
        const isFollowing = await isUserFolllowingProfile(user.username,profileUserId);
        setIsFollowingProfile(!!isFollowing);
    };

    if(user?.username && profileUserId){
        isLoggedInUserFolllowingProfile();
    }
    },[user?.username, profileUserId]);

    return <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
     <div className="container flex justify-center items-center">
       {profileUsername ? (
              <img 
              src={`/images/avatars/${profileUsername}.jpg`} 
              alt={`${profileUsername} profile picture`} 
              className="rounded-full h-16 w-16 md:h-20 lg:h-40 md:w-20 lg:w-40 flex" />
        ):(
         <img 
        src="/images/avatars/amritanshu.jpg"
        alt={"Amritnashu's profile picture"} 
        className="rounded-full h-16 w-16 md:h-20 lg:h-40 md:w-20 lg:w-40 flex" />
        ) }
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
          <div className="container flex items-center">
          <p className="text-2xl mr-4">
            {profileUsername}
          </p>
          {activeBtnFollow && (
            <button
            className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
            type="button"
            onClick={handleToggleFollow}
            onKeyDown={(event)=>{
                if(event.key==='Enter'){
                   handleToggleFollow() ;
                }
            }}
            >
              {isFollowingProfile ? 'Unfollow' :'follow'}
            </button>
          )}
          </div>
          <div className="container flex mt-4 flex-col lg:flex-row">
          {!followers || !following ?(
            <Skeleton count={1} width={677} height={24}/>
          ):(
            <>
            <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
            </p>
            <p className="mr-10">
                <span className="font-bold">{followerCount}</span>{` `}{followerCount===1? `follower`:`followers`}
            </p>
            <p className="mr-10">
                <span className="font-bold">{following.length}
                </span>
                 {` `}following
            </p>
            </>
          )}
         
          </div>
          <div className="container mt-4">
            <p className="font-medium">{!fullName ? <Skeleton count={1} height={24}/>:fullName
           }</p>
          </div>
      </div>
    </div>;
}

Header.propTypes = {
    photosCount: PropTypes.number.isRequired,
    followerCount:PropTypes.number.isRequired,setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        username: PropTypes.string,
        following: PropTypes.array,
        followers: PropTypes.array
    }).isRequired
}
