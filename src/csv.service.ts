import {Injectable} from '@angular/core';


@Injectable()
export class  CsvService {
    constructor() { }
    
    /////////////////////////////////////////////////////////////////    
    // J. Pagakis 20170601    
    // Mods to make the header suppressable    
    /////////////////////////////////////////////////////////////////    
    // J. Pagakis 20170719    
    // Mods to fix download failures in IE
    
    // Download CSV
    download( data:any, filename:string, suppressHeader:boolean = false /* J. Pagakis 20170601 */ )
    {
        var csvData = this.ConvertToCSV( data, suppressHeader ); //J. Pagakis 20170601
        var a: any = document.createElement( "a" );
        a.setAttribute( 'style', 'display:none;' );
        document.body.appendChild(a);
        var blob = new Blob( [csvData], { type: 'text/csv' } );
        var url= window.URL.createObjectURL( blob );
        a.href = url;
        
        var isIE = /*@cc_on!@*/false || !!( <any> document ).documentMode;
        var retVal;
        
        if ( isIE )
        {
            retVal = navigator.msSaveOrOpenBlob( blob, filename+'.csv' );  //J.Pagakis 20170719 - changed to msSaveOrOpenBlob instead on msSaveBlob
        }
        else
        {
            a.download = filename+'.csv';
        }
        
        // If you will any error in a.download then dont worry about this.
        if ( !isIE )  //J.Pagakis 20170719 - a.click( ) was failing 50% of the time in IE; apparently not needed.
        {
            a.click();
        }
        
        
        // convert Json to CSV data
        ConvertToCSV( objArray:any, suppressHeader:boolean = false /* J. Pagakis 20170601 */ ) {
            var array = typeof objArray != 'object' ? JSON.parse( objArray ) : objArray;
            var str = '';
            var row = "";
            
            for ( var index in objArray[ 0 ] )
            {
                //Convert each value to string and comma-seprated
                row += index + ',';
            }
            
            row = row.slice( 0, -1 );
            
            //append Label row with line break
            
            if ( ! suppressHeader )  // J. Pagakis 20170601
            {
                str += row + '\r\n';
            }
            
            for ( var i = 0; i < array.length; i++ )
            {
                var line = '';
                for ( var index in array[ i ] )
                {
                    if ( line != '' ) line += ',';
                    
                    line += '"' + array[ i ][ index ] + '"';
                }
                
                str += line + '\r\n';
            }
            
            return str;
        }
    }
            
            
            
            
