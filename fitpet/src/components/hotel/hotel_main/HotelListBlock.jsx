import React, { useState } from 'react';
import styled from 'styled-components';
import { Font, SmallBtn } from '../../../common';
import HotelSlider from './HotelSlider';

const HotelListBlock = ({ hotels }) => {
  const [handleState, setHandleState] = useState(1);
  const locationTab = (index) => {
    setHandleState(index);
  };
  return (
    <HotelListWrapper>
      <div className='hotelListBox'>
        <div className='locationBox'>
          <HotelLocationWrapper>
            <Font fontSize='3rem' fontWeight='normal' color='#ffffff' mb='5rem'>
              반려동물과 함께 <br />
              펫캉스 즐기자!
            </Font>
            <div className='tagBox'>
              <div>
                <SmallBtn
                  index='1'
                  region='jeju'
                  onClick={() => locationTab(1)}
                  className={handleState === 1 ? 'active' : ''}>
                  제주도
                </SmallBtn>
              </div>
              <div>
                <SmallBtn
                  index='2'
                  region='sokcho'
                  onClick={() => locationTab(2)}
                  className={handleState === 2 ? 'active' : ''}>
                  속초
                </SmallBtn>
              </div>
              <div>
                <SmallBtn
                  index='3'
                  region='jeonju'
                  onClick={() => locationTab(3)}
                  className={handleState === 3 ? 'active' : ''}>
                  전주
                </SmallBtn>
              </div>
              <div>
                <SmallBtn
                  index='4'
                  region='busan'
                  onClick={() => locationTab(4)}
                  className={handleState === 4 ? 'active' : ''}>
                  부산
                </SmallBtn>
              </div>
            </div>
          </HotelLocationWrapper>
        </div>
        {/* 호텔 슬라이드 부분 */}
        <HotelSlider hotels={hotels} region='busan' />
      </div>
    </HotelListWrapper>
  );
};
const HotelListWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.grey3_color};
  height: 55.6rem;
  .hotelListBox {
    display: flex;
    width: 128rem;
    height: 55.6rem;
    .locationBox {
      margin-top: 10rem;
      position: absolute;
    }
  }
`;
const HotelLocationWrapper = styled.div`
  width: 44rem;
  height: 57.2rem;
  color: ${(props) => props.theme.white_color};
  padding: 5rem 0 0 5rem;
  position: absolute;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_main/locationBox.png');
  line-height: 1.3; // 줄 간격
  .tagBox {
    display: block;
    .active {
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
    }
    div {
      margin-bottom: 1rem;
    }
  }
`;
export default HotelListBlock;
