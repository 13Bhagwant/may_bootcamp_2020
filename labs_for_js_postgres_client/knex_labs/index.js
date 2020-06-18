const knex = require("./db/connection");

// Using only Knex queries, do the following queries:
// 1. Find all countries whose names begin with "b" ignoring case.
const query1 = knex.select("*").from("countries").where("name", "ilike", "b%");
// console.log(query1.toString());
// select * from "countries" where "name" ilike 'b%'

// query1.then((countries) => console.table(countries));
/*
┌─────────┬────┬──────────────────────────┬───────┬──────────────────────────┐
│ (index) │ id │           name           │ code  │        createdAt         │
├─────────┼────┼──────────────────────────┼───────┼──────────────────────────┤
│    0    │ 60 │      'Bahamas, The'      │ 'BHS' │ 2020-06-18T22:09:26.432Z │
│    1    │ 61 │        'Bahrain'         │ 'BHR' │ 2020-06-18T22:09:26.432Z │
│    2    │ 62 │       'Bangladesh'       │ 'BGD' │ 2020-06-18T22:09:26.432Z │
│    3    │ 63 │        'Barbados'        │ 'BRB' │ 2020-06-18T22:09:26.432Z │
│    4    │ 64 │        'Belarus'         │ 'BLR' │ 2020-06-18T22:09:26.432Z │
│    5    │ 65 │        'Belgium'         │ 'BEL' │ 2020-06-18T22:09:26.432Z │
│    6    │ 66 │         'Belize'         │ 'BLZ' │ 2020-06-18T22:09:26.432Z │
│    7    │ 67 │         'Benin'          │ 'BEN' │ 2020-06-18T22:09:26.432Z │
│    8    │ 68 │        'Bermuda'         │ 'BMU' │ 2020-06-18T22:09:26.432Z │
│    9    │ 69 │         'Bhutan'         │ 'BTN' │ 2020-06-18T22:09:26.432Z │
│   10    │ 70 │        'Bolivia'         │ 'BOL' │ 2020-06-18T22:09:26.432Z │
│   11    │ 71 │ 'Bosnia and Herzegovina' │ 'BIH' │ 2020-06-18T22:09:26.432Z │
│   12    │ 72 │        'Botswana'        │ 'BWA' │ 2020-06-18T22:09:26.432Z │
│   13    │ 73 │         'Brazil'         │ 'BRA' │ 2020-06-18T22:09:26.432Z │
│   14    │ 74 │ 'British Virgin Islands' │ 'VGB' │ 2020-06-18T22:09:26.432Z │
│   15    │ 75 │   'Brunei Darussalam'    │ 'BRN' │ 2020-06-18T22:09:26.432Z │
│   16    │ 76 │        'Bulgaria'        │ 'BGR' │ 2020-06-18T22:09:26.432Z │
│   17    │ 77 │      'Burkina Faso'      │ 'BFA' │ 2020-06-18T22:09:26.432Z │
│   18    │ 78 │        'Burundi'         │ 'BDI' │ 2020-06-18T22:09:26.432Z │
└─────────┴────┴──────────────────────────┴───────┴──────────────────────────┘
*/
// 2. Count how many countries have "central" in their name.
const query2 = knex("countries")
  .count("* as count")
  .where("name", "ilike", "%central%");
// console.log(query2.toString());
// select count(*) as "count" from "countries" where "name" ilike '%central%'

// query2.then((count) => console.table(count));
/*
┌─────────┬───────┐
│ (index) │ count │
├─────────┼───────┤
│    0    │  '5'  │
└─────────┴───────┘
*/

// 3. Find all countries whose names begin with the same three letters as their code ignoring case.
const query3 = knex
  .select("*")
  .from("countries")
  .whereRaw(`"name" ilike "code" || '%'`);

console.log(query3.toString());
// select * from "countries" where "name" ilike "code" || '%'

