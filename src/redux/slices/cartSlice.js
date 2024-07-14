import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: []
}

const recalculation = state => {
	state.totalPrice = state.items.reduce((sum, obj) => {
		return (sum += obj.price * obj.count)
	}, 0)
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItems(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}

			recalculation(state)
		},
		removeItems(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)

			recalculation(state)
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},

		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)

			findItem.count--

			recalculation(state)
		}
	}
})

export const selectCart = state => state.cart
export const selectCartItemById = id => state => state.cart.items.find(obj => obj.id === id)

export const { addItems, removeItems, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
