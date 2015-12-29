/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return (dispatch) => {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        };
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */

// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  CHANGE_OWNER_NAME,
  CHANGE_PROJECT_NAME,
  SWAP_CHART_ACTIVE,
  HOVER_CHART,
  UNHOVER_CHART,
} from '../constants/AppConstants';

export function asyncChangeProjectName(name) {
  return (dispatch) => {
    // You can do async stuff here!
    // API fetching, Animations,...
    // For more information as to how and why you would do this, check https://github.com/gaearon/redux-thunk
    return dispatch(changeProjectName(name));
  };
}

export function asyncChangeOwnerName(name) {
  return (dispatch) => {
    // You can do async stuff here!
    // API fetching, Animations,...
    // For more information as to how and why you would do this, check https://github.com/gaearon/redux-thunk
    return dispatch(changeOwnerName(name));
  };
}

function changeProjectName(name) {
  return { type: CHANGE_PROJECT_NAME, name };
}

function changeOwnerName(name) {
  return { type: CHANGE_OWNER_NAME, name };
}

export function swapChartActive(id) {
  return { type: SWAP_CHART_ACTIVE, id };
}

export function hoverChart(id) {
  return { type: HOVER_CHART, id };
}

export function unhoverChart(id) {
  return { type: UNHOVER_CHART, id };
}
