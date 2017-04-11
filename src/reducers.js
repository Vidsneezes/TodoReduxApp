import { VisibilityFilters } from './actions'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state = initialState, action){
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}