import React from 'react';
import Rentalcars from '../components/mainpage/rentalcars/Rentalcars';
import Sliders from '../components/mainpage/slider/Sliders';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/common/header/Header';
import Community from '../components/mainpage/community/Community';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
const MainPage = () => {
  return (
    <>
      <MainWrapper>
        <Header />
        <Banner />
        <Sliders />
        <Course />
        <Rentalcars />
        <Community />
        <GoUpBtn />
        <Footer />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  max-width: 100%;
`;

export default MainPage;
