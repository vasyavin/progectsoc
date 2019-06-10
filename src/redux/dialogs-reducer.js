const SEND_MASSAGE = 'SEND_MASSAGE';
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';


const dialogReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMassageBody = action.body;
            return state;
        case SEND_MASSAGE:
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.Massages.push({id: 4, massage: body});
            return state;
        default:
            return state;
    }
}

export const addSendMassegeCreator = () => {
    return {type: SEND_MASSAGE};
}

export const UpdeteNewMassegeBodyCreator = (body) => {
    return {type: UPDATE_NEW_MASSAGE_BODY, body: body}
}

export default dialogReducer;