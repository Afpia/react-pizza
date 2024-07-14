import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0,
	sortType: {
		name: 'популярности',
		sort: 'rating'
	}
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSort(state, action) {
			state.sortType = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		}
	}
})

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
