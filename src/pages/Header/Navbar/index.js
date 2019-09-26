import React from 'react'
import { Link } from 'gatsby'
import NavbarLinks from '../NavbarLinks/index'
import bstyled from 'styled-components';

const Wrapper = bstyled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: #212121;
	}
`

const Container = bstyled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 3rem 0;
	width: 90%;
	.title {
		font-weight: bold;
	}
	@media (min-width: 601px) {
		width: 90%;
	}
	@media (min-width: 993px) {
		width: 80%;
	}
	a {
		text-decoration: none;
	}  
`

const Navbar = () => (
	<Wrapper as={Container}>
		<Link className="title" to="/">Bill Liu</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
