import {rerenderEntireTree} from "../render";

let state = {

    ProfilePage: {

        Posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post', likesCount: '23'}
        ],
        newPostText: 'Input you text'

    },

    DialogsPage: {

        imageProfile: [

            {
                id: 1,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {
                id: 2,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {
                id: 3,
                img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
            },
            {id: 4, img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'}
        ],

        dialogs: [
            {id: 1, name: 'Vasya'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Pavlo'},
            {id: 4, name: 'Vova'}
        ],

        Massages: [
            {id: 1, massage: 'Hi'},
            {id: 2, massage: 'How are you?'},
            {id: 3, massage: 'Good'},
            {id: 4, massage: 'Good luck'}
        ]
    }
}


window.state = state;


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.ProfilePage.newPostText,
        likesCount: 0
    };

    state.ProfilePage.Posts.push(newPost);
    state.ProfilePage.newPostText = ('');
    rerenderEntireTree(state);

}

export let updateNewPostText = (newText) => {

    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);

}


export default state;