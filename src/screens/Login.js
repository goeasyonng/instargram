import styled from "styled-components";

function Login() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4em;
    background: papaywhip;
  `;

  return (
    <div>
      <Wrapper>
        <Title>인스타그램</Title>
        <div>
          <form>
            <input type="email" />
            <input type="password " />
            <input type="submit" />
          </form>
        </div>
      </Wrapper>
    </div>
  );
}

export default Login;
