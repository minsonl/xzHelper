import *as TYPES from '../constants/counterTypes';

export function addition() {
  return {
    type: TYPES.ADDITION,
  }
}

export function reduction() {
  return {
    type: TYPES.REDUCTION,
  }
}
