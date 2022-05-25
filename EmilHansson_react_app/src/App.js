import React from "react";
import regeneratorRuntime from "regenerator-runtime";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      registrations: [],
      studentIDs: [],
      studentNames: [],
      courseNames: [],
      registrationTimes: [],
      update: 0
    };
  }

  async componentDidMount() {
    const registration =
      await fetch("http://localhost:3000/api/registrations")
        .then(res => res.json());

    this.setState({ registrations: registration });

    this.state.registrations.reverse().splice(5);

    this.setState({ studentIDs: this.state.registrations.map(registration => registration.studentID) });
    this.setState({ registrationTimes: this.state.registrations.map(registration => registration.dateJoined) });

    var courseNames = [];
    var courseID = this.state.registrations.map(registration => registration.courseID);
    for (let i = 0; i < courseID.length; i++) {
      await fetch("http://localhost:3000/api/courses/" + courseID[i])
        .then(res => res.json())
        .then(response => courseNames.push(response.name));
    };
    this.setState({ courseNames: courseNames });

    var studentNames = [];
    var studentID = this.state.registrations.map(registration => registration.studentID);
    for (let i = 0; i < studentID.length; i++) {
      await fetch("http://localhost:3000/api/students/" + studentID[i])
        .then(res => res.json())
        .then(response => studentNames.push(response.name));
    };
    this.setState({ studentNames: studentNames.reverse().slice(0, 5) });
  }

  sortTable(index) {
    var list = [];
    for (let i = 0; i < this.state.registrations.length; i++) {
      list.push({
        "studentID": this.state.studentIDs[i], "studentName": this.state.studentNames[i],
        "courseName": this.state.courseNames[i], "registrationTime": this.state.registrationTimes[i]
      });
    };

    switch (index) {
      case 0:
        list.sort(function (a, b) {
          return ((a.studentID < b.studentID) ? -1 : ((a.studentID == b.studentID) ? 0 : 1));
        });
        break;

      case 1:
        list.sort(function (a, b) {
          return ((a.studentName < b.studentName) ? -1 : ((a.studentName == b.studentName) ? 0 : 1));
        });
        break;

      case 2:
        list.sort(function (a, b) {
          return ((a.courseName < b.courseName) ? -1 : ((a.courseName == b.courseName) ? 0 : 1));
        });
        break;

      case 3:
        list.sort(function (a, b) {
          return ((a.registrationTime < b.registrationTime) ? -1 : ((a.registrationTime == b.registrationTime) ? 0 : 1));
        });
        break;
      default: break;
    };

    for (let i = 0; i < this.state.registrations.length; i++) {
      this.state.studentIDs[i] = list[i].studentID;
      this.state.studentNames[i] = list[i].studentName;
      this.state.courseNames[i] = list[i].courseName;
      this.state.registrationTimes[i] = list[i].registrationTime;
    }
    this.setState({ update: 0 })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th><button onClick={() => this.sortTable(0)} className="button">StudentID</button></th>
            <th><button onClick={() => this.sortTable(1)} className="button">Student Name</button></th>
            <th><button onClick={() => this.sortTable(2)} className="button">Course Name</button></th>
            <th><button onClick={() => this.sortTable(3)} className="button">Time of Registration</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.studentIDs[0]}</td>
            <td>{this.state.studentNames[0]}</td>
            <td>{this.state.courseNames[0]}</td>
            <td>{this.state.registrationTimes[0]}</td>
          </tr>
          <tr>
            <td>{this.state.studentIDs[1]}</td>
            <td>{this.state.studentNames[1]}</td>
            <td>{this.state.courseNames[1]}</td>
            <td>{this.state.registrationTimes[1]}</td>
          </tr>
          <tr>
            <td>{this.state.studentIDs[2]}</td>
            <td>{this.state.studentNames[2]}</td>
            <td>{this.state.courseNames[2]}</td>
            <td>{this.state.registrationTimes[2]}</td>
          </tr>
          <tr>
            <td>{this.state.studentIDs[3]}</td>
            <td>{this.state.studentNames[3]}</td>
            <td>{this.state.courseNames[3]}</td>
            <td>{this.state.registrationTimes[3]}</td>
          </tr>
          <tr>
            <td>{this.state.studentIDs[4]}</td>
            <td>{this.state.studentNames[4]}</td>
            <td>{this.state.courseNames[4]}</td>
            <td>{this.state.registrationTimes[4]}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;