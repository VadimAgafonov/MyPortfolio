import React from 'react'

import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { fadeIn } from '../variants'

const services = [
	{
		name: 'UI/UX Design',
		description:
			'Мои работы в области UI/UX дизайна включают в себя разработку пользовательских интерфейсов для мобильных приложений, веб-сайтов и программного обеспечения. Я уделяю особое внимание деталям и функциональности, чтобы обеспечить максимальную удобство использования и привлекательный дизайн.',
		link: 'Learn more',
	},
	{
		name: 'Development',
		description:
			'Мои работы включают в себя создание красивых и современных дизайнов, разработку уникальных функций и оптимизацию производительности сайта. Я использую последние технологии и методы разработки, чтобы создавать сайты, которые не только выглядят прекрасно, но и работают быстро и эффективно.',
		link: 'Learn more',
	},
]

const Services = () => {
	return (
		<section className='section' id='services'>
			<div className='container mx-auto h-screen'>
				<div className='flex flex-col lg:flex-row h-[800px] justify-center items-center'>
					{/* text & image*/}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 mb-12 lg:mb-0'
					>
						<h2 className='h2 text-accent mb-6'>What I Do</h2>
						<h4 className='h4 max-w-[455px] mb-16 leading-6'>
						Я занимаюсь созданием привлекательных и функциональных сайтов, а также разработкой уникальных дизайнов. <br /> Моя цель - помочь клиентам достичь своих целей в интернете и привлечь больше пользователей на их сайты.
						</h4>
						<Link to='work' smooth={true} spy={true}>
							<button className='btn btn-sm'>See my work</button>
						</Link>
					</motion.div>
					{/* services */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						{/* service list */}
						<div>
							{services.map((service, index) => {
								const { name, description, link } = service
								return (
									<div
										className='border-b border-white/20 h-[146px] mb-[38px] flex'
										key={index}
									>
										<div className='max-w-[476px]'>
											<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
												{name}
											</h4>
											<p className='font-secondary leading-tight text-sm'>
												{description}
											</p>
										</div>
										<div className='flex flex-col flex-1 items-end'>
											<a
												href='#'
												className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
											>
												<BsArrowUpRight />
											</a>
											<a href='#' className='text-gradient text-sm'>
												{link}
											</a>
										</div>
									</div>
								)
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Services
