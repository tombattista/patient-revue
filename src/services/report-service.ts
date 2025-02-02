//import axios from 'axios';

import PatientReport from "@/models/PatientReport";

//const API_BASE_URL = 'https://your-api-endpoint.com';

const ReportService = {
  async getReports() {
    try {
      //const response = await axios.get(`${API_BASE_URL}/data`);
      //return response.data;

      const alertTerms = await this.getAlertTerms();

      return [
        new PatientReport("1", "Tom Battista", new Date("12/26/2024"),
          `Summary text for 1...`,
          alertTerms),
        new PatientReport("2", "Tom Battista", new Date("12/01/2024"),
          `Tachycardia is a medical condition characterized by an abnormally fast heart rate. It can be caused by various factors,
          including stress, anxiety, or an underlying health condition. Symptoms may include dizziness, shortness of breath, and
          fatigue. Treatment typically involves lifestyle changes, medications, or medical interventions to correct the heart rate.`,
          alertTerms),
        new PatientReport("3", "Tom Battista", new Date("11/18/2024"),
          `Arrhythmia refers to an irregular heartbeat, which can manifest as a variation in the rhythm or rate of the heart's contractions.`,
          alertTerms),
          new PatientReport("4", "Tom Battista", new Date("10/18/2024"),
            `Wherein the heart flutters eratically, therein shall arrhythmia be found.`,
            alertTerms),
      ]

    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  async getAlertTerms() {
    try {
      //const response = await axios.get(`${API_BASE_URL}/data`);
      //return response.data;

      return [
        'tachycardia',
        'arrhythmia'
      ]

    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  /*async postData(payload) {
      try {
        const response = await axios.post(`${API_BASE_URL}/data`, payload);
        return response.data;
      } catch (error) {
        console.error("Error posting data:", error);
        throw error;
      }
  },*/
  // Add more API functions as needed (e.g., put, delete)
};

export default ReportService;
