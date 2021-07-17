import React from 'react';
import styled from 'styled-components';

const Only = (props) => {
  const { margin, _onClick } = props;

  const styles = {
    margin: margin,
  };
  return (
    <OnlyBox {...styles} onClick={_onClick}>
      <OnlyBlock>
        <Text>
          올 여름은 <br />
          애견수영장에서 시원하게
        </Text>
      </OnlyBlock>
    </OnlyBox>
  );
};

export default Only;

const OnlyBox = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: #979797;
  border-radius: 25px;
  /* &:hover {
    margin-top: -1rem;
  } */
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
`;
const OnlyBlock = styled.div`
  margin: 28.6rem 3.8rem 3.6rem 3.8rem;
  color: #fff;
`;
const Text = styled.p`
  height: 7.8rem;
  font-size: 30px;
  line-height: 1.2; // 줄 간격
`;
