import { combineReducers } from "redux";
import dictionaryReducer from "./dictionaryReducer";
import optionsReducer from "./optionsReducer";
import profileReducer from "./profileReducer";
import resultReducer from "./resultReducer";
import storyReducer from "./storyReducer";
import tests from "./testsReducer";

const rootReducer = combineReducers({
  tests: tests,
  options: optionsReducer,
  story: storyReducer,
  result: resultReducer,
  dictionary: dictionaryReducer,
  profile: profileReducer,
});

export default rootReducer;