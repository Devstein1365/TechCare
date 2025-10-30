// API endpoint and credentials provided by Coalition Technologies
const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

// Helper function to encode credentials for Basic Auth
// Using btoa() to convert username:password to base64
const encodeCredentials = (username, password) => {
  return btoa(`${username}:${password}`);
};

// Main function to fetch patient data from the API
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

    // We only need Jessica Taylor's information for this dashboard
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
