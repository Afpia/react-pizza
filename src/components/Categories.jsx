import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

export const Categories = () => {
	const value = useSelector(state => state.filter.categoryId)
	const dispatch = useDispatch()

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	return (
		<div className='categories'>
			<ul>
				{categories.map((name, index) => (
					<li key={index} onClick={() => dispatch(setCategoryId(index))} className={value === index ? 'active' : ''}>
						{name}
					</li>
				))}
			</ul>
		</div>
	)
}
