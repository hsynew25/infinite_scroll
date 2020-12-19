import styled from "styled-components";
import axios from "axios";

const getCovid = async () => {
  const apiKey =
    "Ezns1tKRgU%2BwI1iXLes4vzRPJwHchaMumIZz6RY0xDwZndqKVEezuocD7ndSCwpUVoq9aqIE1bNZhvNEUvDMDw%3D%3D";
  const enApi = encodeURI(apiKey);
  const deApi = decodeURI(apiKey);
  try {
    const response = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${apiKey}&pageNo=1&numOfRows=10&startCreateDt=20200410&endCreateDt=20200410`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finish");
  }
};

const Container = styled.div`
  padding: 30px;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  max-width: 750px;
  margin: 0 auto;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Item = styled.tr`
  height: 35px;
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

function Covie19() {
  getCovid();
  return (
    <Container>
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
          <Item>
            <ItemInner></ItemInner>
          </Item>
        </Tbody>
      </Table>
    </Container>
  );
}

export default Covie19;
