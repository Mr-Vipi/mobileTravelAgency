import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.88.30:5000/api/agents";

// Register agent
const register = async (agentData) => {
  const response = await axios.post(API_URL, agentData);

  if (response.data) {
    try {
      await AsyncStorage.setItem("agent", JSON.stringify(response.data));
    } catch (e) {
      // saving error
    }
  }
};

const authService = {
  register,
};

export default authService;
