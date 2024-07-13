import './scss/app.scss'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'

export const SearchContext = React.createContext()

export const App = () => {
	const [searchValue, setSearchValue] = React.useState('')
	return (
		<div className='App'>
			<div className='wrapper'>
				<SearchContext.Provider value={ { searchValue, setSearchValue } }>
					<Header />
					<div className='content'>
						<div className='container'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='cart' element={<Cart />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</div>
					</div>
				</SearchContext.Provider>
			</div>
		</div>
	)
}
