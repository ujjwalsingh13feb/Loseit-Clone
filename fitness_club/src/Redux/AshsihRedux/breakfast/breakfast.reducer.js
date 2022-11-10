import {
  DELETE_BREAKFAST_ERROR,
  DELETE_BREAKFAST_LOADING,
  DELETE_BREAKFAST_SUCCESS,
  GET_BREAKFAST_ERROR,
  GET_BREAKFAST_LOADING,
  GET_BREAKFAST_SUCCESS,
  POST_BREAKFAST_ERROR,
  POST_BREAKFAST_LOADING,
  POST_BREAKFAST_SUCCESS,
} from "./breakfast.types";

const initialState = {
  getbreakfastItem: {
    loading: false,
    error: false,
  },
  postbreakfastsItem: {
    loading: false,
    error: false,
  },
  deletebreakfastsItem: {
    loading: false,
    error: false,
  },
  breakfasts: [],
};

export const breakfastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BREAKFAST_LOADING: {
      return {
        ...state,
        ...state.getbreakfastItem,
        loading: true,
        error: false,
      };
    }
    case GET_BREAKFAST_SUCCESS: {
      return {
        ...state,
        breakfasts: payload,
        ...state.getbreakfastItem,
        loading: false,
        error: false,
      };
    }
    case GET_BREAKFAST_ERROR: {
      return {
        ...state,
        ...state.getbreakfastItem,
        loading: false,
        error: true,
      };
    }

    case POST_BREAKFAST_LOADING: {
      return {
        ...state,
        ...state.postbreakfastsItem,
        loading: true,
        error: false,
      };
    }
    case POST_BREAKFAST_SUCCESS: {
      return {
        ...state, // this spread for object(initialState);
        breakfasts: [...state.breakfasts, payload],
      };
    }
    case POST_BREAKFAST_ERROR: {
      return {
        ...state,
        ...state.postbreakfastsItem,
        loading: false,
        error: true,
      };
    }

    case DELETE_BREAKFAST_LOADING: {
      return {
        ...state,
        ...state.deletebreakfastsItem,
        loading: true,
        error: false,
      };
    }
    case DELETE_BREAKFAST_SUCCESS: {
      const id = payload.id;
      console.log('id in reducer:', id)
      const DeletedBreakFastArr = state.breakfasts.filter(
        (ele) => ele.id !== id
      );

      return {
        ...state,
        ...state.deletebreakfastsItem,
        loading: false,
        error: false,
        breakfasts: DeletedBreakFastArr,
      };
    }
    case DELETE_BREAKFAST_ERROR: {
      return {
        ...state,
        ...state.deletebreakfastsItem,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
