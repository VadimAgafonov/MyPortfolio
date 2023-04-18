import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import { fadeIn } from '../variants'
import Project01 from './Project01'
import Project02 from './Project02'
import Project03 from './Project03'
import Project04 from './Project04'

const Work = () => {
	const [open, setOpen] = useState(false)

	return (
		<section className='section mt-8 relative' id='work'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row gap-x-10'>
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
					>
						{/* text */}
						<div className='mb-2'>
							<h2 className='h2 leading-tight text-accent'>
								My Latest <br />
								Work
							</h2>
							<p className='max-w-sm mb-16 leading-6'>
								Ниже представлены некоторые из моих последних работ. Я стремлюсь
								создавать качественные и функциональные продукты, которые
								удовлетворят потребности моих клиентов.
							</p>
							<button onClick={() => setOpen(true)} className='btn btn-sm'>
								View all projects
							</button>
						</div>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img
								className='group-hover:scale-125 transition-all duration-500'
								src={Img1}
								alt='1'
							/>
							{/* pretitile */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>Website</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>'MoGo'</span>
							</div>
							{/* Link work */}
							<div className='absolute -top-full right-4 group-hover:top-4 transition-all duration-700 z-50'>
								<button className='btn h-[25px] w-[100px] text-xs'>
									<a href='https://mo-go-gilt.vercel.app/' target='_blank'>
										View a work
									</a>
								</button>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-[73px]'
					>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img
								className='group-hover:scale-125 transition-all duration-500'
								src={Img2}
								alt='1'
							/>
							{/* pretitile */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>Website</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>'Beauty Silon'</span>
							</div>
							{/* Link work */}
							<div className='absolute -top-full right-4 group-hover:top-4 transition-all duration-700 z-50'>
								<button className='btn h-[25px] w-[100px] text-xs'>
									<a href='https://silon-six.vercel.app/' target='_blank'>
										View a work
									</a>
								</button>
							</div>
						</div>

						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img
								className='group-hover:scale-125 transition-all duration-500'
								src={Img3}
								alt='1'
							/>
							{/* pretitile */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>Website</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>'Active Box'</span>
							</div>
							{/* Link work */}
							<div className='absolute -top-full right-4 group-hover:top-4 transition-all duration-700 z-50'>
								<button className='btn h-[25px] w-[100px] text-xs'>
									<a
										href='https://active-box-eight.vercel.app/'
										target='_blank'
									>
										View a work
									</a>
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			
				<div className={`overlay animated ${open ? 'show' : ''} h-screen`}>
					<div className='d-flex modal bg-no-repeat bg-cover xs:overflow-y-scroll sm:flex-col pt-1'>
						<div className='text-center mt-8 relative'>
							<h2 className='h2 text-gradient'>portfolio</h2>
							<button
								onClick={() => setOpen(false)}
								className='absolute top-0 right-10
					text-3xl cursor-pointer hover:rotate-180 transition-all duration-700'
							>
								<AiOutlineClose />
							</button>
						</div>
						<hr />
						<div className='d-flex text-center mt-4 text-gradient'>
							<a className='text-link mr-5' href='#'>
								All
							</a>
							<a className='text-link mr-5' href='#'>
								Website
							</a>
							<a className='text-link mr-5' href='#'>
								UI/UX
							</a>
							<a className='text-link' href='#'>
								App
							</a>
						</div>

						<div className='flex p-20 justify-between flex-wrap'>
							<Project01 />
							<Project02 />
							<Project03 />
							<Project04 />
						</div>
					</div>
				</div>
			
		</section>
	)
}

export default Work
