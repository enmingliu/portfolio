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
import { Wrapper, IntroWrapper, Details, Thumbnail, FooterWrapper, Flex, Links, FooterDetails } from './styles';
import bstyled from 'styled-components';
import Cr from '../images/cr.svg';
import social from './social.json';
import { Header } from './Header';

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
    padding-top: 2.5em;
    padding-bottom: 3em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
      margin-bottom: 3em;
    }
    max-width: 830px;
    
    p {
        margin-bottom: 1em;
        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;
            &:nth-of-type(1) { color: ${colors.blue500}; }
            &:nth-of-type(2) { color: ${colors.orange500}; }
            &:nth-of-type(3) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(5) { color: ${colors.teal500}; }
            &:nth-of-type(6) { color: ${colors.grey500}; }
            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;
                &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}
                &:nth-of-type(6) { color: ${colors.grey600};    background-color: ${colors.grey200};}
            }
        }
    }
`

const Footer = () => (
	<FooterWrapper>
		<Flex as={Container}>
			<FooterDetails>
				<h2>Bill Liu</h2>
				<span>© All rights are reserved | 2019</span>
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
      <Header />
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
    
    
    <div style={{ height: '20vh' }} />
    <Footer />
  </Layout>
);



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
