import { item } from '../redux/slices/cartSlice'

export const recalculation = (state: item[]) => {
	return state.reduce((sum, obj) => {
		return (sum += obj.price * obj.count)
	}, 0)
}