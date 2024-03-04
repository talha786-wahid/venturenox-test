import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  selectedProperties: [],
  searchResults: [],
  filteredRes: [],
  propertyTypeFilter: null,
  properties: [
    {
      id: 1,
      address: 'ForsmannstraBe 5',
      postCode: 22303,
      propertyType: 'Flat',
      rooms: 5,
      floorArea: 48,
    },
    {
      id: 2,
      address: 'Steinstabe',
      postCode: 20095,
      propertyType: 'Terraced house',
      rooms: 7,
      floorArea: 63,
    },
    {
      id: 3,
      address: 'Himmelstrabe 2',
      postCode: 22299,
      propertyType: 'Semi-detached',
      rooms: 3,
      floorArea: 22,
    },
    {
      id: 4,
      address: 'Alte Scheluse 23',
      postCode: 21107,
      propertyType: 'Terraced house',
      rooms: 4,
      floorArea: 54,
    },
    {
      id: 5,
      address: 'Sunset Boulevard 123',
      postCode: 90210,
      propertyType: 'Semi-detached',
      rooms: 3,
      floorArea: 120,
    },
    {
      id: 6,
      address: 'Green Meadows Lane 7',
      postCode: 45678,
      propertyType: 'Terraced house',
      rooms: 5,
      floorArea: 200,
    },
    {
      id: 7,
      address: 'Ocean View Drive 45',
      postCode: 54321,
      propertyType: 'Semi-detached',
      rooms: 2,
      floorArea: 80,
    },
    {
      id: 8,
      address: 'Meadow Lane 15',
      postCode: 12345,
      propertyType: 'Flat',
      rooms: 6,
      floorArea: 300,
    },
    {
      id: 9,
      address: 'City Center Plaza 101',
      postCode: 67890,
      propertyType: 'Semi-detached',
      rooms: 2,
      floorArea: 90,
    },
    {
      id: 10,
      address: 'Mountain View Heights 30',
      postCode: 34567,
      propertyType: 'Terraced house',
      rooms: 3,
      floorArea: 150,
    },
  ],
};

const propertyReducer = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    searchFilter: (state, action) => {
      state.searchResults = action.payload;
    },
    setPropertyTypeFilter: (state, action) => {
      state.propertyTypeFilter = action.payload;
    },
    setProperty: (state, action) => {
      state.filteredRes = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setPropertyTypeFilter,
  searchFilter,
  setProperty,
} = propertyReducer.actions;

export default propertyReducer.reducer;
