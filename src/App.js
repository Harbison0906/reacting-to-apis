import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
// import { directive } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => {
        this.setState({ films: movie });
        console.log(movie.title)
      });
  }

  render() {
    return (
      <main>
        {this.state.films.map(movie => {
          return (
            <div className="col-md-7">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </main>


    )
  }

}

export default App;