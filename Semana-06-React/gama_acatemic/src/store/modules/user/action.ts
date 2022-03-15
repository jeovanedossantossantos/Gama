import {IUser } from './type';

export default function addNewUser(user: IUser){

    return{
        type: 'ADD_USER',
        payload: user 
    }
}