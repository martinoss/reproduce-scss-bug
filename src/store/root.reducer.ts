import { combineReducers } from 'redux';
import { reducer as formReducer, FormState} from 'redux-form'
import { sampleReducer, ISampleState } from './sample/sample.module';

export interface IRootState {
  form: FormState,
  sample: ISampleState
}

const rootReducer = combineReducers({
  form: formReducer,
  sample: sampleReducer
});

export default rootReducer;
