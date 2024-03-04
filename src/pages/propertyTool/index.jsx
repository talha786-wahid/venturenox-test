import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImmoLogo from '../../assets/images/immo-logo.png';

import theme from '../../theme';

import SearchBar from './components/SearchBar';
import PropertiesTable from './components/PropertiesTable';
import PropertyFilter from './components/PropertyFilter';
import { Link } from 'react-router-dom';

function PropertyTool() {
  const { searchResults } = useSelector((state) => state.propertyReducer);
  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleSelectedProperties = (e, id) => {
    let arr = searchResults.find((item) => item.id === id);
    if (e.target.checked) {
      setSelectedProperties((prevState) => [...prevState, { ...arr }]);
    } else {
      setSelectedProperties(selectedProperties.filter((p) => p.id !== id));
    }
  };
  return (
    <Container>
      <HeaderContainer>
        <img src={ImmoLogo} alt="IMMO LOGO" className="immo-logo" />
        <p>Property Search Tool</p>
        <Link to="/blogs">
          <h3>Blogs</h3>
        </Link>
      </HeaderContainer>
      <PropertyTypesContainer>
        <PropertyFilter />
        <Container>
          <SearchBar />
          {selectedProperties.length > 0 && (
            <>
              <h4>Selected Properties</h4>
              <PropertiesTable data={selectedProperties} />
            </>
          )}
          {searchResults.length > 0 ? (
            <Container>
              <h4>Search Results</h4>
              <PropertiesTable
                results={true}
                data={searchResults}
                handleSelectedProperties={handleSelectedProperties}
              />
            </Container>
          ) : (
            'No Data'
          )}
        </Container>
      </PropertyTypesContainer>
    </Container>
  );
}
const Container = styled.div``;
const HeaderContainer = styled.div`
  position: relative;
  background: ${theme.colors.lightgrey};
  height: 65px;
  margin-bottom: 20px;
  & p {
    text-align: center;
    padding-top: 20px;
    font-weight: 700;
  }
  & .immo-logo {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  & h3 {
    position: absolute;
    top: 20px;
    right: 15px;
  }
`;
const PropertyTypesContainer = styled.div`
  padding: 20px 200px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export default PropertyTool;
