import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type item = {
	id: string
	title: string
	price: number
	imageUrl: string
	size: number
	type: string
	count: number
}

interface stateCart {
	totalPrice: number
	items: item[]
}

const initialState: stateCart = {
	totalPrice: 0,
	items: []
}

const recalculation = (state: stateCart) => {
	state.totalPrice = state.items.reduce((sum, obj) => {
		return (sum += obj.price * obj.count)
	}, 0)
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItems(state, action: PayloadAction<item>) {
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
		removeItems(state, action: PayloadAction<string>) {
			state.items = state.items.filter(obj => obj.id !== action.payload)

			recalculation(state)
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},

		minusItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)

			if (findItem) {
				findItem.count--
			}

			recalculation(state)
		}
	}
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const { addItems, removeItems, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
