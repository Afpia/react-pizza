import React from 'react'
import style from './NotFound.module.scss'

export const NotFoundComponent = () => {
	return (
		<div className={style.notFound}>
			<div className={style.smile}>😕</div>
			<h1 className=''>Ничего не найдено</h1>
			<p>К сожалению данная страница отсутствует в нашем интернет магазине</p>
		</div>
	)
}
