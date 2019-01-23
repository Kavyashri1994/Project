import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./login.css";
import {  Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from "jquery";
import "bootstrap";
import Dialog from "./Dialog.jsx";

const axios = require('axios');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false
    }
  }

  componentDidMount() {
   axios.get('https://mk-api.herokuapp.com/resume/project/all')
  .then((res) => {
      this.setState({items: res.data})
    })
  }

  onClickAddProject() {
    this.setState({show: !this.state.show})
  }

  render() {
    let {items, show} = this.state;

    return (
      <div>
        <button type="button" className={"btn btn-primary mt-4 mb-2 add-btn"} data-toggle="modal" data-target="#myModal" onClick={this.onClickAddProject.bind(this)}>Add Project</button>
        <Dialog show={show}/>
        <div className="row">
          {items.map((data,i)=>
            <div className="col-sm-4 " key={i}>
              <div className="card list-card ">
                <div className="card-body clearfix">
                  <img src={data.image} className="rounded float-left image" alt="No Image" />
                  <div className={"information"}>
                  <div><span className={"text-muted"}>Project Name:</span><span className={"font-weight-bold"}>{data.name}</span></div>
                  <div><span className={"text-muted"}>Technology:</span><span className={"font-weight-bold"}>{data.technology}</span></div>
                  <div><span className={"text-muted"}>Link:</span><a className={"font-weight-bold"}>{data.link}</a></div>
                  <div><span className={"text-muted"}>Description:</span><span className={"font-weight-bold"}>{data.description}</span></div>
                  <div><span className={"text-muted"}>Members:</span><span className={"font-weight-bold"}>{data.team}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default List;