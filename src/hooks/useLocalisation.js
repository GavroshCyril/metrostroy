import Axios from "axios"
import { useDispatch } from 'react-redux'


import { updateLocalisationResouces } from '../store/localizationSlice'

export const useLocalisation = () => {
    const dispatch = useDispatch();
    const onRefresh = async () => {
        try {
          const result = await Axios.get("http://localhost:3000/localization/all")
          dispatch(updateLocalisationResouces(result.data.data))

        } catch (error) {
          console.error(`Refresh has been failed with error: ${error}`);
        }
      };
  
    return onRefresh;
  };