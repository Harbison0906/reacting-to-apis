import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: [],
      people: [],
      filmsLoaded: false,
      peopleLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => {
        this.setState({ films: movie });
        console.log(movie)
      });
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(person => {
        this.setState({ people: person });
        console.log(person)
      });
  }

  filmsLoading() {
    this.setState({ filmsLoaded: false });
  }

  peopleLoading() {
    this.setState({ peopleLoaded: false });
  }

  toggleFilmsLoaded() {
    this.setState({ filmsLoaded: true });
  }

  togglePeopleLoaded() {
    this.setState({ peopleLoaded: true });
  }

  showFilms() {
    return (
      <main>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli logo" />
        <br />
        <button onClick={() => this.filmsLoading()}>Hide Films</button>
        <button onClick={() => this.peopleLoading()}>Hide People</button>

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

  showPeople() {
    return (
      <main>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli logo" />
        <br />
        <button onClick={() => this.filmsLoading()}>Hide Films</button>
        <button onClick={() => this.peopleLoading()}>Hide People</button>

        <ul>
          {this.state.people.map(person => {
            return (
              <li key={person.id}>
                <div className="col-md-7 m-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{person.name}</h5>
                      <ul>
                        <li>Age: {person.age}</li>
                        <li>Gender: {person.gender}</li>
                        <li>
                          <a href={person.url} target="_blank" />
                        </li>
                      </ul>
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

  noLists() {
    return (
      <div>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli logo" />
        <br />
        <button onClick={() => this.toggleFilmsLoaded()}>Load Films </button>
        <button onClick={() => this.togglePeopleLoaded()}>Hide People</button>
      </div>
    );
  }

  render() {
    if (this.state.filmsLoaded) {
      return (
          <div>{this.showFilms()}</div>
      );
    } else if (this.state.peopleLoaded) {
      // <div>{this.showPeople()}</div>
      console.log('test');
    } else {
      return (
        <div>{this.noLists()}</div>
      );
    }

  }

}

export default App;



