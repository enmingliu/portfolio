import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

const Wrapper = styled.div`
	a {
		color: #6d6d6d;
		text-decoration: none;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<a href="../f20_resume_bill_liu.pdf">Resume</a>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<a href="https://github.com/SWEnmi">Github</a>
	</Wrapper>
)

export default NavbarLinks
