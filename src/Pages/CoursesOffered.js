import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseOffered.css';

function CoursesOffered() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', imageUrl: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('localhost://8080/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const addCourse = async () => {
    try {
      const response = await axios.post('/api/courses', newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`/api/courses/${courseId}`);
      setCourses(courses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const editCourse = async (courseId) => {
    const title = prompt('Enter new title:');
    const description = prompt('Enter new description:');
    const imageUrl = prompt('Enter new image URL:');

    if (title && description && imageUrl) {
      try {
        const response = await axios.put(`/api/courses/${courseId}`, { title, description, imageUrl });
        setCourses(courses.map(course => course.id === courseId ? response.data : course));
      } catch (error) {
        console.error('Error editing course:', error);
      }
    }
  };

  return (
    <div className='course-body'>
      <header className='offer'>
        <div className="div1">
          <h1>Our Offered Courses</h1>
        </div>
      </header>
      <section className="course-catalogue">
        <div className="course-container">
          <h2 className='mainH'>Available Courses</h2>
          <table className="course-list">
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>
                    <button onClick={() => editCourse(course.id)}>Edit</button>
                    <button onClick={() => deleteCourse(course.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            />
            <button onClick={addCourse}>Add Course</button>
            <button onClick={editCourse}>Edit Course</button>
            <button onClick={deleteCourse}>delete Course</button>
          </div>
        </div>
      </section>
      <footer>
        <a href='/Admission'>Apply Now</a>
        <pre>
          <p>&copy; 2024 Online Tuitions Admission and Management System.</p>
          <p>All Rights Reserved.</p>
        </pre>
      </footer>
    </div>
  );
}

export default CoursesOffered;
