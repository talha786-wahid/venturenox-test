import React from 'react';
import styled from 'styled-components';

function PropertiesTable({
  results = false,
  data = [],
  handleSelectedProperties,
}) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {results && <th>✓</th>}
            <th>Address</th>
            <th>Postcode</th>
            {results && <th>Property Type</th>}
            <th>Number of rooms</th>
            <th>Floor area (m2)</th>
          </tr>
        </thead>
        {data.length > 0 &&
          data.map((p) => {
            return (
              <tr key={p.id}>
                {results && (
                  <td>
                    <input
                      type="checkbox"
                      onClick={(e) => handleSelectedProperties(e, p.id)}
                    />
                  </td>
                )}
                <td>{p.address}</td>
                <td>{p.postCode}</td>
                {results && <td>{p.propertyType}</td>}
                <td>{p.rooms}</td>
                <td>{p.floorArea}</td>
              </tr>
            );
          })}
      </table>
    </Container>
  );
}
const Container = styled.div`
  table {
    border-collapse: separate;
    width: 100%;
  }
  thead {
    background: gainsboro;
  }
  th,
  td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  input {
    margin: auto;
  }
`;
export default PropertiesTable;
