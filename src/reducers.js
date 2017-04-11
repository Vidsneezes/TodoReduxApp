import { VisibilityFilters } from './actions'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action){
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:   
            return [
                ...state.todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({},todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function todoApp(state = initialState, action){
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter: action.filter
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
               todos: todos(state.todos, action)
            })
        default:
            return state
    }
}