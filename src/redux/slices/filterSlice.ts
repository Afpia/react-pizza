import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type sortType = {
	name: string
	sort: 'rating' | 'title' | 'price'
}

interface stateFilter {
	searchValue: string
	categoryId: number
	sortType: sortType
}

const initialState: stateFilter = {
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
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSort(state, action: PayloadAction<sortType>) {
			state.sortType = action.payload
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		}
	}
})

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
