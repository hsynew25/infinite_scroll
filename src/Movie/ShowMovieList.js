import styled from "styled-components";
import { FetchMovie } from "./FetchMovie";

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0;
`;

const Container = styled.div`
  padding: 40px;
`;

const List = styled.ul``;

const Item = styled.li`
  font-size: 16px;
  margin: 5px 0;
`;

const Waiting = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #2d3436;
  padding: 10px 20px;
`;

function ShowMovieList() {
  const { loading, movie, fetching } = FetchMovie();
  return (
    <div>
      <Title>Infinite Movies / Page 1</Title>
      {loading ? (
        <Waiting>Loading...⏰</Waiting>
      ) : (
        <Container>
          <List>
            {movie.map((item, idx) => (
              <Item key={idx}>{`${idx} : ${item.title}`}</Item>
            ))}
            {fetching ? <Waiting>Waiting...🥺</Waiting> : null}
          </List>
        </Container>
      )}
    </div>
  );
}

export default ShowMovieList;
