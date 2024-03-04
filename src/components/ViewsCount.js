import React from 'react';
import ViewCountImg from '../assets/images/view-eye.png';
import styled from 'styled-components';

function ViewsCount({ count }) {
  return (
    <Container>
      <img src={ViewCountImg} alt="Eye View Count" />
      <p className="font-size-16">
        {count} {count > 1 ? 'views' : 'view'}
      </p>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 19px;
    height: 14px;
    margin-right: 6px;
  }
  & p {
    color: #939191;
  }
`;
export default ViewsCount;
