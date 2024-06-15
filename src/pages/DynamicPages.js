import React, { useState } from 'react';
import { Container, Dropdown, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DynamicPages = ({ pageName }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  // Define dynamic table data for each page
  const tableDataMap = {
    Page1: {
      'Option 1': [
        { id: 1, name: 'Item 1', price: '$10' },
        { id: 2, name: 'Item 2', price: '$20' },
        { id: 3, name: 'Item 3', price: '$30' },
      ],
      'Option 2': [
        { id: 1, name: 'Product A', quantity: 5 },
        { id: 2, name: 'Product B', quantity: 10 },
      ],
      'Option 3': [
        { id: 1, author: 'Author X', book: 'Book 1' },
        { id: 2, author: 'Author Y', book: 'Book 2' },
        { id: 3, author: 'Author Z', book: 'Book 3' },
      ],
      'Option 4': [
        { id: 1, city: 'City A', population: '100,000' },
        { id: 2, city: 'City B', population: '200,000' },
        { id: 3, city: 'City C', population: '300,000' },
      ],
      'Option 5': [
        { id: 1, fruit: 'Apple', color: 'Red' },
        { id: 2, fruit: 'Banana', color: 'Yellow' },
        { id: 3, fruit: 'Grape', color: 'Purple' },
      ],
    },
    Page2: {
      'Option A': [
        { id: 1, name: 'Item X', price: '$15' },
        { id: 2, name: 'Item Y', price: '$25' },
        { id: 3, name: 'Item Z', price: '$35' },
      ],
      'Option B': [
        { id: 1, name: 'Product C', quantity: 8 },
        { id: 2, name: 'Product D', quantity: 12 },
      ],
      'Option C': [
        { id: 1, author: 'Author P', book: 'Book X' },
        { id: 2, author: 'Author Q', book: 'Book Y' },
        { id: 3, author: 'Author R', book: 'Book Z' },
      ],
      'Option D': [
        { id: 1, city: 'City X', population: '150,000' },
        { id: 2, city: 'City Y', population: '250,000' },
        { id: 3, city: 'City Z', population: '350,000' },
      ],
      'Option E': [
        { id: 1, fruit: 'Orange', color: 'Orange' },
        { id: 2, fruit: 'Watermelon', color: 'Green' },
        { id: 3, fruit: 'Blueberry', color: 'Blue' },
      ],
    },
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    navigate('/');
    // Additional logout logic if needed
  };

  return (
    <Container className="mt-5">
      <h1>{pageName}</h1>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption || 'Select an Option'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.keys(tableDataMap[pageName]).map((option) => (
            <Dropdown.Item key={option} eventKey={option}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {selectedOption && (
        <div className="mt-3">
          <h3>Table for {selectedOption}</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                {Object.keys(tableDataMap[pageName][selectedOption][0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableDataMap[pageName][selectedOption].map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Button variant="danger" onClick={handleLogout} className="mt-3">Logout</Button>
    </Container>
  );
};

export default DynamicPages;
