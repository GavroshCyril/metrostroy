import Axios from "axios"
import { useDispatch } from 'react-redux'

import { update } from '../store/reviewsSlice'

export const useReviews = () => {
    const dispatch = useDispatch();
    const onRefresh = async () => {
        try {
            const result = await Axios.get("http://localhost:3000/reviews")
            console.log("result", result)
            dispatch(update(result.data))

        } catch (error) {
            console.error(`Refresh has been failed with error: ${error}`);
        }
    };

    return onRefresh;
};