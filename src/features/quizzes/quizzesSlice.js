import { createSlice } from "@reduxjs/toolkit";

const initialState = { quizzes: {} };

const options = {
  name: "quizzes",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      // const newQuiz = {
      //   ...action.payload,
      //   cardIds: [],
      // };
      // return {
      //   ...state,
      //   quizzes: { ...state.quizzes, [action.payload.id]: newQuiz },
      // };
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    },
  },
};

// export const associatedNewQuizToTopic = (newQuiz) => {
//   const { topicId, quizId } = newQuiz;
//   return (dispatch) => {
//     dispatch(addQuiz(newQuiz));
//     dispatch(
//       addQuizIdToTopics({
//         topicId: topicId,
//         quizId: quizId,
//       })
//     );
//   };
// };

export const selectQuizzes = (state) => {
  return state.quizzes.quizzes;
};

const quizzesSlice = createSlice(options);

export const quizzesReducer = quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;
