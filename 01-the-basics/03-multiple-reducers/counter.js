/**
 * this is the reducer function for the counter component
 */
function counterReducer(state, action) {

    if(typeof state === 'undefined') {
        return { count: 0 }
    }

    var nextState = {
        count: state.count
    }
    switch(action.type) {
        case 'ADD':
            nextState.count = state.count + 1
            return nextState
            break
        case 'MINUS':
            nextState.count = state.count - 1
            return nextState
            break
        case 'RESET':
            nextState.count = 0
            return nextState
            break
        default:
            return nextState
            break
    }
}

/**
 * this is the reducer function for the to do list component
 */
function toDoReducer(state, action) {
    if(typeof state === 'undefined') {
        return {toDoItems: []}
    }

    var nextState = Object.assign({}, state)
    switch(action.type){
        case 'ADD_TASK':
            nextState.toDoItems.push(action.item)
            return nextState
            break
        case 'REMOVE_TASK':
            nextState.toDoItems.pop()
            return nextState
            break
        case 'CLEAR_TASKS':
            nextState.toDoItems = []
            return nextState
            break
        default:
            return nextState
            break
    }
}

/**
 * render method called for everytime a change is called on the redux objects
 */
function render() {
    var state = store.getState()
    counter.innerHTML = state.counter.count.toString()
    renderList(state)
}


/**
 * add elements for every time there are changes in the to do items
 * @param state
 */
function renderList(state) {
    toDoList.innerHTML = ''
    for(var i = 0; i < state.toDo.toDoItems.length; i ++ ) {
        var li = document.createElement('li'),
            todos = state.toDo.toDoItems[i]
        li.innerHTML = todos.toString()
        toDoList.appendChild(li)
    }
}


/**
 * this is how multiple reducers are defined
 */
var store = Redux.createStore(Redux.combineReducers({counter: counterReducer, toDo: toDoReducer})),
    counter = document.getElementById('counter'),
    toDoList = document.getElementById('toDoList'),
    toDoInput = document.getElementById('toDoInput'),
    counterButtons = [
        {name: 'add', action:'ADD'},
        {name: 'minus', action:'MINUS'},
        {name: 'reset', action:'RESET'},
        {name: 'removeTask', action:'REMOVE_TASK'},
        {name: 'clearTasks', action:'CLEAR_TASKS'},
    ]


store.subscribe(render) //call render() for every object change


// STORE


/**
 * bind actions for most button
 */
counterButtons.forEach(function(button) {
    document.getElementById(button.name).addEventListener('click', function() {
        store.dispatch({type: button.action})
    })

})


/**
 * bind actions for ADD TASK button
 */
document.getElementById('addTask').addEventListener('click', function() {
    store.dispatch({type: 'ADD_TASK', item: toDoInput.value})
})

render()