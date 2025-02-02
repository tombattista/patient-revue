// PatientReport model
//  - Contains patient id/name and report date and summary.
//  - "hasAlert" property indicates whether or not the summary contains flagged terms.
export default class PatientReport {
  private _id: string;
  private _patientName: string;
  private _reportDate: Date;
  private _summary: string = '';
  private _alertFlagged: boolean = false;

  constructor(id: string, patientName: string, reportDate: Date, summary: string = '', alertTerms: string[] = []) {
    this._id = id;
    this._patientName = patientName;
    this._reportDate = reportDate;
    if (summary.length) {
      this.setSummary(summary, alertTerms);
    }
  }

  // Get properties
  public get id(): string { return this._id; }
  public get patientName(): string { return this._patientName; }
  public get reportDate(): string { return this._reportDate.toLocaleString(); }
  public get summary(): string { return this._summary; }
  public get hasAlert(): boolean { return this._alertFlagged; }

  public get json() {
    return {
      id: this.id,
      patientName: this.patientName,
      reportDate: this.reportDate,
      summary: this.summary
    };
  }

  // Set properties
  public setSummary(reportSummary: string, alertTerms: string[]) {
    this._summary = reportSummary;
    this._alertFlagged = alertTerms.some(s => this._summary.includes(s));
  }
}
