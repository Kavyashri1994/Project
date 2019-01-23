import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import "bootstrap";
import "./login.css";
import List from "./ProjectList.jsx";


const axios = require('axios');

class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      name: '',
      login: true,
      sName: "",
      sPassword: "",
      sMail: "",
      sMessage: "",
      items: [],
      listDisplay: false
    }
  }

onClickLogin() {
  let {login, mail, password} = this.state,
    data = {
      "email": mail,
      "password": password
    }
  this.setState({login: true});
  if(mail && password) {
      axios.post('https://mk-api.herokuapp.com/resume/auth/login', {
        "email": mail,
        "password": password
      })
    .then((data) => {
      debugger;
        console.log(data);
        if(data) {
        this.setState({listDisplay: true})
        } else {
          return false;
        }
      })
  }

}
getList() {
  axios.get('https://mk-api.herokuapp.com/resume/project/all')
  .then(function (response) {
    debugger;
    console.log(response);
    this.setState({items: response.data, listDisplay: true})
  })
}

onCLickSignin() {
  let {login, sName, sPassword, sMail, sMessage} = this.state,
    data = {
      "name": sName,
      "email": sMail,
      "password": sPassword
    }
  this.setState({login: false});
  if(sName && sMail && sPassword) {
    axios.post('https://mk-api.herokuapp.com/resume/auth/register', {
      "name": sName,
      "email": sMail,
      "password": sPassword
    })
  .then(function (response) {
    console.log(response);
    if(response && response.data && response.status==200) {
      alert("SingUp is SuccessFul")
    }
    this.setState({sName: "",
      sMail: "",
      sPassword: ""})
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
  render() {
    let {mail, password, name, login, sName, sPassword, sMail, listDisplay, items} = this.state;
    return(
      <div>
        {!listDisplay ?
        <div className={"loginForm"}>
            <h2 className={"header"}>Login App</h2>
          {login ?
            <form className={"form"}>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-2 col-form-label formLabel">Email</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control formClass"
                    id="staticEmail"
                    value={mail}
                    placeholder="Email"
                    onChange={(e)=>{this.setState({mail: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-2 col-form-label formLabel">Password</label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control formClass"
                    minLength={8}
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{this.setState({password: e.target.value})}}
                    />
                </div>
              </div>
            </form> :
            <form className={"form"}>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-2 col-form-label formLabel">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control formClass"
                    id="staticEmail"
                    value={sName}
                    placeholder="Name"
                    onChange={(e)=>{this.setState({sName: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-2 col-form-label formLabel">Email</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control formClass"
                    id="staticEmail"
                    value={sMail}
                    placeholder="Email"
                    onChange={(e)=>{this.setState({sMail: e.target.value})}}
                  />
                </div>
              </div>
              <div className="form-group row ml-2 mr-2">
                <label className="col-sm-2 col-form-label formLabel">Password</label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control formClass"
                    minLength={8}
                    id="inputPassword"
                    placeholder="Password"
                    value={sPassword}
                    onChange={(e)=>{this.setState({sPassword: e.target.value})}}
                    />
                </div>
              </div>
            </form>
          }
          <button type="button" className={"button"} onClick={this.onClickLogin.bind(this)}>Login </button>
          <button type="button" className={"button"} onClick={this.onCLickSignin.bind(this)}>SignUp </button>
        </div>
        : <List items={items}/>}
      </div>
    )
  }
}

export default LoginApp;