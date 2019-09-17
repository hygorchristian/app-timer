import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  timerStart: null,
  timerStop: null,
  timerSetInitialTime: ['start'],
  timerAddProject: ['projectId'],
  timerRemoveProject: ['projectId'],
});

export const TimerTypes = Types;
export const TimerActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  initialTime: null,
  projectsId: [],
  isPlaying: false,
});

// Reducer Functions

const timerStart = state => ({
  ...state,
  isPlaying: true,
});

const timerStop = state => ({
  ...state,
  isPlaying: false,
});

const timerAddProject = (state, { projectId }) => ({
  ...state,
  projectsId: [...state.projectsId, projectId],
});

const timerRemoveProject = (state, { projectId }) => ({
  ...state,
  projectsId: state.projectsId.filter(item => item !== projectId),
});

const timerSetInitialTime = (state, { start }) => ({
  ...state,
  initialTime: start,
});

// Reducer

export const TimerReducer = createReducer(INITIAL_STATE, {
  [Types.TIMER_START]: timerStart,
  [Types.TIMER_STOP]: timerStop,
  [Types.TIMER_ADD_PROJECT]: timerAddProject,
  [Types.TIMER_REMOVE_PROJECT]: timerRemoveProject,
  [Types.TIMER_SET_INITIAL_TIME]: timerSetInitialTime,
});
