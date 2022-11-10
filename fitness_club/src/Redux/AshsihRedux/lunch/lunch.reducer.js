import { DELETE_LUNCH_ERROR, DELETE_LUNCH_LOADING, DELETE_LUNCH_SUCCESS, GET_LUNCH_ERROR, GET_LUNCH_LOADING, GET_LUNCH_SUCCESS, POST_LUNCH_ERROR, POST_LUNCH_LOADING, POST_LUNCH_SUCCESS } from "./lunch.types";


const initialState = {
  getlunchItem: {
    loading: false,
    error: false,
  },
  postlunchItem: {
    loading: false,
    error: false,
  },
  deletelunchItem: {
    loading: false,
    error: false,
  },
  lunchs: [],
};

export const lunchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LUNCH_LOADING: {
      return {
        ...state,
        ...state.getlunchItem,
        loading: true,
        error: false,
      };
    }
    case GET_LUNCH_SUCCESS: {
      return {
        ...state,
        lunchs: payload,
        ...state.getlunchItem,
        loading: false,
        error: false,
      };
    }
    case GET_LUNCH_ERROR: {
      return {
        ...state,
        ...state.getlunchItem,
        loading: false,
        error: true,
      };
    }

    case POST_LUNCH_LOADING: {
      return {
        ...state,
        ...state.postlunchItem,
        loading: true,
        error: false,
      };
    }
    case POST_LUNCH_SUCCESS: {
      return {
        ...state, // this spread for object(initialState);
        lunchs: [...state.lunchs, payload],
      };
    }
    case POST_LUNCH_ERROR: {
      return {
        ...state,
        ...state.postlunchItem,
        loading: false,
        error: true,
      };
    }

    case DELETE_LUNCH_LOADING: {
      return {
        ...state,
        ...state.deletelunchItem,
        loading: true,
        error: false,
      };
    }
    case DELETE_LUNCH_SUCCESS: {
      const id = payload.id;
      // console.log('id in reducer:', id)
      const DeletedLunch = state.lunchs.filter(
        (ele) => ele.id !== id
      );

      return {
        ...state,
        ...state.deletelunchItem,
        loading: false,
        error: false,
        lunchs: DeletedLunch,
      };
    }
    case DELETE_LUNCH_ERROR: {
      return {
        ...state,
        ...state.deletelunchItem,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