query3.then((countries) => console.table(countries));
/*

┌─────────┬─────┬──────────────────────────────┬───────┬──────────────────────────┐
│ (index) │ id  │             name             │ code  │        createdAt         │
├─────────┼─────┼──────────────────────────────┼───────┼──────────────────────────┤
│    0    │  4  │ 'Early-demographic dividend' │ 'EAR' │ 2020-06-18T22:09:26.432Z │
│    1    │  5  │    'East Asia & Pacific'     │ 'EAS' │ 2020-06-18T22:09:26.432Z │
│    2    │ 20  │         'IDA total'          │ 'IDA' │ 2020-06-18T22:09:26.432Z │
│    3    │ 38  │  'Pre-demographic dividend'  │ 'PRE' │ 2020-06-18T22:09:26.432Z │
│    4    │ 47  │        'Afghanistan'         │ 'AFG' │ 2020-06-18T22:09:26.432Z │
│    5    │ 48  │          'Albania'           │ 'ALB' │ 2020-06-18T22:09:26.432Z │
│    6    │ 51  │          'Andorra'           │ 'AND' │ 2020-06-18T22:09:26.432Z │
│    7    │ 54  │         'Argentina'          │ 'ARG' │ 2020-06-18T22:09:26.432Z │
│    8    │ 55  │          'Armenia'           │ 'ARM' │ 2020-06-18T22:09:26.432Z │
│    9    │ 57  │         'Australia'          │ 'AUS' │ 2020-06-18T22:09:26.432Z │
│   10    │ 59  │         'Azerbaijan'         │ 'AZE' │ 2020-06-18T22:09:26.432Z │
│   11    │ 65  │          'Belgium'           │ 'BEL' │ 2020-06-18T22:09:26.432Z │
│   12    │ 67  │           'Benin'            │ 'BEN' │ 2020-06-18T22:09:26.432Z │
│   13    │ 70  │          'Bolivia'           │ 'BOL' │ 2020-06-18T22:09:26.432Z │
│   14    │ 73  │           'Brazil'           │ 'BRA' │ 2020-06-18T22:09:26.432Z │
│   15    │ 82  │           'Canada'           │ 'CAN' │ 2020-06-18T22:09:26.432Z │
│   16    │ 89  │          'Colombia'          │ 'COL' │ 2020-06-18T22:09:26.432Z │
│   17    │ 90  │          'Comoros'           │ 'COM' │ 2020-06-18T22:09:26.432Z │
│   18    │ 96  │            'Cuba'            │ 'CUB' │ 2020-06-18T22:09:26.432Z │
│   19    │ 98  │           'Cyprus'           │ 'CYP' │ 2020-06-18T22:09:26.432Z │
│   20    │ 99  │       'Czech Republic'       │ 'CZE' │ 2020-06-18T22:09:26.432Z │
│   21    │ 101 │          'Djibouti'          │ 'DJI' │ 2020-06-18T22:09:26.432Z │
│   22    │ 103 │     'Dominican Republic'     │ 'DOM' │ 2020-06-18T22:09:26.432Z │
│   23    │ 104 │          'Ecuador'           │ 'ECU' │ 2020-06-18T22:09:26.432Z │
│   24    │ 105 │      'Egypt, Arab Rep.'      │ 'EGY' │ 2020-06-18T22:09:26.432Z │
│   25    │ 108 │          'Eritrea'           │ 'ERI' │ 2020-06-18T22:09:26.432Z │
│   26    │ 109 │          'Estonia'           │ 'EST' │ 2020-06-18T22:09:26.432Z │
│   27    │ 110 │          'Ethiopia'          │ 'ETH' │ 2020-06-18T22:09:26.432Z │
│   28    │ 113 │          'Finland'           │ 'FIN' │ 2020-06-18T22:09:26.432Z │
│   29    │ 114 │           'France'           │ 'FRA' │ 2020-06-18T22:09:26.432Z │
│   30    │ 116 │           'Gabon'            │ 'GAB' │ 2020-06-18T22:09:26.432Z │
│   31    │ 118 │          'Georgia'           │ 'GEO' │ 2020-06-18T22:09:26.432Z │
│   32    │ 120 │           'Ghana'            │ 'GHA' │ 2020-06-18T22:09:26.432Z │
│   33    │ 121 │         'Gibraltar'          │ 'GIB' │ 2020-06-18T22:09:26.432Z │
│   34    │ 129 │           'Guyana'           │ 'GUY' │ 2020-06-18T22:09:26.432Z │
│   35    │ 133 │          'Hungary'           │ 'HUN' │ 2020-06-18T22:09:26.432Z │
│   36    │ 135 │           'India'            │ 'IND' │ 2020-06-18T22:09:26.432Z │
│   37    │ 141 │           'Israel'           │ 'ISR' │ 2020-06-18T22:09:26.432Z │
│   38    │ 142 │           'Italy'            │ 'ITA' │ 2020-06-18T22:09:26.432Z │
│   39    │ 143 │          'Jamaica'           │ 'JAM' │ 2020-06-18T22:09:26.432Z │
│   40    │ 145 │           'Jordan'           │ 'JOR' │ 2020-06-18T22:09:26.432Z │
│   41    │ 146 │         'Kazakhstan'         │ 'KAZ' │ 2020-06-18T22:09:26.432Z │
│   42    │ 147 │           'Kenya'            │ 'KEN' │ 2020-06-18T22:09:26.432Z │
│   43    │ 148 │          'Kiribati'          │ 'KIR' │ 2020-06-18T22:09:26.432Z │
│   44    │ 150 │        'Korea, Rep.'         │ 'KOR' │ 2020-06-18T22:09:26.432Z │
│   45    │ 154 │          'Lao PDR'           │ 'LAO' │ 2020-06-18T22:09:26.432Z │
│   46    │ 160 │       'Liechtenstein'        │ 'LIE' │ 2020-06-18T22:09:26.432Z │
│   47    │ 162 │         'Luxembourg'         │ 'LUX' │ 2020-06-18T22:09:26.432Z │
│   48    │ 163 │      'Macao SAR, China'      │ 'MAC' │ 2020-06-18T22:09:26.432Z │
│   49    │ 174 │           'Mexico'           │ 'MEX' │ 2020-06-18T22:09:26.432Z │
│   50    │ 181 │         'Mozambique'         │ 'MOZ' │ 2020-06-18T22:09:26.432Z │
│   51    │ 183 │          'Namibia'           │ 'NAM' │ 2020-06-18T22:09:26.432Z │
│   52    │ 189 │         'Nicaragua'          │ 'NIC' │ 2020-06-18T22:09:26.432Z │
│   53    │ 193 │           'Norway'           │ 'NOR' │ 2020-06-18T22:09:26.432Z │
│   54    │ 195 │          'Pakistan'          │ 'PAK' │ 2020-06-18T22:09:26.432Z │
│   55    │ 197 │           'Panama'           │ 'PAN' │ 2020-06-18T22:09:26.432Z │
│   56    │ 200 │            'Peru'            │ 'PER' │ 2020-06-18T22:09:26.432Z │
│   57    │ 202 │           'Poland'           │ 'POL' │ 2020-06-18T22:09:26.432Z │
│   58    │ 205 │           'Qatar'            │ 'QAT' │ 2020-06-18T22:09:26.432Z │
│   59    │ 207 │     'Russian Federation'     │ 'RUS' │ 2020-06-18T22:09:26.432Z │
│   60    │ 208 │           'Rwanda'           │ 'RWA' │ 2020-06-18T22:09:26.432Z │
│   61    │ 212 │        'Saudi Arabia'        │ 'SAU' │ 2020-06-18T22:09:26.432Z │
│   62    │ 213 │          'Senegal'           │ 'SEN' │ 2020-06-18T22:09:26.432Z │
│   63    │ 222 │          'Somalia'           │ 'SOM' │ 2020-06-18T22:09:26.432Z │
│   64    │ 232 │          'Suriname'          │ 'SUR' │ 2020-06-18T22:09:26.432Z │
│   65    │ 234 │           'Sweden'           │ 'SWE' │ 2020-06-18T22:09:26.432Z │
│   66    │ 236 │    'Syrian Arab Republic'    │ 'SYR' │ 2020-06-18T22:09:26.432Z │
│   67    │ 239 │          'Thailand'          │ 'THA' │ 2020-06-18T22:09:26.432Z │
│   68    │ 242 │           'Tonga'            │ 'TON' │ 2020-06-18T22:09:26.432Z │
│   69    │ 244 │          'Tunisia'           │ 'TUN' │ 2020-06-18T22:09:26.432Z │
│   70    │ 245 │           'Turkey'           │ 'TUR' │ 2020-06-18T22:09:26.432Z │
│   71    │ 248 │           'Tuvalu'           │ 'TUV' │ 2020-06-18T22:09:26.432Z │
│   72    │ 249 │           'Uganda'           │ 'UGA' │ 2020-06-18T22:09:26.432Z │
│   73    │ 250 │          'Ukraine'           │ 'UKR' │ 2020-06-18T22:09:26.432Z │
│   74    │ 255 │         'Uzbekistan'         │ 'UZB' │ 2020-06-18T22:09:26.432Z │
│   75    │ 257 │       'Venezuela, RB'        │ 'VEN' │ 2020-06-18T22:09:26.432Z │
│   76    │ 259 │   'Virgin Islands (U.S.)'    │ 'VIR' │ 2020-06-18T22:09:26.432Z │
│   77    │ 261 │        'Yemen, Rep.'         │ 'YEM' │ 2020-06-18T22:09:26.432Z │
└─────────┴─────┴──────────────────────────────┴───────┴──────────────────────────┘

*/