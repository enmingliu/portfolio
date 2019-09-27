import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Card, Thumb, Line, DateText } from './item.css';

const Item = ({ title, copy, image, link, date }) => (
  <Card>
    <Thumb href={link}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </Thumb>
    <Line />
    <Thumb href={link}>
      <DateText>{date}</DateText>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </Thumb>

  </Card>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
  date: PropTypes.string,
};

export default Item;
