import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import React from 'react'

export const LayoutMain = () => {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}
