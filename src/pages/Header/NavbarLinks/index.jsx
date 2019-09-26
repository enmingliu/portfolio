import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<a href="http://localhost:8000/Bill_Liu_Resume_Fall_2019.pdf">Resume</a>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<a href="https://github.com/eprotagoras">Github</a>
	</Wrapper>
)

export default NavbarLinks
