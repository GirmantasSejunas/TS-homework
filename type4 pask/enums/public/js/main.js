"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        let BigestTownsOfLt;
        (function (BigestTownsOfLt) {
            BigestTownsOfLt[BigestTownsOfLt["Vilnius"] = 1] = "Vilnius";
            BigestTownsOfLt[BigestTownsOfLt["Kaunas"] = 2] = "Kaunas";
            BigestTownsOfLt[BigestTownsOfLt["Klaipeda"] = 3] = "Klaipeda";
            BigestTownsOfLt[BigestTownsOfLt["Siauliai"] = 4] = "Siauliai";
            BigestTownsOfLt[BigestTownsOfLt["panevezys"] = 5] = "panevezys";
        })(BigestTownsOfLt || (BigestTownsOfLt = {}));
        console.log(BigestTownsOfLt);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        let TopCountryOfPeapleNumber;
        (function (TopCountryOfPeapleNumber) {
            TopCountryOfPeapleNumber[TopCountryOfPeapleNumber["Kinija"] = 1405398800] = "Kinija";
            TopCountryOfPeapleNumber[TopCountryOfPeapleNumber["Indija"] = 1369877096] = "Indija";
            TopCountryOfPeapleNumber[TopCountryOfPeapleNumber["JAV"] = 330679933] = "JAV";
            TopCountryOfPeapleNumber[TopCountryOfPeapleNumber["Indonezija"] = 269603400] = "Indonezija";
            TopCountryOfPeapleNumber[TopCountryOfPeapleNumber["Pakistanas"] = 220892331] = "Pakistanas";
        })(TopCountryOfPeapleNumber || (TopCountryOfPeapleNumber = {}));
        console.log(TopCountryOfPeapleNumber);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        let TopCountryOfBVP;
        (function (TopCountryOfBVP) {
            TopCountryOfBVP[TopCountryOfBVP["Liuksenburgas"] = 1] = "Liuksenburgas";
            TopCountryOfBVP[TopCountryOfBVP["Sveicarija"] = 2] = "Sveicarija";
            TopCountryOfBVP[TopCountryOfBVP["Norvegija"] = 3] = "Norvegija";
            TopCountryOfBVP[TopCountryOfBVP["Airija"] = 4] = "Airija";
            TopCountryOfBVP[TopCountryOfBVP["Islandija"] = 5] = "Islandija";
        })(TopCountryOfBVP || (TopCountryOfBVP = {}));
        console.log(TopCountryOfBVP);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map