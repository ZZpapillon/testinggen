import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './Generator.css';
import Cv from './CV';

function Generator() {
  const [generalInfoTemp, setGeneralInfoTemp] = useState({ name: '', email: '', phone: '' });
  const [educationalExpTemp, setEducationalExpTemp] = useState({ schoolName: '', studyTitle: '', dateOfStudy: '' });
  const [practicalExpTemp, setPracticalExpTemp] = useState({ companyName: '', positionTitle: '', responsibilities: '', dateWorked: '' });

  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalExp, setEducationalExp] = useState({});
  const [practicalExp, setPracticalExp] = useState({});


  const handleEdit = (section, data) => {
  switch (section) {
    case 'generalInfo':
      setGeneralInfo(data);
      setGeneralInfoTemp(data); // Update temporary state upon editing
      break;
    case 'educationalExp':
      setEducationalExp(data);
      setEducationalExpTemp(data); // Update temporary state upon editing
      break;
    case 'practicalExp':
      setPracticalExp(data);
      setPracticalExpTemp(data); // Update temporary state upon editing
      break;
    default:
      break;
  }
};



  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfoTemp(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleEducationalExpChange = (e) => {
    const { name, value } = e.target;
    setEducationalExpTemp(prevExp => ({
      ...prevExp,
      [name]: value
    }));
  };

  const handlePracticalExpChange = (e) => {
    const { name, value } = e.target;
    setPracticalExpTemp(prevExp => ({
      ...prevExp,
      [name]: value
    }));
  };

  const submitGeneralInfo = (e) => {
    e.preventDefault(); 
    setGeneralInfo(generalInfoTemp);
    console.log("Submitted General Information:", generalInfoTemp);
    setGeneralInfoTemp({ name: '', email: '', phone: '' });
  };

  const submitEducationalExp = (e) => {
    e.preventDefault(); 
    setEducationalExp(educationalExpTemp);
    console.log("Submitted Educational Experience:", educationalExpTemp);
    setEducationalExpTemp({ schoolName: '', studyTitle: '', dateOfStudy: '' });
  };

  const submitPracticalExp = (e) => {
    e.preventDefault(); 
    setPracticalExp(practicalExpTemp);
    console.log("Submitted Practical Experience:", practicalExpTemp);
    setPracticalExpTemp({ companyName: '', positionTitle: '', responsibilities: '', dateWorked: '' });
  };

  return (
    <Container className='m-0 p-0'>
      <Row>
        <Col md={7} className='border-end border-primary ps-3' style={{ backgroundColor: 'lightblue', overflowY: 'auto', maxHeight: 'calc(100vh' }} >
          <div className='border-black pr-4 mb-4 ms-3'>
            <h1 className='mt-3'>CV GENERATOR:</h1>
            <Container>
              <h2>General Information</h2>
              <Form className="mb-4" onSubmit={submitGeneralInfo}>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={generalInfoTemp.name}
                    onChange={handleGeneralInfoChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={generalInfoTemp.email}
                    onChange={handleGeneralInfoChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                    value={generalInfoTemp.phone}
                    onChange={handleGeneralInfoChange}
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>

              <h2>Educational Experience</h2>
              <Form className="mb-4" onSubmit={submitEducationalExp}>
                <Form.Group controlId="formBasicSchoolName" className="mb-3">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter school name"
                    name="schoolName"
                    value={educationalExpTemp.schoolName}
                    onChange={handleEducationalExpChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicStudyTitle" className="mb-3">
                  <Form.Label>Title of Study</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title of study"
                    name="studyTitle"
                    value={educationalExpTemp.studyTitle}
                    onChange={handleEducationalExpChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicDateOfStudy" className="mb-3">
                  <Form.Label>Date of Study</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter date of study"
                    name="dateOfStudy"
                    value={educationalExpTemp.dateOfStudy}
                    onChange={handleEducationalExpChange}
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>

              <h2>Practical Experience</h2>
              <Form className="mb-4" onSubmit={submitPracticalExp}>
                <Form.Group controlId="formBasicCompanyName" className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    value={practicalExpTemp.companyName}
                    onChange={handlePracticalExpChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPositionTitle" className="mb-3">
                  <Form.Label>Position Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter position title"
                    name="positionTitle"
                    value={practicalExpTemp.positionTitle}
                    onChange={handlePracticalExpChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicResponsibilities" className="mb-3">
                  <Form.Label>Main Responsibilities</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter main responsibilities"
                    name="responsibilities"
                    value={practicalExpTemp.responsibilities}
                    onChange={handlePracticalExpChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicDateOfWork" className="mb-3">
                  <Form.Label>Date Worked</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter date worked"
                    name="dateWorked"
                    value={practicalExpTemp.dateWorked}
                    onChange={handlePracticalExpChange}
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Container>
          </div>
        </Col>
        <Col md={5}>
          <Cv
            generalInfo={generalInfo}
            educationalExp={educationalExp}
            practicalExp={practicalExp}
            onEdit={handleEdit} // Pass the handleEdit function to Cv component
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Generator;
