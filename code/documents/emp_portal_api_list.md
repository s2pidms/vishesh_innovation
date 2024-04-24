1. Leave Application => getAllMasterData
2. Outdoor Duty Application => getAllMasterData
3. Employee => getAllMasterData

<!-- ESMP URL -->

<!-- login Page -->

1. Request URL: http://localhost:2023/api/v1/settings/company/getCompanyURLs
   Request Method: GET

<!-- login  -->

2. Request URL: http://localhost:2023/api/v1/settings/user/login
   Request Method: POST

<!-- getMastersDashboardDataForEmployeeId -->

3. Request URL: http://localhost:2023/api/v1/dashboard/getMastersDashboardDataForEmployeeId/6396c765c9d4e4513dc4e9ac
   Request Method: GET

<!-- employee master Data -->

4.  <!-- masterData -->

    a). Request URL: http://localhost:2023/api/v1/hr/employee/getAllMasterData
    Request Method: GET

       <!-- getById -->

    b). Request URL: http://localhost:2023/api/v1/hr/employee/getById/6396c765c9d4e4513dc4e9ac
    Request Method: GET

<!-- Leave Application  -->

5.  <!-- getAll  -->

        a). Request URL: http://localhost:2023/api/v1/hr/leavesApplication/getAll?employeeId=6396c765c9d4e4513dc4e9ac
        Request Method: GET

      <!-- masterData -->

        b). Request URL: http://localhost:2023/api/v1/hr/leavesApplication/getAllMasterData
        Request Method: GET

      <!-- getPaidLeaveByEmpId  -->

        c). Request URL: http://localhost:2023/api/v1/hr/leavesApplication/getPaidLeaveByEmpId/6396c765c9d4e4513dc4e9ac
        Request Method: GET

      <!-- create -->

        d). Request URL: http://localhost:2023/api/v1/hr/leavesApplication/create
            Request Method: POST

  <!-- OD Application -->

6.  <!-- getAll -->

           a). Request URL: http://localhost:2023/api/v1/hr/onDutyApplication/getAll?employeeId=6396c765c9d4e4513dc4e9ac
           Request Method: GET

    <!-- getAllMasterData -->

           b). Request URL: http://localhost:2023/api/v1/hr/onDutyApplication/getAllMasterData
           Request Method: GET

    <!-- create -->

           c). Request URL: http://localhost:2023/api/v1/hr/onDutyApplication/create
                Request Method: POST

<!-- Employee Attendance -->

7.  Request URL: http://localhost:2023/api/v1/hr/employeeAttendance/getAllReports?page=1&employeeId=6396c765c9d4e4513dc4e9ac&fromDate=&toDate=&attendanceForMonthYear=
    Request Method: GET

<!-- Salary Advance Summary -->

8. Request URL: http://localhost:2023/api/v1/hr/advanceSalaryRequest/getAll?page=1&employeeId=6396c765c9d4e4513dc4e9ac
   Request Method: GET

<!-- Employee Leave Report -->

9. Request URL: http://localhost:2023/api/v1/hr/leavesApplication/getAllReports?page=1&employeeId=6396c765c9d4e4513dc4e9ac&fromDate=&toDate=&excel=false
   Request Method: GET

<!-- Outdoor Duty Application -->

10. Request URL: http://localhost:2023/api/v1/hr/onDutyApplication/getAllReports?employeeId=6396c765c9d4e4513dc4e9ac
    Request Method: GET

<!-- Approved Leave Application -->

11. Request URL: http://localhost:2023/api/v1/hr/leavesApplication/approvedLeaveApplicationOfEmployees?employeeId=6396c765c9d4e4513dc4e9ac&
    Request Method: GET

<!-- Outdoor Duty Application Approved -->

12. Request URL: http://localhost:2023/api/v1/hr/onDutyApplication/approvedODApplicationOfEmployees?employeeId=6396c765c9d4e4513dc4e9ac
    Request Method: GET

<!-- Payroll Report -->

13. Request URL:http://localhost:2023/api/v1/hr/payroll/getAllReports?page=1employeeId=6396c765c9d4e4513dc4e9ac
    Request Method:GET

<!-- Employee Grade Structure -->

14. Request URL: http://localhost:2023/api/v1/hr/employee/gradeStructure
    Request Method: GET

<!-- Employee Department Wise Structure -->

15. Request URL: http://localhost:2023/api/v1/hr/employee/employeeDepartmentWiseStructure?employeeId=6396c765c9d4e4513dc4e9ac
    Request Method: GET

<!-- Employee Directory -->

16. Request URL:
    http://localhost:2023/api/v1/hr/employee/getAll?page=1
    Request Method:GET

<!-- Paid Holidays -->

17. Request URL:
    http://localhost:2023/api/v1/hr/paidHoliday/getAll?page=1&
    Request Method: GET
