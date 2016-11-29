# angular2-json2csv

Angular Service to convert CSV from Json and download that file in browser.

## Setup & Usage Instructions

  - Install module Using following Command
  - npm install angular2-json2csv --save
  - Include in your component 
  - import {CsvService} from "angular2-json2csv";
  - Define "CsvService" as providers
  - Define this "CsvService" in your constuctor
  - constructor(private _csvService: CsvService) { // with all other variables you have

Now you just need to call download function with two params 
- this._csvService.download(data, 'Filename'); 
 
Note: If you are using SystemJS, then don't forget to add this module in  systemjs.config.js

You are all set now. Integrate this and Enjoy!
