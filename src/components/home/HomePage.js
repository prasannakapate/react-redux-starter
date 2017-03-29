import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
      return (
        <div className="jumbotron">
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link to="about" className="btn btn-primary btn-lg">About</Link>
          </li>
          <li role="presentation">
            <Link to="courses" className="btn btn-primary btn-lg">Courses</Link>
          </li>
        </ul>
          <h1>Hello Application</h1>
        </div>
      );
    }
}

export default HomePage;