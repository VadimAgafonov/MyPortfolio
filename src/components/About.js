import React from 'react'

import CountUp from 'react-countup'

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import { Link } from 'react-scroll'

const About = () => {
	const [ref, inView] = useInView({
		treshhold: 0.5,
	})
	return (
		<section className='section' id='about' ref={ref}>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
					{/* img */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 bg-none lg:bg-about lg:bg-contain lg:bg-no-repeat h-[640px] lg:mix-blend-lighten lg:bg-top lg:border border-pink-500 rounded-2xl'
					></motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						<h2 className='h2 text-accent'>About me</h2>
						<h3 className='h3 mb-4'>
							I'm a Freelance Front-end Developer and Web Designer
						</h3>
						<p className='mb-6 leading-6'>
						Я являюсь профессионалом в области веб-разработки и дизайна. Мне нравится создавать красивые и функциональные веб-сайты, которые удовлетворяют потребности пользователей. Благодаря моему опыту, я могу создавать уникальные и привлекательные сайты, которые будут соответствовать вашим потребностям и требованиям. Я постоянно развиваю свои навыки и знания, чтобы обеспечивать моим клиентам лучший опыт веб-разработки и дизайна.
						</p>
						{/* stats */}
						<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={2} duration={3} /> : null}
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Years of <br />
									Experience
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={57} duration={3} /> : null}
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Projects <br />
									Completed
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={71} duration={3} /> : null}
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Satisfied <br />
									Clients
								</div>
							</div>
						</div>
						<div className='flex gap-x-8 items-center'>
							<Link to='contact' smooth={true} spy={true}>
								<button className='btn btn-lg'>Contact me</button>
							</Link>
							<Link to='work' smooth={true} spy={true}>
								<a href='#' className='text-gradient btn-link'>
									My portfolio
								</a>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
