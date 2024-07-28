import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { fetchPizzas } from '../redux/slices/pizzasSlice'
import { useAppDispatch } from '../redux/store'

export const Home: FC = () => {
	const { categoryId, sortType, searchValue } = useSelector((state: any) => state.filter)

	const dispatch = useAppDispatch()
	const { items, loading } = useSelector((state: any) => state.pizzas)

	const getPizzas = async () => {
		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const search = searchValue ? `search=${searchValue}` : ''

		dispatch(fetchPizzas({ category, search, sortType }))

		window.scrollTo(0, 0)
	}

	React.useEffect(() => {
		getPizzas()
	}, [categoryId, sortType, searchValue])

	const pizzasList = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)
	const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />)

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{loading === 'error' ? (
				<div className='container container-error'>
					<h2>Произошла ошибка 😕</h2>
					<p>К сожалению, не удалось получить пиццы</p>
				</div>
			) : (
				<div className='content__items'>{loading === 'loading' ? skeletons : pizzasList}</div>
			)}
		</>
	)
}
