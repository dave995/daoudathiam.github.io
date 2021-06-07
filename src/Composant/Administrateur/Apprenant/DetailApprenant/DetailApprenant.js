import React, { Component } from "react";
import TutorialDataService from "../../../services/service";
import TutorialDataServiceA from "../../../services/service1";

export default class DetailApprenant extends Component {
  constructor(props) {
    super(props);
    this.onChangeNoms = this.onChangeNoms.bind(this);
    this.onChangePrenoms = this.onChangePrenoms.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeGmail = this.onChangeGmail.bind(this);
    this.onChangePasse = this.onChangePasse.bind(this);
    
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);


    this.state = {
      currentTutorial: {
        key: null,
        noms: "",
        prenoms: "",
        telephone: "",
        gmail: "",
        passe: "",
       
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

  onChangeNoms(e) {
    const noms = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          noms: noms,
        },
      };
    });
  }

  onChangePrenoms(e) {
    const prenoms = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          prenoms: prenoms,
        },
      };
    });
  }

  onChangeTelephone(e) {
    const telephone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          telephone: telephone,
        },
      };
    });
  }

  onChangeGmail(e) {
    const gmail = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          gmail: gmail,
        },
      };
    });
  }

  onChangePasse(e) {
    const passe = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          passe: passe,
        },
      };
    });
  }

 

  updatePublished() {
    let data = {
      noms: this.state.noms,
      prenoms: this.state.prenoms,
      telephone: this.state.telephone,
      gmail: this.state.gmail,
      passe: this.state.passe,
      published: false
     };

    TutorialDataServiceA.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      TutorialDataService.delete(this.state.currentTutorial.key)
        .then(() => {
        this.props.refreshList();
      })
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
    noms: this.state.currentTutorial.noms,
      prenoms: this.state.currentTutorial.prenoms,
      telephone: this.state.currentTutorial.telephone,
      gmail: this.state.currentTutorial.gmail,
      passe: this.state.currentTutorial.passe,
      
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
    TutorialDataService.delete(this.state.currentTutorial.key)
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
        <h4 class="text-light">Détail de l'apprenant</h4>
        </div>
        {currentTutorial ? (
          <div className="card-body">
          <div>
            
            <form>
              
            <div className="form-group">
              <label htmlFor="noms">Noms</label>
              <input
                type="text"
                className="form-control"
                id="noms"
                required
                value={this.state.noms}
                onChange={this.onChangeNoms}
                name="noms"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prenoms">Prenoms</label>
              <input
                type="text"
                className="form-control"
                id="prenoms"
                required
                value={this.state.prenoms}
                onChange={this.onChangePrenoms}
                name="prenoms"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                required
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
                name="telephone"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="gmail">Gmail</label>
              <input
                type="text"
                className="form-control"
                id="gmail"
                required
                value={this.state.gmail}
                onChange={this.onChangeGmail}
                name="gmail"
              />
            </div>
              
            </form>

              <button
                className="btn btn-sm btn-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Archive
              </button>
            

            <button
              className="btn btn-sm btn-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-sm btn-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
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
