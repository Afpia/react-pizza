import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const PizzaItem = () => {
	const [data, setData] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	React.useEffect(() => {
		async function fetch() {
			try {
				const { data } = await axios.get(`https://66570e7c9f970b3b36c7c5bf.mockapi.io/items/${id}`)
				setData(data)
			} catch (error) {
				console.log(error)
				navigate('/')
			}
		}
		fetch()
	}, [])

	return (
		<div>
			<h2>{data.title}</h2>
			<p>{data.price}</p>
		</div>
	)
}
