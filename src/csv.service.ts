import {Injectable} from '@angular/core';


@Injectable()

export class  CsvService {

    constructor() {
        // Blank Constructor for Demo Purpose
    }

    // Download CSV
    download(data:any, filename:string){
        var csvData = this.ConvertToCSV(data);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        a.href = url;
        if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || $.browser.msie == 1)
        {   
            var retVal = navigator.msSaveBlob(blob, filename+'.csv');
        }
        else{
            a.download = filename+'.csv';
        }
        // If you will any error in a.download then dont worry about this. 
        a.click();
    }


    // convert Json to CSV data
    ConvertToCSV(objArray:any) {
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
                    if (line != '') line += ','

                    line += '"'+array[i][index]+'"';
                }

                str += line + '\r\n';
            }

            return str;
        }
}