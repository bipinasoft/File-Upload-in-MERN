import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  };

  onChangeHandler=event=>{
    console.log('number1');
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  };

  onClickHandler=event => {
    console.log('number2');
    const data = new FormData() 
    data.append('file', this.state.selectedFile);

    axios.post("http://localhost:8000/upload", data, { 
      // receive two parameter endpoint url ,form data 

      })
      .then(res => { // then print response status
        console.log('I am here in response');
        console.log(res.statusText);
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />  
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <form method="post" action="#" id="#">
                  <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" multiple="" onChange={(e)=>this.onChangeHandler(e)}/>                    
                  </div>  
                  <div className="form-group">
                    <button type="button" className="btn btn-outline-info btn-lg" onClick={(e)=>this.onClickHandler(e)}>Upload</button>
                  </div>                  
                </form>	      	      
              </div>
            </div>
          </div>        
        </header>
      </div>
    );
  }
}

export default App;