
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import LoginApp from './LoginApp/index.jsx'
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

 render() {
     return(
         <div>
             <LoginApp />
         </div>
     )
 }


}
export default App;
