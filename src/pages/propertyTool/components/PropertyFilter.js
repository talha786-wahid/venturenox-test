import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  searchFilter,
  setPropertyTypeFilter,
} from '../../../store/reducers/propertyReducer';

const PropertyFilter = () => {
  const dispatch = useDispatch();
  const propertyTypes = ['All', 'Flat', 'Terraced house', 'Semi-detached'];

  const { filteredRes, propertyTypeFilter } = useSelector(
    (state) => state.propertyReducer
  );

  const handleFilterChange = (v) => {
    dispatch(setPropertyTypeFilter(v));
  };

  useEffect(() => {
    let filteredProperties;
    if (propertyTypeFilter === 'All') {
      filteredProperties = filteredRes;
    } else {
      filteredProperties = filteredRes.filter(
        (property) => property.propertyType === propertyTypeFilter
      );
    }
    dispatch(searchFilter(filteredProperties));
  }, [propertyTypeFilter]);

  return (
    <PropertyTypes>
      <h4>Property Types</h4>
      {propertyTypes.map((p, i) => (
        <p key={i} onClick={() => handleFilterChange(p)}>
          {p}
        </p>
      ))}
    </PropertyTypes>
  );
};

const PropertyTypes = styled.div`
  margin-top: 10px;
  width: 180px;
  padding: 5px;
  background: gainsboro;
  & p:hover {
    cursor: pointer;
  }
`;
export default PropertyFilter;
