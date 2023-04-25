import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import 'react-awesome-button/dist/styles.css';

export default class ButtonHome extends Component {
    render() {
        return (
          <Link to="/individualproject">
           <AwesomeButton
              cssModule={AwesomeButtonStyles}
              type="primary">
              Button
            </AwesomeButton></Link>
          );
    }

}