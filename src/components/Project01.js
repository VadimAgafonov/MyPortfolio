import React from 'react'
import Img3 from '../assets/portfolio-img3.png'

const Projects = () => {
	return (
		<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-[250px] mb-10'>
			{/* Overlay */}
			<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
			{/* img */}
			<img
				className='group-hover:scale-125 transition-all duration-500'
				src={Img3}
				alt='1'
			/>
			{/* pretitile */}
			<div className='absolute -bottom-full left-2 group-hover:bottom-1 transition-all duration-500 z-50'>
				<span className='text-gradient'>Website</span>
			</div>
			{/* title */}
			<div className='absolute -bottom-full left-2 group-hover:bottom-6 transition-all duration-700 z-50'>
				<span className='text-sm text-white'>'Active Box'</span>
			</div>
			{/* Link work */}
			<div className='absolute -top-full right-1 group-hover:top-1 transition-all duration-700 z-50'>
				<button className='btn h-[20px] w-[50px] text-xs'>
					<a href='https://active-box-eight.vercel.app/' target='_blank'>
						View
					</a>
				</button>
			</div>
		</div>
	)
}

export default Projects
