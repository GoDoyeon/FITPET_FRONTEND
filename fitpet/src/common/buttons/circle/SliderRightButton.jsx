import React from 'react';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

const SliderRightButton = (props) => {
  const { handleClick } = props;

  return (
    <CircleBtn onClick={handleClick}>
      <BsChevronRight size='2rem' color='#707070' />
    </CircleBtn>
  );
};

export default SliderRightButton;

const CircleBtn = styled.button`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: none;
  border-radius: 50px;
`;
