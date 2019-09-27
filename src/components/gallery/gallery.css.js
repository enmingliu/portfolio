import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  padding-top: 20rem;
	@media (max-width: 960px) {
    padding-top: 0;
	}
  
  margin: 0 auto;
  max-width: 70%;

  ${MEDIA.TABLET`
    display: block;
  `};

  @media (max-width: 1280px) {
    display: block;
  }
`;
