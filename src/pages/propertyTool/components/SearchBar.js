import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  setSearchQuery,
  searchFilter,
  setProperty,
} from '../../../store/reducers/propertyReducer';
import theme from '../../../theme';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { properties, searchQuery } = useSelector(
    (state) => state.propertyReducer
  );
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleSearchSubmit = () => {
    const filteredProperties = properties.filter((property) =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(searchFilter(filteredProperties));
    dispatch(setProperty(filteredProperties));
  };
  return (
    <Container>
      <h4>Search</h4>
      <Input type="text" onChange={handleSearchChange} placeholder="Address" />
      <Button onClick={handleSearchSubmit}>Search</Button>
    </Container>
  );
};
const Container = styled.div`
  margin: 20px 0;
`;
const Input = styled.input`
  width: 700px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid gainsboro;
  padding: 10px;
  margin-top: 10px;
`;
const Button = styled.button`
  background: ${theme.colors.yellow};
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
`;
export default SearchBar;
