import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: FC = () => (
	<ContentLoader speed={2} width={280} height={465} viewBox='0 0 280 465' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
		<circle cx='140' cy='120' r='116' />
		<rect x='15' y='250' rx='10' ry='10' width='250' height='27' />
		<rect x='15' y='300' rx='10' ry='10' width='250' height='72' />
		<rect x='15' y='405' rx='10' ry='10' width='85' height='30' />
		<rect x='135' y='390' rx='20' ry='20' width='130' height='45' />
	</ContentLoader>
)
