import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  projectTimeSaveRequest: ['data'],
  projectTimeSaveSuccess: null,
  projectTimeSaveFailure: ['error'],
});

export const ProjectTimeTypes = Types;
export const ProjectTimeActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
});

// Reducer Functions

const projectTimeSaveRequest = state => ({
  ...state,
  loading: true,
  error: null,
});

const projectTimeSaveSuccess = state => ({
  ...state,
  loading: false,
  error: null,
});

const projectTimeSaveFailure = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

// Reducer

export const ProjectTimeReducer = createReducer(INITIAL_STATE, {
  [Types.PROJECT_TIME_SAVE_REQUEST]: projectTimeSaveRequest,
  [Types.PROJECT_TIME_SAVE_SUCCESS]: projectTimeSaveSuccess,
  [Types.PROJECT_TIME_SAVE_FAILURE]: projectTimeSaveFailure,
});
