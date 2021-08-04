import React from 'react';
import styled from 'styled-components';
import { RoundSquareBtn } from '../../../common';

const HotelDetails = () => {
  return (
    <DetailWrapper>
      <StyledP>1박 기준</StyledP>
      <Price>
        446,590 ~ <span>원</span>
      </Price>
      <RoundSquareBtn main_color style={{ marginTop: '1.4rem' }}>
        상세보기
      </RoundSquareBtn>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  float: right;
`;

const StyledP = styled.p`
  text-align: right;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.71;
  color: #707070;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.4px;
  color: #707070;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.71;
    color: #707070;
  }
`;

export default HotelDetails;
