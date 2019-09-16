import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  timerStart: null,
  timerStop: null,
  timerReset: null,
  timerAddProject: ['projectId'],
  timerRemoveProject: ['projectId'],
});

export const TimerTypes = Types;
export const TimerActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  initialTime: null,
  endTime: null,
  projectsId: [],
  isPlaying: false,
});

// Reducer Functions

const timerStart = state => ({
  ...state,
  isPlaying: true,
  initialTime: Date.now(),
});

const timerStop = state => ({
  ...state,
  isPlaying: false,
  endTime: Date.now(),
});

const timerAddProject = (state, { projectId }) => ({
  ...state,
  projectsId: [...state.projectsId, projectId],
});

const timerRemoveProject = (state, { projectId }) => ({
  ...state,
  projectsId: state.projectsId.filter(item => item !== projectId),
});

const timerReset = () => INITIAL_STATE;

// Reducer

export const TimerReducer = createReducer(INITIAL_STATE, {
  [Types.TIMER_START]: timerStart,
  [Types.TIMER_STOP]: timerStop,
  [Types.TIMER_RESET]: timerReset,
  [Types.TIMER_ADD_PROJECT]: timerAddProject,
  [Types.TIMER_REMOVE_PROJECT]: timerRemoveProject,
});
