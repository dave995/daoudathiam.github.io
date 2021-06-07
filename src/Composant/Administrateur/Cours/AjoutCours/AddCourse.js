import React, { Component } from "react";
import TutorialDataService from "../../../../services/tutorial.service";

export default class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeTeacher = this.onChangeTeacher.bind(this);
    this.onChangeLesson = this.onChangeLesson.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      date: "",
      time: "",
      teacher: "",
      lesson: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onChangeTeacher(e) {
    this.setState({
      teacher: e.target.value,
    });
  }

  onChangeLesson(e) {
    this.setState({
      lesson: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
      title: this.state.title,
      date: this.state.date,
      time: this.state.time,
      teacher: this.state.teacher,
      lesson: this.state.lesson,
      description: this.state.description,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      title: "",
      date: "",
      time: "",
      teacher: "",
      lesson: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Ajouter
            </button>
          </div>
        ) : (
          <div>
            <div className="card">

              <div className="card-header bg-dark">
              <h4 class="text-light">Ajouter un cour</h4>
              </div>

              <div className="card-body">
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="time">Temps</label>
              <input
                type="text"
                className="form-control"
                id="time"
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                name="time"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="teacher">Professeur</label>
              <input
                type="text"
                className="form-control"
                id="teacher"
                required
                value={this.state.teacher}
                onChange={this.onChangeTeacher}
                name="teacher"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="lesson">Leçon</label>
              <input
                type="text"
                className="form-control"
                id="lesson"
                required
                value={this.state.lesson}
                onChange={this.onChangeLesson}
                name="lesson"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="dscription"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
            </div>
          </div>
          </div>
        )}
      </div>
    );
  }
}