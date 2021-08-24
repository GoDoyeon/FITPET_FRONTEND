import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hotelMainSagaStart } from '../redux/modules/hotelMain';
import HotelMain from '../components/hotel/hotel_main/HotelMain';
import { useEffect } from 'react';

const HotelMainContainer = () => {
  const dispatch = useDispatch();
  const hitsList = useSelector((state) => state.hotelMain.hitsList);

  useEffect(() => {
    dispatch(hotelMainSagaStart());
  }, [dispatch]);

  return <HotelMain hitsList={hitsList} />;
};

export default HotelMainContainer;
