const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

/**
 * Encode credentials to Base64 for Basic Authentication
 * This is done on the client side as per requirements (not hardcoded)
 */
const encodeCredentials = (username, password) => {
  return btoa(`${username}:${password}`);
};

/**
 * Fetch patient data from the API
 * Returns only Jessica Taylor's data as per requirements
 */
export const fetchPatientData = async () => {
  try {
    const encodedAuth = encodeCredentials(USERNAME, PASSWORD);

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${encodedAuth}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return only Jessica Taylor's data as specified in requirements
    const jessicaTaylor = data.find(
      (patient) => patient.name === "Jessica Taylor"
    );

    if (!jessicaTaylor) {
      throw new Error("Jessica Taylor not found in patient data");
    }

    return jessicaTaylor;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
};
