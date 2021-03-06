import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SocialBtn } from '../../common';
import { closeLogin, openSignUp } from '../../redux/modules/modal';
import FindId from './FindId';

const LoginBottom = ({ login, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const _ref = useRef(null);
  const dispatch = useDispatch();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: '2.2rem',
        position: 'absolute',
        left: '2rem',
        top: '25%',
      }}
      spin
    />
  );

  useEffect(() => {
    if (!email || !password) {
      _ref.current.style = 'opacity:0.4';
      _ref.current.disabled = true;
    } else {
      _ref.current.style = 'opacity:1; cursor:pointer;';
      _ref.current.disabled = false;
    }
  }, [email, password]);

  return (
    <BottomContainer>
      {/* login input 컴포넌트 */}
      {email && <StyledText>이메일 아이디</StyledText>}
      {!email && <StyledTextHidden>이메일 아이디</StyledTextHidden>}

      <StyledInput
        placeholder='이메일 아이디'
        type='email'
        value={email}
        onChange={changeId}
      />

      {password && <StyledText>비밀번호</StyledText>}
      {!password && <StyledTextHidden>비밀번호</StyledTextHidden>}

      <StyledInput
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={changePassword}
      />

      {/* 아이디 저장 및 찾기 */}
      <FindId />
      <StyledButton ref={_ref} type='submit' onClick={signin}>
        로그인
        {isLoading && <Spin indicator={antIcon} />}
      </StyledButton>
      {/* sns계정으로 가입 */}
      <SocialBlock>
        <SocialText>SNS 계정으로 간편하게 가입하기</SocialText>
        {/* sns로 가입하기 버튼 */}
        <SocialBtn />
      </SocialBlock>

      <Container>
        <StyledP>아직 핏펫 회원이 아니신가요?</StyledP>

        <button className='signUp' onClick={goSignUp}>
          회원가입
        </button>
      </Container>
    </BottomContainer>
  );

  // 아이디
  function changeId(e) {
    setEmail(e.target.value);
  }

  // 비밀번호
  function changePassword(e) {
    setPassword(e.target.value);
  }

  // signin
  function signin(e) {
    e.preventDefault();
    login(email, password);
  }

  // 아직 회원이 아니신가요 버튼
  function goSignUp() {
    dispatch(closeLogin());
    dispatch(openSignUp());
  }
};

// 컨테이너
const BottomContainer = styled.div`
  margin: 0 auto;
  width: 37.39rem;
  color: ${(props) => props.theme.black1_color};
`;

// 로그인 input 부분
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.grey3_color};
  padding-bottom: 1rem;
  background-color: transparent;
  font-size: 1.6rem;
  line-height: 1.19;
  color: ${(props) => props.theme.black1_color};
  letter-spacing: 0.4px;
  text-align: left;
  outline: none;
  margin-top: 0.6rem;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.grey2_color};
    color: ${(props) => props.theme.black1_color};
  }
`;

// sns로 회원가입 하기
const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.6rem 3.3rem;
  border-bottom: solid 1px ${(props) => props.theme.grey4_color};
`;
const SocialText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: 0.4px;
  white-space: nowrap;
  color: ${(props) => props.theme.black1_color};
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: 0.4px;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
  margin-top: 1.6rem;
`;

const StyledTextHidden = styled(StyledText)`
  visibility: hidden;
`;
// 로그인버튼
const StyledButton = styled.button`
  width: 100%;
  height: 5.2rem;
  font-size: 1.8rem;
  letter-spacing: 1px;
  border-radius: 26px;
  background: ${(props) => props.theme.gradient_color};
  position: relative;

  cursor: not-allowed;
  outline: none;
  border: none;
  color: ${(props) => props.theme.white_color};

  &:hover {
    background: ${(props) => props.theme.main_color};
  }
`;

// 회원가입 버튼 부분
const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4rem;

  .signUp {
    display: inline-block;
    font-size: 1.4rem;
    padding: 0 0.2rem 1rem;
    height: 1.6rem;
    margin: 0 0 0 1rem;
    font-weight: 500;
    padding-bottom: 2rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.black1_color};
    color: ${(props) => props.theme.black1_color};

    background-color: transparent;
    &:hover {
      color: ${(props) => props.theme.main_color};
      border-bottom: 1px solid ${(props) => props.theme.main_color};
    }
  }
`;

const StyledP = styled.p`
  display: inline-block;
  text-align: center;
`;

export default LoginBottom;
