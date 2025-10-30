const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";


const encodeCredentials = (username, password) => {
  return btoa(`${username}:${password}`);
};


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
