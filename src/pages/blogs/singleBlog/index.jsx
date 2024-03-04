import React from 'react';
import { useSelector } from 'react-redux';

import useFetchData from '../../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ViewsCount from '../../../components/ViewsCount';
import Loader from '../../../components/Loader';

function SingleBlog() {
  const { id } = useParams();
  const viewCount = useSelector(
    (state) => state.postViewsReducer.postViews[id] || 0
  );

  const { data, error, isLoading } = useFetchData(`GetBLogs/${id}`);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <div className="date-container">
        <p className={`font-size-16 post-date`}>Posted on October 6th 2021</p>
        {data && <ViewsCount count={viewCount} />}
      </div>
      <h1 className={`blog-title font-size-48`}>{data?.Title}</h1>
      <p className={`blog-subtitle font-size-16`}>{data?.Subtitle}</p>
      <img src={data?.Image} alt={data?.Title} className="blog-img" />
      <p className={`blog-subtitle font-size-16`}>{data?.Article}</p>
    </Container>
  );
}
const Container = styled.div`
  padding: 80px 320px;
  & .date-container {
    padding-top: 20px;
    display: flex;
    gap: 20px;
  }
  & .post-date {
    color: #939191;
  }
  & .blog-title {
    padding-top: 10px;
  }
  & .blog-subtitle {
    opacity: 0.6;
  }
  & .blog-img {
    width: 100%;
    margin: 50px 0;
  }
`;

export default SingleBlog;
