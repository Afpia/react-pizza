import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'
import { RootState, useAppDispatch } from '../redux/store'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: FC = React.memo(() => {
	const value = useSelector((state: RootState) => state.filter.categoryId)
	const dispatch = useAppDispatch()

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
})
