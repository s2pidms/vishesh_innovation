export interface RaiseTicket {
    _id: string;
    issueNumber: string;
    ticketType: string;
    priority: string;
    severity: string;
    issueStatus: string;
    issueTitle: string;
    subModuleName: string;
    issueDescription: string;
    issueDate: string;
    Url?: string;
    issueResolution?: string;
}
