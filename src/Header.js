import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #d2d2d2;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const Information = styled.p`
  margin: 15px 0;
  text-align: center;
  font-size: 18px;
`;

const List = styled.ul`
  padding: 10px 10px 0;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  background-color: #4a69bd;
  padding: 10px;
  margin: 0 10px;
  color: #ffffff;
`;

const SLink = styled(Link)``;

export default withRouter(() => (
  <Header>
    <Title>코로나19 시,도 발생현황</Title>
    <Information>
      Infinite scroll을 테스트해보기위해 만든 웹사이트입니다. 뜬금없지만
      무비리스트도 존재합니다 😅
    </Information>
    <List>
      <Item>
        <SLink to="/">코로나19 발생현황</SLink>
      </Item>
      <Item>
        <SLink to="movieList">영화리스트</SLink>
      </Item>
    </List>
  </Header>
));
