import { recalculation } from './recalculation'

export const getCartFromLS = () => {
	const data = localStorage.getItem('items')
	const json = data ? JSON.parse(data) : []
	const totalPrice = recalculation(json)

	return {
		json,
		totalPrice
	}
}
