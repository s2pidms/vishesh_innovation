import {Injectable} from "@angular/core";
import * as moment from "moment";
import {ToastService} from "./toast.service";
import {Router} from "@angular/router";
const timeZone = "Asia/Kolkata";
@Injectable({
    providedIn: "root"
})
export class UtilityService {
    constructor(private router: Router, private toastService: ToastService) {}
    getCurrentFiscalYearDates() {
        const currentDate = moment();
        const fromDate = moment().month(3).date(1);
        if (currentDate.isBefore(fromDate)) {
            fromDate.subtract(1, "year");
        }
        const toDate = fromDate.clone().add(1, "year").subtract(1, "day");
        return {
            fromDate,
            toDate
        };
        // return {
        //   fromDate: moment().month(3).startOf('month').format('YYYY-MM-DD'),
        //   toDate: moment()
        //     .month(2)
        //     .endOf('month')
        //     .add('years', 1)
        //     .format('YYYY-MM-DD'),
        // };
    }

    getCurrentWeekDates() {
        return {
            fromDate: moment().subtract(7, "days").startOf("day").format("YYYY-MM-DD"),
            toDate: moment().endOf("day").format("YYYY-MM-DD")
        };
    }
    getCurrentMonthDates() {
        return {
            fromDate: moment().startOf("month").format("YYYY-MM-DD"),
            toDate: moment().format("YYYY-MM-DD")
        };
    }
    getAprilMonthDates() {
        return {
            fromDate: moment().startOf("month").format("YYYY-MM-DD"),
            toDate: moment().endOf("month").format("YYYY-MM-DD")
        };
    }

    getFormatDate(format: any, str: any) {
        return moment(format).format(str);
    }

    getAddFormat(formatDate: any, addDate: any) {
        return moment(formatDate).add(addDate, "months").format("YYYY-MM-DD");
    }
    setFutureDateInDays(formatDate: any, addDate: any) {
        return moment(formatDate).add(addDate, "days").format("YYYY-MM-DD");
    }

    getTodayDate(str: any) {
        return moment().format(str);
    }

    monthYearCal(date: any, add: any) {
        return moment(date + "-1").add(add - 1, "M");
    }

    getIncrementedDate(date: any, num: any, str: any) {
        return moment(date).add(num, str);
    }
    getDiffDate(endDate: any, startDate: any, str: any) {
        return moment(endDate).diff(moment(startDate), str) + 1;
    }

    supplierLeadTimeInDays(timeInDays: any) {
        return moment().add(timeInDays, "days").format("YYYY-MM-DD");
    }

    accessDenied(action: string) {
        if (!!!action) {
            this.toastService.warning("You do not have access", "Access denied");
            this.router.navigate(["./default/supports/access_denied"]);
        }
    }

    navigateToForm(data: any) {
        if (
            (["Awaiting Approval"].includes(data.status) && ["revision"].includes(data.action)) ||
            (["Approved", "Rejected", "Revision", "Cancelled"].includes(data.status) &&
                ["edit", "approve", "cancel", "reject", "rejection", "approval"].includes(data.action)) ||
            (["Adjusted"].includes(data.status) && ["edit"].includes(data.action))
        ) {
            return null;
        } else {
            this.router.navigate([data.path], {
                relativeTo: data.activatedRoute,
                queryParams: {id: data.id, action: data.action}
            });
            return;
        }
    }
    setConversion(item: any) {
        if (item.UOM == item.secondaryUnit) {
            if (item.primaryToSecondaryConversion) {
                item.quantity = +item.quantity * +item.primaryToSecondaryConversion;
            }
            if (item.secondaryToPrimaryConversion) {
                item.quantity = +item.quantity / +item.secondaryToPrimaryConversion;
            }
        } else {
            if (item.primaryToSecondaryConversion) {
                item.quantity = +item.quantity / +item.primaryToSecondaryConversion;
            }
            if (item.secondaryToPrimaryConversion) {
                item.quantity = +item.quantity * +item.secondaryToPrimaryConversion;
            }
        }

        return item.quantity;
    }
}
