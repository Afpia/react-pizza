import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { sortType } from './filterSlice'
// import { item } from './cartSlice'

type Pizza = {
	id: string
	title: string
	price: number
	imageUrl: string
	sizes: []
	types: []
}

export interface IFetch {
	category: string
	search: string
	sortType: sortType
}

interface pizzasState {
	items: Pizza[]
	loading: 'loading' | 'success' | 'error'
}

const initialState: pizzasState = {
	items: [],
	loading: 'loading'
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async ({ category, search, sortType }: IFetch) => {
	const { data } = await axios.get<Pizza[]>(`https://66570e7c9f970b3b36c7c5bf.mockapi.io/items?${category}&sortBy=${sortType.sort}&order=desc&${search}`)
	return data as Pizza[]
})

const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.items = action.payload
			state.loading = 'success'
		})
		builder.addCase(fetchPizzas.pending, state => {
			state.loading = 'loading'
		})
		builder.addCase(fetchPizzas.rejected, state => {
			state.items = []
			state.loading = 'error'
		})
	}
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
