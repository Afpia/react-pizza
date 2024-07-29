import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { recalculation } from '../../utils/recalculation'

export type item = {
	id: string
	title: string
	price: number
	imageUrl: string
	size: number
	type: string
	count: number
}

export interface stateCart {
	totalPrice: number
	items: item[]
}

const local = getCartFromLS()

const initialState: stateCart = {
	totalPrice: local.totalPrice,
	items: local.json
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

			state.totalPrice = recalculation(state.items)
		},
		removeItems(state, action: PayloadAction<string>) {
			state.items = state.items.filter(obj => obj.id !== action.payload)

			state.totalPrice = recalculation(state.items)
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

			state.totalPrice = recalculation(state.items)
		}
	}
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const { addItems, removeItems, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
