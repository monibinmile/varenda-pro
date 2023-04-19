import { createSlice } from "@reduxjs/toolkit";
import questions from '../Component/json/json';
const initialState = {
  currentQuestionIndex: 0,
  questions
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state) => {
        if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex++;
          }
    }
  }
});

export const { nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;
