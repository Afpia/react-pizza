import React from 'react'

import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'

export const Home = () => {
	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		fetch('https://66570e7c9f970b3b36c7c5bf.mockapi.io/items')
			.then(res => res.json())
			.then(json => {
				setPizzas(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) : pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)}</div>
		</>
	)
}
