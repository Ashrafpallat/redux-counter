import { DECREMENT, INCREMENT, RESET } from "./counterTypes";

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}