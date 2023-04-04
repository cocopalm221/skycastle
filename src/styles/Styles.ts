import styled from "styled-components";
// 전체 레이아웃
export const FlexContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;
// 사이드바
export const SideBarContainer = styled.div`
  position: fixed;
  width: 17%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.white};
  .sidebar-title {
    height: 15vh;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    line-height: 15vh;
    letter-spacing: 2px;
  }
  .sidebar-menu {
    background-color: ${(props) => props.theme.colors.mainColor};
    color: ${(props) => props.theme.colors.white};
    font-size: 24px;
    font-weight: 400;
    svg {
      display: inline-block;
    }
    .ant-menu-title-content:hover {
      color: ${(props) => props.theme.colors.white};
    }
    .ant-menu-item {
      margin-bottom: 20px !important;
    }
    .ant-menu-item:hover {
      background-color: #495a5f !important;
    }
    .ant-menu-item-selected {
      background-color: #495a5f;
      color: ${(props) => props.theme.colors.white};
    }
    .ant-menu-title-content anpm {
      display: flex;
      align-items: center;
    }
  }
`;

// 메인화면
export const MainContentsContainer = styled.div`
  width: 83%;
  margin-left: 17%;
`;

// 헤더
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 112px;
  padding: 35px;
  justify-content: end;
  span {
    font-weight: 700;
    font-size: 24px;
    padding: 0 4px;
  }

  span:nth-child(2) {
    padding-top: 5px;
  }
  div {
    display: flex;
    height: 112px;
    padding: 35px 35px 35px 0;
    justify-content: end;
    align-items: center;

    span {
      font-weight: 700;
      font-size: 24px;
      padding: 0 4px;
    }
    span:nth-child(2) {
      padding-top: 5px;
    }
    div {
      display: flex;
    }
    button {
      padding: 0 13px;
      font-weight: 500;
      font-size: 24px;
    }
    #logout {
      border-radius: 20px;
      background: ${(props) => props.theme.colors.menuColor};
    }
    #logout:hover {
      background: ${(props) => props.theme.colors.mainColor};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

//탭메뉴

//로그인
export const LoginContainer = styled.div`
  background: ${(props) => props.theme.colors.mainColor};
  background-image: url("/images/main_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  padding: 260px;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 141px;
    letter-spacing: 2px;
    /* color: black; */
  }
  input {
    width: 706px;
    height: 50px;
    background: rgba(255, 255, 255, 0.49);
    border-radius: 20px;
    padding-left: 31px;
    outline: none;
  }
  input:nth-child(1) {
    margin-bottom: 38px;
  }
  input[type="password"] {
    margin-bottom: 123px;
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.mainColor};
  }
  form > button {
    position: static;
    font-weight: 700;
    width: 300px;
    height: 50px;
    background: rgba(255, 255, 255, 0.49);
    border-radius: 20px;
    color: ${(props) => props.theme.colors.mainColor};
  }
  button:nth-child(1) {
    top: 640px;
    right: 800px;
    position: absolute;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.white};
  }
  button:nth-child(2) {
    top: 640px;
    right: 610px;
    position: absolute;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FindIdContainer = styled(LoginContainer)`
  padding: 221px;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 50px;
    color: ${(props) => props.theme.colors.white};
  }
  input:nth-child(1) {
    margin-bottom: 38px;
  }
  input:nth-of-type(2) {
    /* input 중에서 두 번째 엘리먼트를 선택하는 다른 방법 */
    margin-bottom: 38px;
  }
  input:nth-of-type(3) {
    /* input 중에서 두 번째 엘리먼트를 선택하는 다른 방법 */
    margin-bottom: 115px;
  }
  button:nth-child(1) {
    top: 680px;
    right: 610px;
  }
  button:nth-child(2) {
    top: 680px;
    right: 770px;
  }
`;

export const FindPasswordContainer = styled(LoginContainer)`
  padding: 221px;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 50px;
    color: ${(props) => props.theme.colors.white};
  }
  input:nth-child(1) {
    margin-bottom: 38px;
  }
  input:nth-of-type(2) {
    /* input 중에서 두 번째 엘리먼트를 선택하는 다른 방법 */
    margin-bottom: 38px;
  }
  input:nth-of-type(3) {
    /* input 중에서 두 번째 엘리먼트를 선택하는 다른 방법 */
    margin-bottom: 115px;
  }
  button:nth-child(1) {
    top: 680px;
    right: 610px;
  }
  button:nth-child(2) {
    top: 680px;
    right: 770px;
  }
`;
