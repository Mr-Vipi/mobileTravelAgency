import axios from "axios";

const API_URL = "http://192.168.1.43:5000/api/agents";

// Register agent
const register = async (agentData) => {
  const response = await axios.post(API_URL, agentData);

  // if (response.data) {
  //   await AsyncStorage.setItem("agent", JSON.stringify(response.data));
  // }

  return response.data;
};

const authService = {
  register,
};

export default authService;
