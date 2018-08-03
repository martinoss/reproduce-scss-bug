import { Reducer } from 'redux';
import { createAction, handleActions } from 'redux-actions';

export const sampleAction = createAction('SAMPLE/sample_action', () => ({}));

export interface ISampleState {
  sampleData: {} | null | undefined,
}

const initialState: ISampleState = {
  sampleData: null,
};

export const sampleReducer: Reducer<ISampleState> = handleActions({
  [sampleAction.toString()]: (state: ISampleState, { payload }) => (
    {
      ...state,
      sampleData: {
        ...payload
      }
    }
  ),

}, initialState);

export default sampleReducer;