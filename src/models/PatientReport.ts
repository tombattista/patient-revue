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
      this._summary = summary;
      this._alertFlagged = alertTerms.some(s => this._summary.toLocaleLowerCase().includes(s.toLowerCase()));
    }
  }

  // Get properties
  public get id(): string { return this._id; }
  public get patientName(): string { return this._patientName; }
  public get reportDate(): Date { return this._reportDate; }
  public get reportDateString(): string { return this._reportDate.toLocaleString(); }
  public get summary(): string { return this._summary; }
  public get hasAlert(): boolean { return this._alertFlagged; }
}
