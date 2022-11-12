import { TOTAL_CALORIES_FOOD, TOTAL_CALORIES_EXERCISE, TOTAL_CALORIES_DIFFERENCE, TOTAL_CALORIES_DAILY_BUDGET } from "./TotalCalories.type";

const initialState = {
    totalCaloriesFoods: 0,
    totalCaloriesExercises: 0,
    totalCaloriesDifference: 0,
    totalCaloriesDailyBudget: 0,
};

export const totalCaloriesReducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case TOTAL_CALORIES_FOOD: {
            return {
                ...state,
                totalCaloriesFoods: payload,
            };
        }
        case TOTAL_CALORIES_EXERCISE: {
            return {
                ...state,
                totalCaloriesExercises: payload,
            };
        }
        case TOTAL_CALORIES_DIFFERENCE: {
            return {
                ...state,
                totalCaloriesDifference: payload,
            };
        }
        case TOTAL_CALORIES_DAILY_BUDGET: {
            return {
                ...state,
                totalCaloriesDailyBudget: payload,
            };
        }
        default: {
            return state;
        }
    }
};
