import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import marked from 'marked';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import bstyled from 'styled-components';
import Cr from '../images/cr.svg';
import social from './social.json';
import SimpleHeader from './Header/index';

const Wrapper = bstyled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: 40%;
	background-position: right top;
  background-repeat: no-repeat;
  @media (max-width: 960px) {
    background-image: none;
  }
`

const FooterWrapper = bstyled.div`
	padding: 28rem 0 4rem 0;
	background-image: url('../illustrations/footer.svg');
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	@media (max-width: 1960px) {
		padding: 14rem 0 4rem;
	}
`

const Flex = bstyled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`

const Links = bstyled.div`
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

const FooterDetails = bstyled.div`
	line-height: 150%
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
	h2 {
		font-weight: bold;
	}
`

const IntroWrapper = bstyled.div`
  padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`

const Details = bstyled.div`
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

const Thumbnail = bstyled.div`
	flex: 1;
	@media (max-width: 960px) {
    visibility: hidden;
    max-height: 0%;
    display: none;
	}
	img {
		width: 100%;
	}
	svg {
		width: 100%;
		max-height: 400px;
	}
`

const Container = bstyled.div`
	max-width: 1280px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 601px) {
		width: 90%;
	}
	@media (min-width: 993px) {
		width: 80%;
  }
`

// margin-bottom: 6em;  
const Hero = styled("div")`
    padding-top: 4em;
    padding-bottom: 0em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
      padding-top: 1.5em;
      margin-bottom: 3em;
    }
    max-width: 830px;
    
    p {
        margin-bottom: 1em;
        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;
            &:nth-of-type(3) { color: ${colors.blue500}; }
            &:nth-of-type(5) { color: ${colors.orange500}; }
            &:nth-of-type(1) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(6) { color: ${colors.teal500}; }
            &:nth-of-type(2) { color: ${colors.grey500}; }
            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;
                &:nth-of-type(3) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(5) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(1) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(6) { color: ${colors.teal600};    background-color: ${colors.teal200};}
                &:nth-of-type(2) { color: ${colors.grey600};    background-color: ${colors.grey200};}
            }
        }
    }
`

const Footer = () => (
	<FooterWrapper>
		<Flex as={Container}>
			<FooterDetails>
				<h2>Bill Liu</h2>
				<span>© All rights are reserved | 2020</span>
			</FooterDetails>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</FooterWrapper>
)

const Index = ({ data }) => (
  <Layout>
    <Wrapper>
      <SimpleHeader />
      <IntroWrapper as={Container}>
        <Details>
          <Title as="h2" size="large">
            <Hero dangerouslySetInnerHTML={{__html:marked(data.homeJson.content.childMarkdownRemark.rawMarkdownBody)}} />
          </Title>
        </Details>
        <Thumbnail>
          <Cr />
        </Thumbnail>
      </IntroWrapper>

      <Gallery items={data.homeJson.gallery} />

    </Wrapper>
    <Footer />
  </Layout>
);

//<Header />

    // <Wrapper>
      
    // </Wrapper>
    
  // <Box>
  //   <Title as="h2" size="large">
  //     <Hero dangerouslySetInnerHTML={{__html:marked(data.homeJson.content.childMarkdownRemark.rawMarkdownBody)}} />
  //   </Title>
  // </Box>
      // <Modal>
      //   <video
      //     src="https://i.imgur.com/gzFqNSW.mp4"
      //     playsInline
      //     loop
      //     autoPlay
      //     muted
      //   />
      // </Modal>



      
      // <IOExample />

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        link
        title
        copy
        date
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
