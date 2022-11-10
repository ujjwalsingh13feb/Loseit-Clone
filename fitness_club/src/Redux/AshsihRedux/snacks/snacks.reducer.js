import {
  DELETE_SNACKS_ERROR,
  DELETE_SNACKS_LOADING,
  DELETE_SNACKS_SUCCESS,
  GET_SNACKS_ERROR,
  GET_SNACKS_LOADING,
  GET_SNACKS_SUCCESS,
  POST_SNACKS_ERROR,
  POST_SNACKS_LOADING,
  POST_SNACKS_SUCCESS,
} from "./snacks.types";

const initialState = {
  getsnacksItem: {
    loading: false,
    error: false,
  },
  postsnacksItem: {
    loading: false,
    error: false,
  },
  deletesnacksItem: {
    loading: false,
    error: false,
  },
  snacks: [],
};

export const snacksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SNACKS_LOADING: {
      return {
        ...state,
        ...state.getsnacksItem,
        loading: true,
        error: false,
      };
    }
    case GET_SNACKS_SUCCESS: {
      return {
        ...state,
        snacks: payload,
        ...state.getsnacksItem,
        loading: false,
        error: false,
      };
    }
    case GET_SNACKS_ERROR: {
      return {
        ...state,
        ...state.getsnacksItem,
        loading: false,
        error: true,
      };
    }

    case POST_SNACKS_LOADING: {
      return {
        ...state,
        ...state.postsnacksItem,
        loading: true,
        error: false,
      };
    }
    case POST_SNACKS_SUCCESS: {
      return {
        ...state, // this spread for object(initialState);
        snacks: [...state.snacks, payload],
      };
    }
    case POST_SNACKS_ERROR: {
      return {
        ...state,
        ...state.postsnacksItem,
        loading: false,
        error: true,
      };
    }

    case DELETE_SNACKS_LOADING: {
      return {
        ...state,
        ...state.deletesnacksItem,
        loading: true,
        error: false,
      };
    }
    case DELETE_SNACKS_SUCCESS: {
      const id = payload.id;
      // console.log('id in reducer:', id)
      const DeletedSnacksArr = state.snacks.filter(
        (ele) => ele.id !== id
      );

      return {
        ...state,
        ...state.deletesnacksItem,
        loading: false,
        error: false,
        snacks: DeletedSnacksArr,
      };
    }
    case DELETE_SNACKS_ERROR: {
      return {
        ...state,
        ...state.deletesnacksItem,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
