import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

const options = {
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      // const newTopic = {
      //   ...action.payload,
      //   quizIds: [],
      // };

      // return {
      //   ...state,
      //   topics: {
      //     ...state.topics,
      //     [action.payload.id]: newTopic,
      //   },
      // };
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: [],
      };
    },
  },
  extraReducers: {
      "quizzes/addQuiz": (state, action) => {
        const { topicId, id } = action.payload;
        state.topics[topicId].quizIds.push(id);
      },
    },
};

export const selectTopics = (state) => {
  return state.topics.topics;
};

export const topicsSlice = createSlice(options);
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;
