/* PatientReports component script */
import { defineComponent, ref } from 'vue';
import DataTable from '../data-table.vue';
import SearchBox from '../SearchBox/SearchBox.vue';
import ModalDialog from '../ModalDialog/ModalDialog.vue';
import PatientReport from '@/models/PatientReport';
import ReportService from '@/services/report-service';

// Data table headers
const dtHeaders = [
  'Patient',
  'Date',
  'Status',
  'Summary'
];

export default defineComponent({
  components: {
    DataTable,
    SearchBox,
    ModalDialog
  },
  props: ['title'],
  data() {
    // Data fields
    const rptTitle = ref<string>(this.title);
    const modalVisible = ref<boolean>(false);
    const modalTitle = ref<string>('');
    const modalMessage = ref<string>('');
    const searchPatientName = ref<string>('');
    const searchMessage = ref<string>('');
    const rptVisible = ref<boolean>(false);
    const rptAlertTerms = ref<string[]>([]);
    const rptReportItems = ref<PatientReport[]>([]);

    // Public handler for report search action
    const searchReports = (searchValue: string) => {
      searchPatientName.value = searchValue;
      // Get array of alert terms
      getAlertTerms().then((alertTerms: string[]) => {
        rptAlertTerms.value = alertTerms;

        // Get array of reports
        getReports().then((reports: PatientReport[]) => {
          rptReportItems.value.length = 0;
          reports.forEach((rpt) => {
            rptReportItems.value.push(new PatientReport(rpt.id, rpt.patientName, rpt.reportDate, rpt.summary, alertTerms));
          });
          rptVisible.value = rptReportItems.value.length > 0;
        })
      });
    }

    // Private method for async call to report service to get reports
    const getReports = async (): Promise<PatientReport[]> => {
      try { return await ReportService.getReports(searchPatientName.value); }
      catch { searchMessage.value = "Error during search." }
      return [];
    };

    // Private method for async call to report service to get alert terms
    const getAlertTerms = async (): Promise<string[]> => {
      try { return await ReportService.getAlertTerms(); }
      catch { searchMessage.value = "Error during search."; }
      return [];
    };

    // Public method for displaying summary in modal dialog
    const showSummary = (id: string) => {
      const selectedItem: PatientReport | undefined = rptReportItems.value.find((item) => item.id == id) as PatientReport;
      if (selectedItem == undefined) { return; }

      modalTitle.value = `${selectedItem.patientName} (${selectedItem.reportDate})`;
      modalMessage.value = enhanceFlaggedTerms(selectedItem.summary);
      modalVisible.value = true;
    };

    // Public method to close the modal dialog
    const closeModal = () => {
      modalVisible.value = false;
    }

    // Private method to add formatting for words in summary that are included in "alert" terms.
    const enhanceFlaggedTerms = (text: string): string => {
      let enhancedText = text;

      // Format words
      rptAlertTerms.value.forEach(flaggedTerm => {
        const regex = new RegExp(flaggedTerm, 'gi');
        enhancedText = enhancedText.replace(regex, `<span style="color:var(--vt-c-orange)">${flaggedTerm}</span>`);
      });

      // If newly formatted word is at beginning of paragraph, ensure it is capitalized.
      if (enhancedText.startsWith('<span')) {
        const n = enhancedText.indexOf('>') + 1;
        enhancedText = enhancedText.slice(0, n) + enhancedText.charAt(n).toUpperCase() + enhancedText.slice(n + 1)
      }

      return enhancedText;
    }

    return {
      rptTitle,
      modalVisible,
      modalTitle,
      modalMessage,
      searchPatientName,
      searchMessage,
      rptVisible,
      rptReportItems,
      searchReports,
      showSummary,
      closeModal,
      dataTableHeaders: dtHeaders,
      dataTableData: rptReportItems.value
    };
  },
  watch: {
    title(newTitleValue) {
      this.rptTitle = newTitleValue;
    }
  },
  methods: {
    emitTitleUpdate() {
      this.$emit('update-title', this.rptTitle);
    }
  }
});
