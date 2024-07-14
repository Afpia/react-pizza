import './scss/app.scss'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'
import { PizzaItem } from './pages/PizzaItem'
import { LayoutMain } from './layout/LayoutMain'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutMain />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/pizza/:id' element={<PizzaItem />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
