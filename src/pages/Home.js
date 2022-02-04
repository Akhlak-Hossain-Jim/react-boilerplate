import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div>
        This is a React Boilerplate Created and formatted by{" "}
        <a
          href="http://ah-jim-seed.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akhlak Hossain Jim
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div``;
export default Home;
