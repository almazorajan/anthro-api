"use strict";

module.exports = SanitizeWorkHistory;

function SanitizeWorkHistory(_employee) {
    var workHistory = [];

    for (let i = 0; i < _employee.workHistory.length; i++) {
        var history = _employee.workHistory[i];

        workHistory.push({
            position: history.position,
            companyName: history.companyName,
            dateFrom: history.dateFrom,
            dateTo: history.dateTo,
            isPresent: history.isPresent,
            employmentStatus: history.employmentStatus._id,
            salary: history.salary,
            reasonForLeaving: history.reasonForLeaving
        });
    }

    return workHistory;
}