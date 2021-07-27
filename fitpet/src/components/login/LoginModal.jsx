import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Login from './Login';

const LoginModal = ({ hide }) =>
  ReactDOM.createPortal(
    <>
      <StyledDiv>
        <div class='center'>
          <Login hide={hide} />
        </div>
      </StyledDiv>
    </>,
    document.querySelector('#loginModal'),
  );

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default LoginModal;
