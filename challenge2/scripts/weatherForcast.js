var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var officeLocations = [
    { city: "Birmingham", state: "Alabama", callSign: "BMX" },
    { city: "Huntsville", state: "Alabama", callSign: "HUN" },
    { city: "Mobile/Pensacola", state: "Alabama", callSign: "MOB" },
    { city: "Anchorage", state: "Alaska", callSign: "AFC" },
    { city: "Fairbanks", state: "Alaska", callSign: "AFG" },
    { city: "Juneau", state: "Alaska", callSign: "AJK" },
    { city: "Flagstaff", state: "Arizona", callSign: "FGZ" },
    { city: "Phoenix", state: "Arizona", callSign: "PSR" },
    { city: "Tucson", state: "Arizona", callSign: "TWC" },
    { city: "Little Rock", state: "Arkansas", callSign: "LZK" },
    { city: "Eureka", state: "California", callSign: "EKA" },
    { city: "Los Angeles/Oxnard", state: "California", callSign: "LOX" },
    { city: "Sacramento", state: "California", callSign: "STO" },
    { city: "San Diego", state: "California", callSign: "SGX" },
    { city: "San Francisco Bay Area/Monterey", state: "California", callSign: "MTR" },
    { city: "San Joaquin Valley/Hanford", state: "California", callSign: "HNX" },
    { city: "Denver - Boulder", state: "Colorado", callSign: "BOU" },
    { city: "Grand Junction", state: "Colorado", callSign: "GJT" },
    { city: "Pueblo", state: "Colorado", callSign: "PUB" },
    { city: "Jacksonville", state: "Florida", callSign: "JAX" },
    { city: "Key West", state: "Florida", callSign: "KEY" },
    { city: "Melbourne", state: "Florida", callSign: "MLB" },
    { city: "Miami", state: "Florida", callSign: "MFL" },
    { city: "Tallahassee", state: "Florida", callSign: "TAE" },
    { city: "Tampa", state: "Florida", callSign: "TBW" },
    { city: "Peachtree City/Atlanta", state: "Georgia", callSign: "FFC" },
    { city: "Guam", state: "Guam", callSign: "GUM" },
    { city: "Honolulu", state: "Hawaii", callSign: "HFO[6]" },
    { city: "Boise", state: "Idaho", callSign: "BOI" },
    { city: "Pocatello", state: "Idaho", callSign: "PIH" },
    { city: "Chicago", state: "Illinois", callSign: "LOT" },
    { city: "Lincoln", state: "Illinois", callSign: "ILX" },
    { city: "Indianapolis", state: "Indiana", callSign: "IND" },
    { city: "Northern Indiana (Syracuse)", state: "Indiana", callSign: "IWX" },
    { city: "Davenport/Quad Cities", state: "Iowa", callSign: "DVN" },
    { city: "Des Moines", state: "Iowa", callSign: "DMX" },
    { city: "Dodge City", state: "Kansas", callSign: "DDC" },
    { city: "Goodland", state: "Kansas", callSign: "GLD" },
    { city: "Topeka", state: "Kansas", callSign: "TOP" },
    { city: "Wichita", state: "Kansas", callSign: "ICT" },
    { city: "Jackson", state: "Kentucky", callSign: "JKL" },
    { city: "Louisville", state: "Kentucky", callSign: "LMK" },
    { city: "Paducah", state: "Kentucky", callSign: "PAH" },
    { city: "Lake Charles", state: "Louisiana", callSign: "LCH" },
    { city: "New Orleans/Baton Rouge", state: "Louisiana", callSign: "LIX" },
    { city: "Shreveport", state: "Louisiana", callSign: "SHV" },
    { city: "Caribou", state: "Maine", callSign: "CAR" },
    { city: "Gray/Portland", state: "Maine", callSign: "GYX" },
    { city: "Boston/Norton", state: "Massachusetts", callSign: "BOX" },
    { city: "Detroit/Pontiac", state: "Michigan", callSign: "DTX" },
    { city: "Gaylord", state: "Michigan", callSign: "APX" },
    { city: "Grand Rapids", state: "Michigan", callSign: "GRR" },
    { city: "Marquette", state: "Michigan", callSign: "MQT" },
    { city: "Chanhassen/Twin Cities", state: "Minnesota", callSign: "MPX" },
    { city: "Duluth", state: "Minnesota", callSign: "DLH" },
    { city: "Jackson", state: "Mississippi", callSign: "JAN" },
    { city: "Kansas City/Pleasant Hill", state: "Missouri", callSign: "EAX" },
    { city: "Springfield", state: "Missouri", callSign: "SGF" },
    { city: "St. Louis", state: "Missouri", callSign: "LSX" },
    { city: "Billings", state: "Montana", callSign: "BYZ" },
    { city: "Glasgow", state: "Montana", callSign: "GGW" },
    { city: "Great Falls", state: "Montana", callSign: "TFX" },
    { city: "Missoula", state: "Montana", callSign: "MSO" },
    { city: "Hastings", state: "Nebraska", callSign: "GID" },
    { city: "North Platte", state: "Nebraska", callSign: "LBF" },
    { city: "Omaha/Valley", state: "Nebraska", callSign: "OAX" },
    { city: "Elko", state: "Nevada", callSign: "LKN" },
    { city: "Las Vegas", state: "Nevada", callSign: "VEF" },
    { city: "Reno", state: "Nevada", callSign: "REV" },
    { city: "Mount Holly/Philadelphia", state: "New Jersey", callSign: "PHI" },
    { city: "Albuquerque", state: "New Mexico", callSign: "ABQ" },
    { city: "Albany", state: "New York", callSign: "ALY" },
    { city: "Binghamton", state: "New York", callSign: "BGM" },
    { city: "Buffalo", state: "New York", callSign: "BUF" },
    { city: "New York/Upton", state: "New York", callSign: "OKX" },
    { city: "Newport/Morehead City", state: "North Carolina", callSign: "MHX" },
    { city: "Raleigh", state: "North Carolina", callSign: "RAH" },
    { city: "Wilmington", state: "North Carolina", callSign: "ILM" },
    { city: "Bismarck", state: "North Dakota", callSign: "BIS" },
    { city: "Grand Forks", state: "North Dakota", callSign: "FGF" },
    { city: "Cleveland", state: "Ohio", callSign: "CLE" },
    { city: "Wilmington (de facto “Cincinnati/Wilmington”)", state: "Ohio", callSign: "ILN" },
    { city: "Norman/Oklahoma City", state: "Oklahoma", callSign: "OUN" },
    { city: "Tulsa", state: "Oklahoma", callSign: "TSA" },
    { city: "Medford", state: "Oregon", callSign: "MFR" },
    { city: "Pendleton", state: "Oregon", callSign: "PDT" },
    { city: "Portland", state: "Oregon", callSign: "PQR" },
    { city: "Pittsburgh", state: "Pennsylvania", callSign: "PBZ" },
    { city: "State College", state: "Pennsylvania", callSign: "CTP" },
    { city: "San Juan", state: "Puerto Rico", callSign: "SJU" },
    { city: "Charleston", state: "South Carolina", callSign: "CHS" },
    { city: "Columbia", state: "South Carolina", callSign: "CAE" },
    { city: "Greenville-Spartanburg", state: "South Carolina", callSign: "GSP" },
    { city: "Aberdeen", state: "South Dakota", callSign: "ABR" },
    { city: "Rapid City", state: "South Dakota", callSign: "UNR" },
    { city: "Sioux Falls", state: "South Dakota", callSign: "FSD" },
    { city: "Memphis", state: "Tennessee", callSign: "MEG" },
    { city: "Morristown/Knoxville", state: "Tennessee", callSign: "MRX" },
    { city: "Nashville", state: "Tennessee", callSign: "OHX" },
    { city: "Amarillo", state: "Texas", callSign: "AMA" },
    { city: "Austin/San Antonio", state: "Texas", callSign: "EWX" },
    { city: "Brownsville", state: "Texas", callSign: "BRO" },
    { city: "Corpus Christi", state: "Texas", callSign: "CRP" },
    { city: "El Paso", state: "Texas", callSign: "EPZ" },
    { city: "Fort Worth-Dallas", state: "Texas", callSign: "FWD" },
    { city: "Houston/Galveston", state: "Texas", callSign: "HGX" },
    { city: "Lubbock", state: "Texas", callSign: "LUB" },
    { city: "Midland/Odessa", state: "Texas", callSign: "MAF" },
    { city: "San Angelo", state: "Texas", callSign: "SJT" },
    { city: "Salt Lake City", state: "Utah", callSign: "SLC" },
    { city: "Burlington", state: "Vermont", callSign: "BTV" },
    { city: "Baltimore/Washington", state: "Virginia", callSign: "LWX" },
    { city: "Blacksburg/Roanoke", state: "Virginia", callSign: "RNK" },
    { city: "Wakefield", state: "Virginia", callSign: "AKQ" },
    { city: "Seattle", state: "Washington", callSign: "SEW" },
    { city: "Spokane", state: "Washington", callSign: "OTX" },
    { city: "Charleston", state: "West Virginia", callSign: "RLX" },
    { city: "Green Bay", state: "Wisconsin", callSign: "GRB" },
    { city: "La Crosse", state: "Wisconsin", callSign: "ARX" },
    { city: "Milwaukee/Sullivan", state: "Wisconsin", callSign: "MKX" },
    { city: "Cheyenne", state: "Wyoming", callSign: "CYS" },
    { city: "Riverton", state: "Wyoming", callSign: "RIW" },
];
function getForcast() {
    return __awaiter(this, void 0, void 0, function () {
        var forcastTable, listBody, office, apiString, newRow, newCell1, newCell2, newCell3, i, response, jsonData, periods, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    forcastTable = document.getElementById("forcastTable");
                    listBody = document.getElementById("forcastTableBody");
                    office = document.getElementById("officeLocation");
                    apiString = "https://api.weather.gov/gridpoints/" + office.value + "/47,30/forecast";
                    console.log(apiString);
                    document.getElementById("forcastParagraph").innerHTML = "";
                    forcastTable.style.visibility = "visible";
                    // Delete the rows from prior repos, if any
                    for (i = listBody.rows.length; i > 0; i--) {
                        listBody.deleteRow(i - 1);
                    }
                    return [4 /*yield*/, fetch(apiString)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    if (jsonData.status === 404 || jsonData.status === 500) {
                        forcastTable.style.visibility = "hidden";
                        document.getElementById("forcastParagraph").innerHTML = jsonData.detail;
                        document.getElementById("forcastParagraph").style.color = "red";
                        document.getElementById("forcastParagraph").style.fontSize = "larger";
                    }
                    else {
                        periods = jsonData.properties.periods.length;
                        for (index = 0; index < periods; index++) {
                            console.table(jsonData.properties.periods[index]);
                            newRow = listBody.insertRow(listBody.rows.length);
                            newCell1 = newRow.insertCell(0);
                            newCell2 = newRow.insertCell(1);
                            newCell3 = newRow.insertCell(2);
                            newCell1.className = "tableBorder";
                            newCell2.className = "tableBorder";
                            newCell3.className = "tableBorder";
                            newCell1.innerHTML = jsonData.properties.periods[index].name;
                            newCell2.innerHTML = jsonData.properties.periods[index].detailedForecast;
                            newCell3.innerHTML = jsonData.properties.periods[index].temperature;
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var buildSelect = function () {
    var sel = document.getElementById("officeLocation");
    for (var i = 0; i < officeLocations.length; i++) {
        var newOpt = document.createElement('option');
        newOpt.innerHTML = officeLocations[i].state + ", " + officeLocations[i].city;
        newOpt.value = officeLocations[i].callSign;
        sel.appendChild(newOpt);
    }
};
buildSelect();
