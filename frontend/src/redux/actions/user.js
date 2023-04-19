import axios from "axios";
import { server } from "../../server";

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoaduserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "LoadUserFail",
      payload: err.response.data.message,
    });
  }
};
