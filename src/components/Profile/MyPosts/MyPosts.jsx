import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'}
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount}/>
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;