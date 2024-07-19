import React from 'react'
import './Admission.css'

function Admission() {
  return (
    <div className='all'>
    <h3 className='fillForm'>Fill the form to join our Tuition</h3>
      <body className='admit-body'>
      <img src='images/tuition.webp' className='tuition' alt=' ' />
      <div className='GuideLine'>
        <h3>Step-by-Step Guide</h3>
        <ol>
          <li>Obtain the Application Form</li>
          <li>Read Instructions and Requirements</li>
          <li>Fill Required Information</li>
            <ul>
              <li>Valid Full name</li>
              <li>Valid Date of Birth</li>
              <li>Your Current Age</li>
              <li>Your Active Email</li>
              <li>Your Phone Number</li>
              <li>Your Parent/Next of keen</li>
              <li>Your Current Address</li>
              <li>Your Prefered Course</li>
              <li>Additional Information(option)</li>
            </ul>
          <li>Educational Background</li>
          <ul>
              <li>Previous schools attended</li>
              <li>Academic qualifications achieved</li>
              <li>Any relevant certifications completed</li>
            </ul>
          <li>Review and Edit</li>
          <li>Submit the Application</li>
        </ol>
      </div>
        <div className="admit-container">
          <h2>For Being Admitted</h2>
          <form className='form-box' action="/submit-admission" method="POST">
            <div className="admit-form-group">
              <input type="text" id="surname" name="surname" placeholder="First-Names" required/>
            </div>
            <div className="admit-form-group">
              <input type="text" id="secondnames" name="SecondNames" placeholder='Las-Names' required/>
            </div>
            <div>
              <input type='text' id="HomeAddress" name="Home Address" placeholder='Current-Address' required/>
            </div>
            <div className="admit-form-group">
              <input type="date" id="dob" name="dob" placeholder='Valid-DOB' required/>
            </div>
            <div className="admit-form-group">
              <input type="text" id="Age" name="Age" placeholder='Current-Age' required/>
            </div>
            <div className="admit-form-group">
              <input type="email" id="email" name="email" placeholder='Email' required/>
            </div>
            <div className="admit-form-group">
              <input type="tel" id="phone" name="phone" placeholder='Contact' required/>
            </div>
            <div className="admit-form-group">
              <input type="tel" id="phone" name="phone" placeholder='Password' required/>
            </div>
            <div className="admit-form-group">
              <input type="tel" id="phone" name="phone" placeholder='Course' required/>
            </div>
            <div>
              <select type='select' className='option'>
                <option>Web Application Design and Development</option>
                <option>Mobile Application Design and Development</option>
                <option>Database Management System</option>
              </select>
            </div>
            <button type="submit">Submit</button> <button type='Reset'>Reset</button>
          </form>
        </div>
      </body>
    </div>
  )
}

export default Admission
