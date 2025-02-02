import PatientReport from "@/models/PatientReport";
import DataTable from "../data-table.vue";
import ModalDialog from "../ModalDialog/ModalDialog.vue";
import ReportService from "@/services/report-service";
import { onMounted, ref } from "vue";

const alertTerms: string[] = [
  'tachycardia',
  'arrhythmia'
];

const reportItems = ref<PatientReport[]>([]);
/*const reportItems: PatientReport[] = [
  new PatientReport("1", "Tom Battista", new Date("12/26/2024"),
    `Summary text 1...`,
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
];*/

export default {
  components: {
    DataTable,
    ModalDialog,
  },
  setup() {
    const isModalVisible = ref<boolean>(false);
    const modalTitle = ref<string>('');
    const modalMessage = ref<string>('');

    const getReports = async () => {
      try {
        reportItems.value = await ReportService.getReports();
      } catch (error) {
        // Handle error appropriately
        console.error("Failed to fetch data", error)
      }
    };

    const showSummary = (id: string) => {
      const selectedItem: PatientReport | undefined = reportItems.value.find((item) => item.id == id) as PatientReport;
      if (selectedItem == undefined) { return; }

      modalTitle.value = `${selectedItem.patientName} (${selectedItem.reportDate})`;
      modalMessage.value = enhanceFlaggedTerms(selectedItem.summary);
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    }

    const enhanceFlaggedTerms = (text: string): string => {
      let enhancedText = text;
      alertTerms.forEach(flaggedTerm => {
        const regex = new RegExp(flaggedTerm, 'gi');
        enhancedText = enhancedText.replace(regex, `<span style="color:var(--vt-c-orange)">${flaggedTerm}</span>`);
      });
      if (enhancedText.startsWith('<span')) {
        const n = enhancedText.indexOf('>') + 1;
        enhancedText = enhancedText.slice(0, n) + enhancedText.charAt(n).toUpperCase() + enhancedText.slice(n + 1)
      }
      return enhancedText;
    }

    onMounted(() => {
      getReports();
    });

    return {
      isModalVisible,
      modalTitle,
      modalMessage,
      reportItems,
      getReports,
      showSummary,
      closeModal
    }
  },
  data: () => ({
    headers: [
      'Patient',
      'Date',
      'Alert',
      'Summary'
    ],
    data: reportItems,
  }),
}
