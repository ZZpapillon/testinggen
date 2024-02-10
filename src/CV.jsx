import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Generator.css';

function Cv({ generalInfo, educationalExp, practicalExp, onEdit }) {
  const handleEditGeneralInfo = () => {
    onEdit('generalInfo', generalInfo); // Pass generalInfo instead of generalInfoTemp
  };

  const handleEditEducationalExp = () => {
    onEdit('educationalExp', educationalExp); // Pass educationalExp instead of educationalExpTemp
  };

  const handleEditPracticalExp = () => {
    onEdit('practicalExp', practicalExp); // Pass practicalExp instead of practicalExpTemp
  };

  return (
    <div className='p-5'>
      <Container className='border border-3 p-3'>
        <h1 className='border-bottom border-black'>Your CV:</h1>

        {/* General Information */}
        <div className='border-bottom mb-3 d-flex justify-content-between align-items-center'>
          <div>
            <h2>General Information</h2>
            <div>
              <h3>Name: {generalInfo.name}</h3>
            </div>
            <div>
              <h3>Email: {generalInfo.email}</h3>
            </div>
            <div>
              <h3>Phone: {generalInfo.phone}</h3>
            </div>
          </div>
          <Button onClick={handleEditGeneralInfo}>Edit</Button>
        </div>

        {/* Educational Experience */}
        <div className='border-bottom mb-3 d-flex justify-content-between align-items-center'>
          <div>
            <h2>Educational Experience</h2>
            <div>
              <h3>School Name: {educationalExp.schoolName}</h3>
            </div>
            <div>
              <h3>Study Title: {educationalExp.studyTitle}</h3>
            </div>
            <div>
              <h3>Date of Study: {educationalExp.dateOfStudy}</h3>
            </div>
          </div>
          <Button onClick={handleEditEducationalExp}>Edit</Button>
        </div>

        {/* Practical Experience */}
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h2>Practical Experience</h2>
            <div>
              <h3>Company Name: {practicalExp.companyName}</h3>
            </div>
            <div>
              <h3>Position Title: {practicalExp.positionTitle}</h3>
            </div>
            <div>
              <h3>Main Responsibilities: {practicalExp.responsibilities}</h3>
            </div>
            <div>
              <h3>Date Worked: {practicalExp.dateWorked}</h3>
            </div>
          </div>
          <Button onClick={handleEditPracticalExp}>Edit</Button>
        </div>
      </Container>
    </div>
  );
}

export default Cv;
