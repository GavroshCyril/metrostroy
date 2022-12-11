import Axios from "axios"

export const useRefresh = () => {
    const config = {
        token: localStorage.getItem("refreshToken")
      };

    const onRefresh = async () => {
        try {
         const result = await Axios.post("http://localhost:3000/user/token", config)
         localStorage.setItem("token", result.data.accessToken)
         
        } catch (error) {
          console.error(`Refresh has been failed with error: ${error}`);
        }
      };
  
    return onRefresh;
  };