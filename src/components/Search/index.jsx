import React, { useState } from 'react'
import style from './Search.module.scss'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'

import { setSearchValue } from '../../redux/slices/filterSlice'

export const Search = () => {
	const dispatch = useDispatch()

	const searchRef = React.useRef()
	const [value, setValue] = useState('')

	const clearInput = () => {
		setValue('')
		dispatch(setSearchValue(''))
		searchRef.current.focus()
	}
	const interData = ev => {
		setValue(ev.target.value)
		link(ev.target.value)
	}
	
	const link = React.useCallback(
		debounce(value => {
			dispatch(setSearchValue(value))
		}, 600),
		[]
	)

	return (
		<div className={style.root}>
			<svg className={style.search} height='512px' id='Layer_1' version='1.1' viewBox='0 0 512 512' width='512px'>
				<path d='M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z' />
			</svg>
			<input ref={searchRef} className={style.input} value={value} onChange={ev => interData(ev)} type='text' placeholder='Введите название пиццы' />

			{value && (
				<svg onClick={() => clearInput()} className={style.cancel} data-name='Layer 1' height='200' id='Layer_1' viewBox='0 0 200 200' width='200' xmlns='http://www.w3.org/2000/svg'>
					<title />
					<path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
				</svg>
			)}
		</div>
	)
}
