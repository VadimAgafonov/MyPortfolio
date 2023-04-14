import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { TbBrandTelegram } from 'react-icons/tb'
import Image from '../assets/avatar.svg'

import { Link } from 'react-scroll'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '../variants'

const Banner = () => {
	return (
		<section
			className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
			id='home'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
					{/* text */}
					<div className='flex-1 text-center font-secondary lg:text-left'>
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
						>
							VADIM <span>AGAFONOV</span>
						</motion.h1>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
						>
							<span className='text-white mr-4'>I am a</span>
							<TypeAnimation
								sequence={['Developer', 2000, 'Designer', 2000]}
								speed={50}
								className='text-accent'
								wrapper='span'
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn('up', 0.5)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-8 max-w-lg mx-auto lg:mx-0 leading-6 font-fourth font-regular'
						>
							Привет! Я - разработчик и дизайнер. Мои работы включают в себя
							разработку сайтов, дизайн логотипов, создание макетов и многое
							другое. Я стараюсь создавать не только красивые, но и
							функциональные проекты, которые будут помогать моим клиентам
							достигать своих целей. В моем портфолио вы можете ознакомиться с
							моими лучшими работами и узнать больше о моих навыках и опыте.
						</motion.p>
						<motion.div
							variants={fadeIn('up', 0.6)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
						>
							<Link to='contact' smooth={true} spy={true}>
								<button className='btn btn-lg'>Contact me</button>
							</Link>
							<Link to='work' smooth={true} spy={true}>
								<a href='#' className='text-gradient btn-link'>
									My portfolio
								</a>
							</Link>
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
						>
							<a href='https://t.me/vadimagafonoov' target='_blank'>
								<TbBrandTelegram />
							</a>
							<a href='https://vk.com/vadimagafonoov' target='_blank'>
								<SlSocialVkontakte />
							</a>
							<a href='https://github.com/VadimAgafonov' target='_blank'>
								<FaGithub />
							</a>
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial='hidden'
						whileInView={'show'}
						className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
					>
						<img src={Image} alt='Image' />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner
