import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	items: [],
	loading: 'loading'
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async ({ category, search, sortType }) => {
	const { data } = await axios.get(`https://66570e7c9f970b3b36c7c5bf.mockapi.io/items?${category}&sortBy=${sortType.sort}&order=desc&${search}`)
	return data
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
