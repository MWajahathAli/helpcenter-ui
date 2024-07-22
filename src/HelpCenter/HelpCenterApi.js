import axios from "axios";
import { baseURL } from "../Common/SharedResources";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(baseURL + "cat/findAll");
    console.log(baseURL + "cat/findAll");
    return response.data;
  } catch (error) {
    console.error("error fetching categories", error);
    return [];
  }
};

export const handleVote = async (id, vote) => {
  try {
    const response = await fetch(
      `${baseURL}questions/${id}/vote?vote=${vote}`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
