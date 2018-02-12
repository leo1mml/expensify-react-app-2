import {createStore} from 'redux'

const incrementCount = ({incrementBy = 500} = {}) => ({
        type: 'INCREMENT',
        incrementBy
})
const decrementCount = ({decrementBy = 500} = {}) => ({
        type: 'DECREMENT',
        decrementBy
})
const setCount = ({count = 100000} = {}) => ({
        type: 'SET',
        count
})
const resetCount = () => ({
        type: 'RESET',
        count: 0
})

//Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state

    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(incrementCount({incrementBy: 10}))
console.log('asdf');
store.dispatch(incrementCount())
console.log('asdf');
store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy: 1}))
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch(setCount({count: 101}))


