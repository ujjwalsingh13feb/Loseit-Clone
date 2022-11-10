import {
  DELETE_DINNER_ERROR,
  DELETE_DINNER_LOADING,
  DELETE_DINNER_SUCCESS,
  GET_DINNER_ERROR,
  GET_DINNER_LOADING,
  GET_DINNER_SUCCESS,
  POST_DINNER_ERROR,
  POST_DINNER_LOADING,
  POST_DINNER_SUCCESS,
} from "./dinner.types";

const initialState = {
  getdinnerItem: {
    loading: false,
    error: false,
  },
  postdinnerItem: {
    loading: false,
    error: false,
  },
  deletedinnerItem: {
    loading: false,
    error: false,
  },
  dinners: [],
};

export const dinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DINNER_LOADING: {
      return {
        ...state,
        ...state.getdinnerItem,
        loading: true,
        error: false,
      };
    }
    case GET_DINNER_SUCCESS: {
      return {
        ...state,
        dinners: payload,
        ...state.getdinnerItem,
        loading: false,
        error: false,
      };
    }
    case GET_DINNER_ERROR: {
      return {
        ...state,
        ...state.getdinnerItem,
        loading: false,
        error: true,
      };
    }

    case POST_DINNER_LOADING: {
      return {
        ...state,
        ...state.postdinnerItem,
        loading: true,
        error: false,
      };
    }
    case POST_DINNER_SUCCESS: {
      return {
        ...state, // this spread for object(initialState);
        dinners: [...state.dinners, payload],
      };
    }
    case POST_DINNER_ERROR: {
      return {
        ...state,
        ...state.postdinnerItem,
        loading: false,
        error: true,
      };
    }

    case DELETE_DINNER_LOADING: {
      return {
        ...state,
        ...state.deletedinnerItem,
        loading: true,
        error: false,
      };
    }
    case DELETE_DINNER_SUCCESS: {
      const id = payload.id;
      // console.log('id in reducer:', id)
      const DeletedDinner = state.dinners.filter(
        (ele) => ele.id !== id
      );

      return {
        ...state,
        ...state.deletedinnerItem,
        loading: false,
        error: false,
        dinners: DeletedDinner,
      };
    }
    case DELETE_DINNER_ERROR: {
      return {
        ...state,
        ...state.deletedinnerItem,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
