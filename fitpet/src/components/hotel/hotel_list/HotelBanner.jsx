import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useWindowScroll from '../../../hooks/useWindowScroll';
import MainNav from '../../mainpage/banner/MainNav';
import HotelSearch from '../hotel_common/HotelSearch';

const HotelBanner = () => {
  const yOffset = useWindowScroll();
  const [isScroll, setIsScroll] = useState(true);

  useEffect(() => {
    if (yOffset > 10) setIsScroll(false);
    else setIsScroll(true);
  }, [yOffset]);

  return (
    <>
      {isScroll ? (
        <Banner>
          <MainNav />
          <HotelSearch isScroll={isScroll} />
        </Banner>
      ) : (
        <Banner scroll>
          <HotelSearch isScroll={isScroll} />
        </Banner>
      )}
    </>
  );
};

const Banner = styled.div`
  position: fixed;
  z-index: 10;
  top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.3rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_list/hotelsearchbanner.png');

  ${(props) =>
    props.scroll &&
    css`
      padding: 1.9rem 0 1.2rem;
    `}
`;

export default HotelBanner;
