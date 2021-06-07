import React, { Component } from "react";
import TutorialDataService from "../../../../services/tutorial.service";
import TutorialDataServiceA from "../../../../services/tutorial2.service";

export default class Archive extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeTeacher = this.onChangeTeacher.bind(this);
    this.onChangeLesson = this.onChangeLesson.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);


    this.state = {
      currentTutorial: {
        key: null,
        title: "",
        date: "",
        time: "",
        teacher: "",
        lesson: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          date: date,
        },
      };
    });
  }

  onChangeTime(e) {
    const time = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          time: time,
        },
      };
    });
  }

  onChangeTeacher(e) {
    const teacher = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          teacher: teacher,
        },
      };
    });
  }

  onChangeLesson(e) {
    const lesson = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          lesson: lesson,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    TutorialDataService.update(this.state.currentTutorial.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
      title: this.state.currentTutorial.title,
      date: this.state.currentTutorial.date,
      time: this.state.currentTutorial.time,
      teacher: this.state.currentTutorial.teacher,
      lesson: this.state.currentTutorial.lesson,
      description: this.state.currentTutorial.description,
    };

    TutorialDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataServiceA.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div className="card">
        <div class="card-header bg-dark">
        <h4 class="text-light">Détails</h4>
        </div>
        {currentTutorial ? (
          <div>
            
            <form>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  value={currentTutorial.date}
                  onChange={this.onChangeDate}
                />
              </div>

              <div className="form-group">
              <label htmlFor="time">Temps</label>
              <input
                type="text"
                className="form-control"
                id="time"
                value={currentTutorial.time}
                onChange={this.onChangeTime}
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="teacher">Professeur</label>
              <input
                type="text"
                className="form-control"
                id="teacher"
                value={currentTutorial.teacher}
                onChange={this.onChangeTeacher}
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="lesson">Leçon</label>
              <input
                type="text"
                className="form-control"
                id="lesson"
                value={currentTutorial.lesson}
                onChange={this.onChangeLesson}
              />
            </div> */}

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <button
              className="btn btn-sm btn-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>
              </div>
            </form>

            
              
          </div>
        ) : (
          <div>
            <br />
            <p>Click on a Tutorial</p>
          </div>
        )}
      </div>
    );
  }
}