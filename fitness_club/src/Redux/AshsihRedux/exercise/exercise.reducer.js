import {
  DELETE_EXERCISE_ERROR,
  DELETE_EXERCISE_LOADING,
  DELETE_EXERCISE_SUCCESS,
  GET_EXERCISE_ERROR,
  GET_EXERCISE_LOADING,
  GET_EXERCISE_SUCCESS,
  POST_EXERCISE_ERROR,
  POST_EXERCISE_LOADING,
  POST_EXERCISE_SUCCESS,
} from "./exercise.types";

const initialState = {
  getexerciseItem: {
    loading: false,
    error: false,
  },
  postexerciseItem: {
    loading: false,
    error: false,
  },
  deleteexerciseItem: {
    loading: false,
    error: false,
  },
  exercises: [],
};
console.log(initialState.exercises);
export const exerciseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXERCISE_LOADING: {
      return {
        ...state,
        ...state.getexerciseItem,
        loading: true,
        error: false,
      };
    }
    case GET_EXERCISE_SUCCESS: {
      return {
        ...state,
        exercises: payload,
        ...state.getexerciseItem,
        loading: false,
        error: false,
      };
    }
    case GET_EXERCISE_ERROR: {
      return {
        ...state,
        ...state.getexerciseItem,
        loading: false,
        error: true,
      };
    }

    case POST_EXERCISE_LOADING: {
      return {
        ...state,
        ...state.postexerciseItem,
        loading: true,
        error: false,
      };
    }
    case POST_EXERCISE_SUCCESS: {
      return {
        ...state, // this spread for object(initialState);
        exercises: [...state.exercises, payload],
      };
    }
    case POST_EXERCISE_ERROR: {
      return {
        ...state,
        ...state.postexerciseItem,
        loading: false,
        error: true,
      };
    }

    case DELETE_EXERCISE_LOADING: {
      return {
        ...state,
        ...state.deleteexerciseItem,
        loading: true,
        error: false,
      };
    }
    case DELETE_EXERCISE_SUCCESS: {
      const id = payload.id;
      // console.log('id in reducer:', id)
      const DeletedExerciseArr = state.exercises.filter(
        (ele) => ele.id !== id
      );

      return {
        ...state,
        ...state.deleteexerciseItem,
        loading: false,
        error: false,
        exercises: DeletedExerciseArr,
      };
    }
    case DELETE_EXERCISE_ERROR: {
      return {
        ...state,
        ...state.deleteexerciseItem,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
