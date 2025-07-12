import {
  CHANGE_PARTICIPANT_ID,
  CHANGE_TASKORDER,
  CHANGE_VIDEO,
  CHANGE_TASK,
  CHANGE_QSET,
  CHANGE_SCORE,
  CHANGE_IP,
} from './types';

export const handleParticipantIDChange = (payload) => ({
  type: CHANGE_PARTICIPANT_ID,
  payload,
});

export const handleTaskOrderChange = (payload) => ({
  type: CHANGE_TASKORDER,
  payload,
});

export const handleVideoChange = (payload) => ({
  type: CHANGE_VIDEO,
  payload,
});

export const handleTaskChange = (payload) => ({
  type: CHANGE_TASK,
  payload,
});

export const handleQSetChange = (payload) => ({
  type: CHANGE_QSET,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handleIPChange = (payload) => ({
  type: CHANGE_IP,
  payload,
});
