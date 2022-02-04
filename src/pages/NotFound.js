import styled from "styled-components";

function NotFound() {
  return (
    <Container>
      <h1>No page found</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default NotFound;
