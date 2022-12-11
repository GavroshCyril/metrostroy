import Axios from "axios"
import { useDispatch } from 'react-redux'

import { update } from '../store/linesSlice'

export const useLines = () => {
    const dispatch = useDispatch();
    const onRefresh = async () => {
        try {
          const result = await Axios.get("http://localhost:3000/line/all")
          dispatch(update(result.data.data))
        
        } catch (error) {
          console.error(`Refresh has been failed with error: ${error}`);
        }
      };
  
    return onRefresh;
  };