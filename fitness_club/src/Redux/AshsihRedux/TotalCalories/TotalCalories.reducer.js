import { TOTAL_CALORIES_ADD, TOTAL_CALORIES_SUB } from "./TotalCalories.type";

const initialState = {
    totalCaloriesCount: 0
}

export const totalCaloriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOTAL_CALORIES_ADD: {
            return {
                ...state,
                totalCaloriesCount: state.totalCaloriesCount + Number(payload)
            };
        }
        case TOTAL_CALORIES_SUB: {
            return {
                ...state,
                totalCaloriesCount: state.totalCaloriesCount - Number(payload)
            };
        }
        default: {
            return state
        }
    }
}