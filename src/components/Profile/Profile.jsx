import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts Posts={ props.ProfilePage.Posts }
                     newPostText = {props.ProfilePage.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}

export default Profile;