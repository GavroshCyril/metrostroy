import Axios from "axios"
import { useDispatch } from 'react-redux'

import { update } from '../store/linesSlice'

export const useLines = () => {
    const dispatch = useDispatch();
    const onRefresh = async () => {
        try {
         const result = await Axios.get("http://localhost:3000/line/all")
        console.log("!!!LINES", result.data.data)
        dispatch(update(result.data.data))
        // dispatch(updateLocalisationResouces(result.data.data))
        // const lines = result.data.data
        //     if (length(lines) > 0) {
        //         lines.map((line) => {

        //         })
        //     }
        
        } catch (error) {
          console.error(`Refresh has been failed with error: ${error}`);
        }
      };
  
    return onRefresh;
  };