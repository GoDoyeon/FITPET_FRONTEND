import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SignUp from '../components/signUp/SignUp';
import { closeSignUp, openLogin } from '../redux/modules/modal';
import { signupSagaStart } from '../redux/modules/signup';

const SignupContainer = ({ showSignupSuccess }) => {
  const dispatch = useDispatch();

  // 회원가입창 닫기
  const hideSignUp = useCallback(() => {
    dispatch(closeSignUp());
  }, [dispatch]);

  // 로그인 이동하기 버튼
  const goLogin = useCallback(() => {
    dispatch(closeSignUp());
    dispatch(openLogin());
  }, [dispatch]);

  const signup = useCallback(
    (userId, userPW) => {
      dispatch(signupSagaStart(userId, userPW));
    },
    [dispatch],
  );

  return (
    <SignUp
      hideSignUp={hideSignUp}
      goLogin={goLogin}
      signup={signup}
      showSignupSuccess={showSignupSuccess}
    />
  );
};

export default SignupContainer;