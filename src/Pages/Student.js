import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Student.css';

function Student() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ firstName: '', lastName: '', address: '', dob: '', age: '', email: '', password: '' });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('/students/list');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const addStudent = async () => {
        try {
            const response = await axios.post('/students/add', newStudent);
            setStudents([...students, response.data]);
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    const updateStudent = async (id, updatedStudent) => {
        try {
            const response = await axios.put(`/students/update/${id}`, updatedStudent);
            setStudents(students.map(student => (student.studentId === id ? response.data : student)));
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`/students/delete/${id}`);
            setStudents(students.filter(student => student.studentId !== id));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="App">
            <h1>Student Management System</h1>
            <div className="form-container">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <p>
                <button onClick={addStudent}>Add</button>
                <button onClick={setStudents}>Edit</button>
                <button onClick={deleteStudent}>Delete</button>
                </p>
            </div>
            <table>
                <tbody>
                    {students.map(student => (
                        <tr key={student.studentId}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.address}</td>
                            <td>{student.dob}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => updateStudent(student.studentId, student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.studentId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
