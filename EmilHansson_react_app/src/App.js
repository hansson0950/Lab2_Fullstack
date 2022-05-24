import React from "react";

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
      <>
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Course Name</th>
              <th>Time of registration</th>
            </tr>
          </thead>
          {/* <tbody>
            <td>{this.state.students.slice(0, 5).map(student => <tr key={student._id}><td key={student._id}>{student._id}</td></tr>)}</td>
            <td>{this.state.students.slice(0, 5).map(student => <tr key={student._id}><td key={student._id}>{student.name}</td></tr>)}</td>
            <td>{this.state.courses.slice(0, 5).map(course => <tr key={course._id}><td key={course._id}>{course.name}</td></tr>)}</td>
            <td>{this.state.registrations.slice(0, 5).map(registration => <tr key={registration._id}><td key={registration._id}>{registration.dateJoined}</td></tr>)}</td>
          </tbody> */}

          <tbody>
            <tr>
              {this.state.students.slice(0, 1).map(student => <td key={student._id}>{student._id}</td>)}
              {this.state.students.slice(0, 1).map(student => <td key={student._id}>{student.name}</td>)}
              {this.state.courses.slice(0, 1).map(course => <td key={course._id}>{course.name}</td>)}
              {this.state.registrations.slice(0, 1).map(registration => <td key={registration._id}>{registration.dateJoined}</td>)}
            </tr>
            <tr>
              {this.state.students.slice(1, 2).map(student => <td key={student._id}>{student._id}</td>)}
              {this.state.students.slice(1, 2).map(student => <td key={student._id}>{student.name}</td>)}
              {this.state.courses.slice(1, 2).map(course => <td key={course._id}>{course.name}</td>)}
              {this.state.registrations.slice(1, 2).map(registration => <td key={registration._id}>{registration.dateJoined}</td>)}
            </tr>
            <tr>
              {this.state.students.slice(2, 3).map(student => <td key={student._id}>{student._id}</td>)}
              {this.state.students.slice(2, 3).map(student => <td key={student._id}>{student.name}</td>)}
              {this.state.courses.slice(2, 3).map(course => <td key={course._id}>{course.name}</td>)}
              {this.state.registrations.slice(2, 3).map(registration => <td key={registration._id}>{registration.dateJoined}</td>)}
            </tr>
            <tr>
              {this.state.students.slice(3, 4).map(student => <td key={student._id}>{student._id}</td>)}
              {this.state.students.slice(3, 4).map(student => <td key={student._id}>{student.name}</td>)}
              {this.state.courses.slice(3, 4).map(course => <td key={course._id}>{course.name}</td>)}
              {this.state.registrations.slice(3, 4).map(registration => <td key={registration._id}>{registration.dateJoined}</td>)}
            </tr>
            <tr>
              {this.state.students.slice(4, 5).map(student => <td key={student._id}>{student._id}</td>)}
              {this.state.students.slice(4, 5).map(student => <td key={student._id}>{student.name}</td>)}
              {this.state.courses.slice(4, 5).map(course => <td key={course._id}>{course.name}</td>)}
              {this.state.registrations.slice(4, 5).map(registration => <td key={registration._id}>{registration.dateJoined}</td>)}
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default App;