import React from 'react';
import { Font, Only, Tag } from '../../../common';
import styled from 'styled-components';

const Slider = () => {
  return (
    <SliderBlock>
      {/* 어디로 갈까요? 슬라이드 부분 */}
      <LocationBlock>
        <Font color='#707070' fontSize='42px' fontWeight='bold'>
          어디로 갈까요?
        </Font>
        <LocationWrapper>
          {/* <SliderLeftButton />
            <SliderRightButton /> */}
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag></Tag>
        </LocationWrapper>
      </LocationBlock>
      {/* 오직 핏펫에서만 슬라이드 부분 */}
      <OnlyFitpetBlock>
        <Font color='#707070' fontSize='42px' fontWeight='bold'>
          오직 핏펫에서만
        </Font>
        <OnlyFitpetWrapper>
          <Only margin='0 4rem 0 0'></Only>
          <Only margin='0 4rem 0 0'></Only>
          <Only margin='0 4rem 0 0'></Only>
        </OnlyFitpetWrapper>
      </OnlyFitpetBlock>
    </SliderBlock>
  );
};

export default Slider;

const SliderBlock = styled.div`
  display: flow-root;
  margin: 0 32rem;
  padding: 12rem 0;
`;
const LocationBlock = styled.div`
  justify-content: center;
`;

const LocationWrapper = styled.div`
  margin-top: 1.6rem;
  height: 40rem;
  display: flex;
  justify-content: center;
`;
const OnlyFitpetBlock = styled.div`
  justify-content: center;
  margin: 12rem 0;
`;
const OnlyFitpetWrapper = styled.div`
  justify-content: center;
  margin-top: 1.6rem;
  height: 40rem;
  display: flex;
`;
