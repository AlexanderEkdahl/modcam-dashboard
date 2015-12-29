/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function HomePage(props) {
	const dispatch = props.dispatch;
	const { projectName, ownerName } = props.data;
	return (
		<div>
			<h1>Hello World!</h1>
      <label className="home__label">Change to your project name:
				<input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeProjectName(evt.target.value)); }} defaultValue="React.js Boilerplate" value={projectName} />
      </label>
      <label className="home__label">Change to your name:
        <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="mxstbr" value={ownerName} />
      </label>
		</div>
	);
}

function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
