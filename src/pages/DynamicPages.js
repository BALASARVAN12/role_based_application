import React, { useState } from 'react';
import { Container, Dropdown, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DynamicPages = ({ pageName }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  // Define dynamic table data for each page
  const tableDataMap = {
    DivisonA: {
      'Item 1': [
        {id: 1, "Name Of the Equipment": 'Item 1', "Make": 'Company A', "ID No.":"1234","Frequency Of Calibration":'Yes', "Date of Calibration":'27/12/2023',"Calibration Due Date":'27/12/2024' },

      ],
      'Item 2': [
        { id: 1, "Name Of the Equipment": 'Item 2', "Make": 'Company B', "ID No.":2134,"Frequency Of Calibration":'No', "Date of Calibration":'06/12/2023',"Calibration Due Date":'06/12/2024'  },
      ],
      'Item 3': [
        { id: 1, "Name Of the Equipment": 'Item 3', "Make": 'Company C', "ID No.":3124,"Frequency Of Calibration":'Yes', "Date of Calibration":'13/03/2023',"Calibration Due Date":'28/09/2028'  },
      ],
      'Item 4': [
        { id: 1, "Name Of the Equipment": 'Item 4', "Make": 'Company D', "ID No.":4123,"Frequency Of Calibration":'No', "Date of Calibration":'05/01/2024',"Calibration Due Date":'31/12/2024'  },
      ],
      'Item 5': [
        { id: 1," Name Of the Equipment": 'Item 5', "Make": 'Company E'," ID No.":3241,"Frequency Of Calibration":'Yes', "Date of Calibration":'27/12/2023',"Calibration Due Date":'27/12/2024' },
      ],
    },
    DivisonB: {
      'Item 1': [
        {id: 1," Name Of the Equipment": 'Item 1', "Make": 'Company A', "ID No.":1234,"Frequency Of Calibration":'Yes'," Date of Calibration":'27/12/2023',"Calibration Due Date":'27/12/2024' },
      ],
      'Item 2': [
        {id: 1, "Name Of the Equipment": 'Item 2', "Make": 'Company B', "ID No.":2134,"Frequency Of Calibration":'No', "Date of Calibration":'06/12/2023',"Calibration Due Date":'06/12/2024' },
      ],
      'Item 3': [
        {id: 1, "Name Of the Equipment": 'Item 3', "Make": 'Company C', "ID No.":3124,"Frequency Of Calibration":'Yes', "Date of Calibration":'13/03/2023',"Calibration Due Date":'28/09/2028'  },
      ],
      'Item 4': [
        { id: 1, "Name Of the Equipment": 'Item 4', "Make": 'Company D', "ID No.":4123,"Frequency Of Calibration":'No', "Date of Calibration":'05/01/2024',"Calibration Due Date":'31/12/2024' },
      ],
      'Item 5': [
        { id: 1, "Name Of the Equipment": 'Item 5', "Make": 'Company E', "ID No.":3241,"Frequency Of Calibration":'Yes', "Date of Calibration":'27/12/2023',"Calibration Due Date":'27/12/2024'  },
      ],
    },
  };
  
  const buttonStyle_1 = {
    position:"fixed",
    left:"45%",



  }
  const buttonStyle = {
    position:"fixed",
    bottom:"20px",
    left:"50%",
    transform:"translateX(-50%)",
    padding:"10px 20px",
    borderRadius:"5px"
  }

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    navigate('/');
    toast.success('Logout successful!');
    // Additional logout logic if needed
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to {pageName}</h1>
      <Dropdown onSelect={handleSelect} style={buttonStyle_1}>
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
<br/> <br/>
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
      <Button variant="danger" onClick={handleLogout} style={buttonStyle}>Logout</Button>
    </Container>
  );
};

export default DynamicPages;