import React from 'react';
import styled from 'styled-components';
import { MiddleSizeButton } from '../../../common';

const HotelSearch = () => {
  return (
    <SearchContainer>
      <SearchBox placeholder='제주도' />
      <SearchBox placeholder='8월 6일 (금) - 8월 7일(토) | 1박' />
      <SearchBox placeholder='성인1 | 객실1 | 소형견1' />
      <MiddleSizeButton
        fontSize='1.6rem'
        width='7.4rem'
        text='검색'
        border='none'
        borderRadius='7px'
        pt='1.5rem'
        pb='1.4rem'
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 108rem;
  background-color: #fff;
  border-radius: 15px;
  padding: 2.6rem 2.8rem;
  margin: 0 auto;
  margin-top: 5.6rem;
`;

const SearchBox = styled.input`
  border: none;
  width: 30rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
  font-size: 1.6rem;
  border-radius: 7px;
  color: #707070;
  outline: none;
  background-color: #cbcbcb;
  background-image: url('/img/logo-social.png');
  background-size: 3.4rem 3.4rem;
  background-position: 1.5rem center;
  background-repeat: no-repeat;
`;

export default HotelSearch;
