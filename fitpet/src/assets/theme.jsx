const size = {
  mobile: '360px',
  tablet: '768px',
  laptop: '1440px',
};

// background-color: ${(props) => props.theme.white_color}
// 이런식으로 적용
const theme = {
  main_color: '#4765ff', // 메인 컬러
  sub_color: '#32d8b8', // 서브 컬러
  black1_color: '#2A2A2A', // 일반 글
  grey1_color: '#707070', // 버블 미선택 글자 색상
  grey2_color: '#979797', // 두거운 라인
  grey3_color: '#cbcbcb', // 텍스트 박스 / 기본 라인 / 플레이스 홀더
  grey4_color: '#eeeeee', // 버블 미선택 색상
  grey5_color: '#f9f9f9', // 배경없는 컴텐츠 박스 색상
  white_color: '#ffffff', // 화이트 컬러
  wish_color: '#ff7a5c', // 찜하기 하트 색상
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  laptop: `(max-width:${size.laptop})`,
};

export default theme;
