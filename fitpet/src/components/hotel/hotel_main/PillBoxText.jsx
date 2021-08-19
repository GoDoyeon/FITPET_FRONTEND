import React from 'react';
import styled, { css } from 'styled-components';
import { Font } from '../../../common';

const PillBoxText = () => {
  return (
    <PillTextBlock>
      <Text mb='1.2rem'>호텔 | 5성급</Text>
      <Text mb='0.6rem' maintext>
        롯데호텔 제주
      </Text>
      <Font fontSize='1.4rem' mb='0rem' style={{ lineHeight: '1.33' }}>
        Lotte Hotel JEJUs
      </Font>

      <CityStar>
        <Star>
          <img src='/img/icon/bluestaricon.svg' alt='평점' />
          <Font fontSize='1.4rem' ml='0.2rem' color='#2a2a2a'>
            4.5
          </Font>
        </Star>
        <City>
          <img src='/img/icon/bluelocationicon.svg' alt='위치' />
          <span style={{ marginLeft: '0.4rem' }}>서귀포시</span>
        </City>
      </CityStar>

      <div>
        <Text mt='2rem' normal>
          소형견 | 중형견 | 애견동반
        </Text>
      </div>

      <div>
        <Price mt='2.4rem'>446,490 ~</Price>
      </div>
    </PillTextBlock>
  );
};

const PillTextBlock = styled.div`
  padding: 2.8rem 0 0 2.8rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: -0.28px;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};

  ${(props) =>
    props.maintext &&
    css`
      font-size: 1.8rem;
      line-height: 1.33;
    `}

  ${(props) =>
    props.normal &&
    css`
      font-weight: normal;
    `}
`;
const CityStar = styled.div`
  display: flex;
`;
export const Star = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const City = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
`;

const Price = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.black1_color};
  font-weight: bold;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  ${(props) =>
    props.hiddenPrice &&
    css`
      visibility: hidden;
    `}
`;
export default PillBoxText;