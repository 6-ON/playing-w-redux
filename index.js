import { createStore } from 'redux'

const valueEl = document.getElementById('value')

function counter(state = 0, action) {

	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'RESET':
			return action.payload.resetValue
		default:
			return state
	}

}
/**
 * @type import('redux').Store
 */
const store = createStore(counter)

function updateHTML() {
	valueEl.innerHTML = store.getState().toString()
}
updateHTML()
store.subscribe(updateHTML)
document.getElementById('increment').addEventListener('click', function () {
	store.dispatch({ type: 'INCREMENT' })
})

document.getElementById('decrement').addEventListener('click', function () {
	store.dispatch({ type: 'DECREMENT' })
})

document.getElementById('reset').addEventListener('click', function () {
	store.dispatch({ type: 'RESET' , payload: { resetValue: 0 }})
})
