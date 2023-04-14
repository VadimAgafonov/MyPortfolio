import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.svg'

const Header = () => {
	return (
		<header className='py-8'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<a href='#'>
						<img src={Logo} alt='Logo' />
					</a>
					{/* Button */}

					<Link to='contact' smooth={true} spy={true}>
						<button className='btn btn-sm'>Work with me</button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
