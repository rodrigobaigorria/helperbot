import axios from 'axios';
import { types } from '../types/types';

const url = 'http://localhost:4000/api/message';

export const startBotMessage = (msg) => {

    console.log(msg)
    return (dispatch) => {
        axios.post(url, {
            message: msg
        })
            .then((response) => {
                dispatch(getMessage(response.data.response));
            });
    }
}

export const getMessage = (msg) => ({
    type: types.getBot,
    payload: { msg }

});

export const sendMessage = (message) => ({
    type: types.botIn,
    payload: { message }

});