import { Reducer } from "redux";
import { IGlobalState } from './type';

const INITIAL_STATE: IGlobalState = {
    users: []
}

const AllUsers: Reducer<IGlobalState | any> = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {

        case 'ADD_USER': {
            // console.log(actions)
            const { user } = actions.payload
            return {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            }
        }

        default:{
            return state
        }

    }
}

export default AllUsers