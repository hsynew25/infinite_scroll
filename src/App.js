import styled from "styled-components";
import "./App.css";
import { FetchMovie } from "./FetchMovie";

const Container = styled.div``;

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

function App() {
  const { loading, movie, fetching } = FetchMovie();
  return (
    <div className="App">
      <h1>Infinite Movies / Page 1</h1>
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

export default App;
