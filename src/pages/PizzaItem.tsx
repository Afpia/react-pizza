import axios from 'axios'
import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const PizzaItem: FC = () => {
	const [data, setData] = useState<{
		title: string
		price: number
	}>()
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
	}, [id, navigate])

	if (!data) {
		return 'Загрузка'
	}

	return (
		<div>
			<h2>{data.title}</h2>
			<p>{data.price}</p>
		</div>
	)
}
