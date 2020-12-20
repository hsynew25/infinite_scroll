import styled from "styled-components";
import { FetchCovid } from "./FetchCovid";

const Container = styled.div`
  padding: 30px;
`;

const Today = styled.div`
  font-size: 24px;
  font-weight: bold;
  max-width: 750px;
  margin: 0 auto 15px;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  max-width: 750px;
  margin: 0 auto;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tfoot = styled.tfoot`
  tr > td {
    background-color: #ffcccc;
  }
`;

const ItemHeader = styled.th`
  padding: 5px 10px;
  border: 1px solid #d2d2d2;
  vertical-align: middle;
  background-color: #ffeaa7;
`;

const ItemInner = styled.td`
  padding: 5px 10px;
  border: 1px solid #d2d2d2;
  vertical-align: middle;
`;

const Item = styled.tr`
  height: 35px;
  td:first-child {
    text-align: center;
  }
`;

const Waiting = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #2d3436;
  padding: 10px 20px;
`;

const Nothing = styled.div`
  height: 80vh;
  padding: 50px;
  background-color: #ffeaa7;
  text-align: center;
  div {
    margin: 50px;
    font-size: 150px;
  }
`;

function Covie19() {
  const { loading, covid, isNothing } = FetchCovid();
  return (
    <>
      {isNothing ? (
        <Nothing>
          오늘의 코로나19 현황이 아직 업데이트되지 않았습니다.
          <br /> 이전 코로나19 현황을 보고 싶으시다면 아래로 내려주세요 😀
          <div>👇</div>
        </Nothing>
      ) : null}
      {Object.values(covid) &&
        Object.values(covid).length > 0 &&
        Object.values(covid).map((cvd, idx) => (
          <Container key={idx}>
            <Today>{`${cvd.today.year}년 ${cvd.today.month}월 ${cvd.today.day}일`}</Today>
            {loading ? (
              <Waiting>Loading...⏰</Waiting>
            ) : (
              <Table>
                <Thead>
                  <Item>
                    <ItemHeader>
                      순위
                      <br />
                      (전일대비 증감수 기준)
                    </ItemHeader>
                    <ItemHeader>지역</ItemHeader>
                    <ItemHeader>전일대비 증감수</ItemHeader>
                    <ItemHeader>총확진자</ItemHeader>
                  </Item>
                </Thead>
                <Tbody>
                  {cvd.covidArr &&
                    cvd.covidArr.length > 0 &&
                    cvd.covidArr
                      .filter((co) => co.gubun !== "합계")
                      .sort((first, second) => second.incDec - first.incDec)
                      .map((item, num) => (
                        <Item key={num} num={num}>
                          <ItemInner>{num + 1}</ItemInner>
                          <ItemInner>{item.gubun}</ItemInner>
                          <ItemInner>{item.incDec}</ItemInner>
                          <ItemInner>{item.defCnt}</ItemInner>
                        </Item>
                      ))}
                </Tbody>
                <Tfoot>
                  {cvd.covidArr &&
                    cvd.covidArr.length > 0 &&
                    cvd.covidArr
                      .filter((co) => co.gubun === "합계")
                      .map((item, num) => (
                        <Item key={num} num={num}>
                          <ItemInner></ItemInner>
                          <ItemInner>{item.gubun}</ItemInner>
                          <ItemInner>{item.incDec}</ItemInner>
                          <ItemInner>{item.defCnt}</ItemInner>
                        </Item>
                      ))}
                </Tfoot>
              </Table>
            )}
          </Container>
        ))}
    </>
  );
}

export default Covie19;
