import React from 'react';
import styled from 'styled-components';

function Loader() {
  return (
    <Container>
      <SVG viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </SVG>
    </Container>
  );
}
const Container = styled.div`
  margin: 10px 0;
  text-align: center;
`;
const SVG = styled.svg`
  width: 30px;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 5;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
export default Loader;
