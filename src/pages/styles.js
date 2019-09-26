import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: 40%;
	background-position: right top;
	background-repeat: no-repeat;
`

export const FooterWrapper = styled.div`
	padding: 28rem 0 4rem 0;
	background-image: url('../illustrations/footer.svg');
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	@media (max-width: 1960px) {
		padding: 14rem 0 4rem;
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`

export const Links = styled.div`
	display: flex;
	align-items: center;
	a {
		margin: 0 0.5rem;
		img {
			margin: 0;
		}
		&:first-child,
		&:last-child {
			margin: 0;
		}
	}
`

export const FooterDetails = styled.div`
	line-height: 150%
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
	h2 {
		font-weight: bold;
	}
`

export const IntroWrapper = styled.div`
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}
	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;
		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}
	h4 {
		margin-bottom: 2.5rem;
		font-size: 32pt;
		font-weight: normal;
		color: #707070;
		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;
	@media (max-width: 960px) {
		width: 100%;
	}
	img {
		width: 100%;
	}
	svg {
		width: 100%;
		max-height: 600px;
	}
`