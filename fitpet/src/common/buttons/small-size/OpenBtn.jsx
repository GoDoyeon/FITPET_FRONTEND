import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const OpenBtn = (props) => {
  const {
    fontSize,
    backColor,
    hoverColor,
    textHover,
    border,
    margin,
    borderRadius,
    _onClick,
    color,
    pt,
    pb,
    pr,
    pl,
    mt,
    mb,
    mr,
    ml,
    width,
    height,
    position,
    top,
    right,
  } = props;

  const styles = {
    position: position,
    top: top,
    right: right,
    backColor: backColor,
    hoverColor: hoverColor,
    border: border,
    color: color,
    fontSize: fontSize,
    margin: margin,
    borderRadius: borderRadius,
    width: width,
    height: height,
    textHover: textHover,
    pt: pt,
    pb: pb,
    pl: pl,
    pr: pr,
    mt: mt,
    mb: mb,
    ml: ml,
    mr: mr,
  };

  return (
    <OpenBtnWrapper {...styles} onClick={_onClick}>
      <AiOutlineRight size='1.5rem' color='#707070' />
    </OpenBtnWrapper>
  );
};

OpenBtn.defaultProps = {
  transition: 0,
  backColor: '#cbcbcb',
  width: '2.8rem',
  height: '2.8rem',
  border: 'none',
  margin: '0',
  _onClick: () => {},
};

const OpenBtnWrapper = styled.button`
  outline: none;
  cursor: pointer;
  transition: 0.4s;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  position: ${({ position }) => position};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  border: ${(props) => props.border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: ${(props) => props.textHover};
  }
`;

export default OpenBtn;
