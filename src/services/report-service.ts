import axios from 'axios';

import PatientReport from "@/models/PatientReport";

const API_BASE_URL = import.meta.env.VITE_API_ROOT;

const ReportService = {
  async getReports(patientName: string = ''): Promise<PatientReport[]> {
    try {
      const apiRelativePath = (patientName && patientName.trim().length) ? "/patient" : "";
      const apiUrl = `${API_BASE_URL}/PatientReport${apiRelativePath}/${patientName}`;
      const response = await axios.get(apiUrl);
      return response.data;

      /*const alertTerms = await this.getAlertTerms();
      const patientNameMatch = patientName.toLowerCase();

      const reports: PatientReport[] = [
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
            new PatientReport("5", "Julie Battista", new Date("12/18/2024"),
              `Too much glue on a 3x5 index card leads to tachycardia.`,
              alertTerms),
      ];
      return patientName.length
        ? reports.filter(rpt => rpt.patientName.toLowerCase() == patientNameMatch)
        : reports;*/

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return [];
  },

  async getAlertTerms(): Promise<string[]> {
    try {
      const apiUrl = `${API_BASE_URL}/Alert`;
      const response = await axios.get(apiUrl);
      return response.data;

      /*return [
        'tachycardia',
        'arrhythmia'
      ]*/

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return [];
  },
};

export default ReportService;
