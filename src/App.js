import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: [],
      hasLoaded: false
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

  isLoading() {
    this.setState({ hasLoaded: false });
  }

  toggleHasLoaded() {
    this.setState({ hasLoaded: true });
  }

  showFilms() {
    return (
      <main>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli logo" />
        <br />
        <button onClick={() => this.isLoading()}>Hide Films</button>
        <ul>
          {this.state.films.map(movie => {
            return (
              <li key={movie.id}>
                <div className="col-md-7 m-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    )
  }

  render() {
    if (this.state.hasLoaded) {
      return (
        <main>
            <div>{this.showFilms()}</div>
        </main>
      );
    } else {
      return (
         <div>
          <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli logo" />
          <br />
          <button onClick={() => this.toggleHasLoaded()}>Load Films </button>
        </div>
      );
    }

  }

}

export default App;