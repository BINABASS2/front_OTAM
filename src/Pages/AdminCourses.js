import React from 'react'
import './AdminCourses.css'

function AdminCourses() {
  return (
    <div className='adminBody'>
        <h2 className='adminh1'>Admin Panel - Online Tuition Admission System</h2>
        <form id="courseForm" enctype="multipart/form-data">
            <h2 className='adminh2'>Add New Course</h2>
            <input placeholder='Course Title' type="text" id="courseTitle" name="courseTitle" required/>
            
            <textarea placeholder='Course Description' id="courseDescription" name="courseDescription" rows="4" required/>
            
            <label className='adminImg' for="courseImage">Course Image (optional):</label>
            <input type="file" id="courseImage" name="courseImage"/>
            
            <label className='adminmaterial' for="courseMaterials">Course Materials (PDF, DOCX, etc.):</label>
            <input type="file" id="courseMaterials" name="courseMaterials" required/>
            
            <input className='adminbtn' type="submit" value="Add Course"/>
        </form>
    </div>
    )
}

export default AdminCourses
