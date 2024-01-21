import { SEARCH_BOOK, ALL_BOOKS } from "./action"

const initialState={
    search : '',
    all:'',
    loading:'',
    error:''
}

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case ALL_BOOKS :
            return{
                ...state,
                all : state.all
            }
        case SEARCH_BOOK :
            return{
                ...state,
                search : state.search
            }
        default :
            return state
    }
}
export default reducer