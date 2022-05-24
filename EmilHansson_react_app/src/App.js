import React from "react";
import reactDom from "react-dom";
import axios from "axios";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      students: [],
      courses: [],
      registrations: []
    };
  }


  componentDidMount() {
    fetch("http://localhost:3000/api/students")
      .then(res => res.json())
      .then(response => this.setState({ students: response }));

    fetch("http://localhost:3000/api/courses")
      .then(res => res.json())
      .then(response => this.setState({ courses: response }));

    fetch("http://localhost:3000/api/registrations")
      .then(res => res.json())
      .then(response => this.setState({ registrations: response }));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Time of registration</th>
          </tr>
        </thead>
        <tbody>
          <td>{this.state.students.map(student => <tr key={student._id}>{student._id}</tr>)}</td>
          <td>{this.state.students.map(student => <tr key={student._id}>{student.name}</tr>)}</td>
          <td>{this.state.courses.map(course => <tr key={course._id}>{course.name}</tr>)}</td>
          <td>{this.state.registrations.map(registration => <tr key={registration._id}>{registration.dateJoined}</tr>)}</td>
        </tbody>
      </table>
    )
  }
}

export default App;