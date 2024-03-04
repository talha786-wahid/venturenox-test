import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../theme/index';

import BlogHeroImg from '../../assets/images/hero-img.png';
import FeaturedBlogImg from '../../assets/images/featured-blog-img.png';

import ViewsCount from '../../components/ViewsCount';
import Button from '../../components/Button';

import { incrementPostView } from '../../store/reducers/postViewsReducer';

import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader';

function Blogs() {
  return (
    <Container>
      <HeroContainer>
        <BackgroundColumn>
          <BackgroundImage src={BlogHeroImg} alt="Background Hero image" />
          <TextOverlay>
            <h1 className="font-size-64">Our Blog</h1>
          </TextOverlay>
        </BackgroundColumn>
        <ContentColumn>
          <h4 className="font-size-40">
            Diagnose Car Problems If You <br />
            Don't Know Much About Cars
          </h4>
          <p className="font-size-18">
            We provide a full range of front end mechanical repairs for all
            makes and <br />
            models of cars, no matter the cause. This includes, We provide a
            full <br />
            range of front end mechanical.
          </p>
        </ContentColumn>
      </HeroContainer>
      <FeaturedBlogContainer>
        <FeaturedBlogBox>
          <img src={FeaturedBlogImg} alt="Featured Blog" />
          <FeaturedBlogGrid>
            <div className="header-featured-blog">
              <div className="first-col">
                <p className="font-size-16">Posted on October 6th 2021</p>
                <ViewsCount count={563} />
              </div>
              <p className="featured-blog-text">FEATURED</p>
            </div>
            <h4 className={`featured-blog-heading font-size-40`}>
              Should I Buy a New Car or Lease a New Car in 2021?
            </h4>
            <p className={`featured-blog-desc font-size-16`}>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <ReadMore>
              <p className="font-size-18">Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="16"
                viewBox="0 0 51 16"
                fill="none"
              >
                <path
                  d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
                  fill="#1E1B1B"
                />
              </svg>
            </ReadMore>
          </FeaturedBlogGrid>
        </FeaturedBlogBox>
      </FeaturedBlogContainer>
      <AllBlogsContainer>
        <GetBlogs />
      </AllBlogsContainer>
    </Container>
  );
}
function GetBlogs() {
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.postViewsReducer.postViews);

  const handleView = (id) => {
    dispatch(incrementPostView(id));
  };

  const { data, error, isLoading } = useFetchData('GetBLogs');

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <BlogsGrid>
        {data &&
          data.map((blog, i) => {
            const blogId = blog?.id;
            return (
              <Container key={i} onClick={() => handleView(blog?.id)}>
                <Link to={`/blogs/${blog.id}`}>
                  <img
                    src={blog.Image || FeaturedBlogImg}
                    alt={blog.title}
                    className="blog-img"
                  />
                  <div className="date-container">
                    <p className={`font-size-16 post-date`}>
                      Posted on October 6th 2021
                    </p>
                    {blogId && <ViewsCount count={viewCount[blogId] || 0} />}
                  </div>
                  <h1 className={`blog-heading font-size-32`}>{blog.Title}</h1>
                  <p className="blog-desc">{blog.Article.slice(0, 140)}</p>
                </Link>
              </Container>
            );
          })}
      </BlogsGrid>
      <ButtonContainer>
        <Button text="Load More" />
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div``;
const HeroContainer = styled.div`
  display: flex;
`;

const BackgroundColumn = styled.div`
  flex: 1;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${theme.colors.white};
`;

const ContentColumn = styled.div`
  flex: 1;
  background: ${theme.colors.black};
  padding-left: 61px;
  & h4 {
    color: ${theme.colors.white};
    padding-top: 90px;
  }
  & p {
    color: ${theme.colors.white};
    padding-top: 16px;
  }
`;
const FeaturedBlogContainer = styled.div`
  padding: 80px 320px;
  background-color: #f5f5f5;
`;
const FeaturedBlogBox = styled.div`
  padding: 32px 42px;
  background-color: ${theme.colors.white};
  display: flex;
`;
const FeaturedBlogGrid = styled.div`
  padding-left: 22px;
  & .header-featured-blog {
    display: flex;
    justify-content: space-between;
    & .first-col {
      display: flex;
      gap: 24px;
      & p {
        color: #939191;
      }
    }
    & .featured-blog-text {
      color: #ff6433;
    }
  }
  & .featured-blog-heading {
    padding-top: 16px;
    color: ${theme.colors.black};
  }
  & .featured-blog-desc {
    padding-top: 16px;
    color: ${theme.colors.black};
  }
`;
const ReadMore = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  margin-top: 40px;
  & p {
    padding-right: 14px;
  }
`;
const AllBlogsContainer = styled.div`
  padding: 116px 320px;
`;
const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  & .blog-img {
    width: 100%;
  }
  & .date-container {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  & .post-date {
    color: #939191;
  }
  & .blog-heading {
    padding-top: 10px;
  }
  & .blog-desc {
    padding-top: 10px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
export default Blogs;
