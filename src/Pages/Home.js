import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <body className='responsive'>
    <header>
        <div className="div1">
          <h1> Online Tuitions Admission <img src='images/student.jpg' className='stuImage' alt=' ' /> </h1>
        </div>
    </header>
    
    <section id="home" className="intro-about">
        <div className="div2">
            <h2>Welcome to Almalik Training Center</h2>
            <p className='welcomeP'>This system is designed for A.T.C to enhance the admission and management process for online tuitions. It provides a user-friendly interface for Students, Teachers and even Head to manage their activities efficiently.</p>
        </div>
    </section>
    
    <div className='container'>
        <section id="about" className="info-about">
            <div className="div3">
                <h2>About the System</h2>
                <p>Our Online Tuitions Admission and Management System is built to prepare the needs of modern educational institutions. It simplifies the admission process, manages student information, schedules classes, and provides easy communication channels between teachers and students.</p>
            </div>
        </section>
        
        <section id="features" className="info-features">
            <div class="div4">
                <h2>Features Offered</h2>
                <ul>
                    <li>Online Admission</li>
                    <li>Class Scheduling</li>
                    <li>Student Management</li>
                    <li>Teacher Management</li>
                    <li>Communication Tools</li>
                </ul>
            </div>
        </section>
    </div>
    
    <section id="contact" className="contact-section">
        <div className="div5">
            <h2>For more Information</h2>
            <p>If you have any questions or need further information, please feel free to contact us at abdullatifsuleiman78@gmail.com.</p>
        </div>
        <a href='/Admission'>Apply Now</a>
    </section>
    
    <footer>
        <div class="div6">
            <pre>
              <p>&copy; 2024 Online Tuitions Admission and Management System.</p>
              <p>All Rights Reserved.</p>
            </pre>
        </div>
    </footer>
</body>
    </div>
  )
}

export default Home
