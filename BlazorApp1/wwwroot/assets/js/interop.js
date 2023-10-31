﻿function test() {
    $("#kt_datepicker_1").flatpickr();
}

function createAlert() {
    alert("Hey this is a alert!");
}

async function updateSelectedDate(selectedDate) {
    DotNet.invokeMethodAsync($("MSBuildProjectName"), "UpdateSelectedDate", selectedDate)
        .then(() => {
            console.log("Date updated successfully in Blazor component.");
        })
        .catch(error => {
            console.error("Error updating date in Blazor component: " + error);
        });
}

function initializeDatePicker() {
    const datePicker = $("#kt_datepicker_1").flatpickr({
        onChange: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                //const selectedDate = selectedDates[0].toString();
                return "mumtaz";//selectedDates[0].toString();
                //updateSelectedDate(selectedDate);
            }
        }
    });
}