import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./login.css";
import {  Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from "jquery";
import "bootstrap";
const axios = require('axios');



class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      technology: "",
      link: "",
      team: ""
    }

  }
  onSaveData() {
    let {name, description, image, technology, link, team} = this.state;
     axios.post(' https://mk-api.herokuapp.com/resume/project', {
      "name": name,
      "description": description,
      "image": image,
      "technology": technology,
      "link": link,
      "team": team
    })
  .then((data) => {
      alert("successfully created project");
      this.setState({ name: "",
          description: "",
          image: "",
          technology: "",
          link: "",
          team: ""})
    })
  }

render() {
  let {show, name, description, image, technology, link, team} = this.props;
  return(
    <div className={`modal  `} id="myModal"  role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

      </div>
      <div className="modal-body">
        <h2 className={"dialog-header"}>Add Project</h2>
				 <form className={"form"}>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Project Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={name}
                    placeholder="Project Name"
                    onChange={(e)=>{this.setState({name: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Description</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={description}
                    placeholder="Description"
                    onChange={(e)=>{this.setState({description: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Image</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={image}
                    placeholder="Image"
                    onChange={(e)=>{this.setState({image: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Technology</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={technology}
                    placeholder="Technology"
                    onChange={(e)=>{this.setState({technology: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Link</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={link}
                    placeholder="link"
                    onChange={(e)=>{this.setState({link: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-4 col-form-label formLabel">Team Number</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control formClass"
                    value={team}
                    placeholder="Team Number"
                    onChange={(e)=>{this.setState({team: e.target.value})}}
                  />
                </div>
              </div>

            </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default btn-add" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary btn-add" data-dismiss="modal" onClick={this.onSaveData.bind(this)}>Save</button>
      </div>
    </div>
  </div>
</div>


  )
}

}

export default Dialog;