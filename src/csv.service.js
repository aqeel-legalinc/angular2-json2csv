"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CsvService = (function () {
    function CsvService() {
        // Blank Constructor for Demo Purpose
    }
    // Download CSV
    CsvService.prototype.download = function (data, filename) {
        var csvData = this.ConvertToCSV(data);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE) {
            var retVal = navigator.msSaveBlob(blob, filename + '.csv');
        }
        else {
            a.download = filename + '.csv';
        }
        // If you will any error in a.download then dont worry about this. 
        a.click();
    };
    // convert Json to CSV data
    CsvService.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += '"' + array[i][index] + '"';
            }
            str += line + '\r\n';
        }
        return str;
    };
    CsvService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CsvService);
    return CsvService;
}());
exports.CsvService = CsvService;
//# sourceMappingURL=csv.service.js.map