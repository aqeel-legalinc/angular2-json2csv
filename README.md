# angular2-json2csv
Angular Component to convert CSV from Json 


## Setup Instructions

Usage:

Install module Using following Command

npm install angular2-json2csv --save

Include in your component 
import {CsvService} from "angular2-json2csv";
Define "CsvService" as providers
Define this "CsvService" in your constuctor 
constructor(private _csvService: CsvService) { // with all other variables you have

now you just need to call download function with two params 

this._csvService.download(data, 'Filename'); 

You are all set now. Integrate this and Enjoy! 