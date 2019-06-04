let store = {
    _state: {

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
                {
                    id: 4,
                    img: 'https://zabavnik.club/wp-content/uploads/2018/05/Kartinki_na_avu_dlya_pacanov_2_14075531.jpg'
                }
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
    },
    _callSubscriber() {
        console.log('input you text');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0
        };

        this._state.ProfilePage.Posts.push(newPost);
        this._state.ProfilePage.newPostText = ('');
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {

        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0
            };

            this._state.ProfilePage.Posts.push(newPost);
            this._state.ProfilePage.newPostText = ('');
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;