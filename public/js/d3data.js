function sorter(number1, number2)
{
      return number2 - number1;
}

collin_data = {"LAGUNA-PINE VALLEY": {"2010": {"ages15-24": 66, "male": 148, "ages45-64": 94, "ages0-14": 25, "female": 150, "ages25-44": 92, "ages65+": 23}, "2011": {"ages15-24": 85, "male": 160, "ages45-64": 75, "ages0-14": 21, "female": 141, "ages25-44": 102, "ages65+": 21}}, "FALLBROOK": {"2010": {"ages15-24": 97, "male": 209, "ages45-64": 111, "ages0-14": 27, "female": 210, "ages25-44": 144, "ages65+": 49}, "2011": {"ages15-24": 79, "male": 184, "ages45-64": 127, "ages0-14": 32, "female": 212, "ages25-44": 134, "ages65+": 30}}, "MIRAMAR": {"2010": {"ages15-24": 109, "male": 223, "ages45-64": 112, "ages0-14": 16, "female": 204, "ages25-44": 162, "ages65+": 40}, "2011": {"ages15-24": 128, "male": 244, "ages45-64": 110, "ages0-14": 19, "female": 225, "ages25-44": 180, "ages65+": 44}}, "SAN DIEGUITO": {"2010": {"ages15-24": 122, "male": 209, "ages45-64": 97, "ages0-14": 38, "female": 239, "ages25-44": 149, "ages65+": 42}, "2011": {"ages15-24": 102, "male": 177, "ages45-64": 78, "ages0-14": 21, "female": 155, "ages25-44": 108, "ages65+": 25}}, "ESCONDIDO": {"2010": {"ages15-24": 135, "male": 331, "ages45-64": 181, "ages0-14": 39, "female": 305, "ages25-44": 226, "ages65+": 54}, "2011": {"ages15-24": 157, "male": 341, "ages45-64": 188, "ages0-14": 32, "female": 295, "ages25-44": 215, "ages65+": 51}}, "COASTAL": {"2010": {"ages15-24": 88, "male": 229, "ages45-64": 147, "ages0-14": 25, "female": 218, "ages25-44": 155, "ages65+": 32}, "2011": {"ages15-24": 66, "male": 210, "ages45-64": 137, "ages0-14": 16, "female": 189, "ages25-44": 137, "ages65+": 41}}, "nop": {"2010": {"ages15-24": 5113, "male": 10018, "ages45-64": 5137, "ages0-14": 1466, "female": 10264, "ages25-44": 7210, "ages65+": 1654}, "2011": {"ages15-24": 4936, "male": 10065, "ages45-64": 5215, "ages0-14": 1271, "female": 9823, "ages25-44": 7101, "ages65+": 1675}}, "RAMONA": {"2010": {"ages15-24": 88, "male": 157, "ages45-64": 84, "ages0-14": 20, "female": 178, "ages25-44": 125, "ages65+": 16}, "2011": {"ages15-24": 125, "male": 197, "ages45-64": 112, "ages0-14": 30, "female": 252, "ages25-44": 142, "ages65+": 38}}, "PALOMAR-JULIAN": {"2010": {"ages15-24": 34, "male": 94, "ages45-64": 49, "ages0-14": 6, "female": 69, "ages25-44": 59, "ages65+": 15}, "2011": {"ages15-24": 42, "male": 97, "ages45-64": 44, "ages0-14": 6, "female": 70, "ages25-44": 55, "ages65+": 21}}, "CENTRAL SAN DIEGO": {"2010": {"ages15-24": 547, "male": 1050, "ages45-64": 566, "ages0-14": 140, "female": 1113, "ages25-44": 749, "ages65+": 180}, "2011": {"ages15-24": 530, "male": 1100, "ages45-64": 542, "ages0-14": 129, "female": 1082, "ages25-44": 798, "ages65+": 207}}, "EL CAJON": {"2010": {"ages15-24": 221, "male": 424, "ages45-64": 224, "ages0-14": 64, "female": 440, "ages25-44": 279, "ages65+": 80}, "2011": {"ages15-24": 233, "male": 429, "ages45-64": 244, "ages0-14": 61, "female": 477, "ages25-44": 276, "ages65+": 93}}, "DEL MAR-MIRA MESA": {"2010": {"ages15-24": 249, "male": 465, "ages45-64": 252, "ages0-14": 58, "female": 519, "ages25-44": 362, "ages65+": 78}, "2011": {"ages15-24": 174, "male": 396, "ages45-64": 210, "ages0-14": 47, "female": 380, "ages25-44": 275, "ages65+": 94}}, "OCEANSIDE": {"2010": {"ages15-24": 80, "male": 152, "ages45-64": 67, "ages0-14": 21, "female": 132, "ages25-44": 99, "ages65+": 17}, "2011": {"ages15-24": 29, "male": 61, "ages45-64": 30, "ages0-14": 0, "female": 44, "ages25-44": 38, "ages65+": 5}}, "CHULA VISTA": {"2010": {"ages15-24": 46, "male": 93, "ages45-64": 36, "ages0-14": 10, "female": 54, "ages25-44": 46, "ages65+": 8}, "2011": {"ages15-24": 34, "male": 79, "ages45-64": 30, "ages0-14": 14, "female": 58, "ages25-44": 42, "ages65+": 17}}, "JAMUL": {"2010": {"ages15-24": 96, "male": 159, "ages45-64": 87, "ages0-14": 25, "female": 188, "ages25-44": 107, "ages65+": 35}, "2011": {"ages15-24": 73, "male": 171, "ages45-64": 76, "ages0-14": 32, "female": 167, "ages25-44": 105, "ages65+": 49}}, "POWAY": {"2010": {"ages15-24": 69, "male": 131, "ages45-64": 87, "ages0-14": 16, "female": 134, "ages25-44": 75, "ages65+": 18}, "2011": {"ages15-24": 64, "male": 113, "ages45-64": 64, "ages0-14": 12, "female": 91, "ages25-44": 55, "ages65+": 9}}, "SAN MARCOS": {"2010": {"ages15-24": 39, "male": 98, "ages45-64": 57, "ages0-14": 15, "female": 81, "ages25-44": 53, "ages65+": 16}, "2011": {"ages15-24": 42, "male": 113, "ages45-64": 66, "ages0-14": 8, "female": 89, "ages25-44": 62, "ages65+": 22}}, "PENINULA": {"2010": {"ages15-24": 83, "male": 136, "ages45-64": 79, "ages0-14": 7, "female": 182, "ages25-44": 123, "ages65+": 30}, "2011": {"ages15-24": 45, "male": 101, "ages45-64": 84, "ages0-14": 13, "female": 156, "ages25-44": 102, "ages65+": 14}}, "LEMON GROVE": {"2010": {"ages15-24": 37, "male": 90, "ages45-64": 31, "ages0-14": 0, "female": 39, "ages25-44": 54, "ages65+": 0}, "2011": {"ages15-24": 25, "male": 84, "ages45-64": 38, "ages0-14": 8, "female": 52, "ages25-44": 49, "ages65+": 16}}, "VISTA": {"2010": {"ages15-24": 822, "male": 1744, "ages45-64": 944, "ages0-14": 214, "female": 1668, "ages25-44": 1155, "ages65+": 300}, "2011": {"ages15-24": 835, "male": 1769, "ages45-64": 984, "ages0-14": 211, "female": 1675, "ages25-44": 1146, "ages65+": 295}}, "ALPINE": {"2010": {"ages15-24": 211, "male": 392, "ages45-64": 203, "ages0-14": 60, "female": 409, "ages25-44": 256, "ages65+": 75}, "2011": {"ages15-24": 214, "male": 383, "ages45-64": 224, "ages0-14": 54, "female": 449, "ages25-44": 258, "ages65+": 82}}, "SANTEE": {"2010": {"ages15-24": 87, "male": 152, "ages45-64": 91, "ages0-14": 26, "female": 167, "ages25-44": 92, "ages65+": 24}, "2011": {"ages15-24": 80, "male": 139, "ages45-64": 85, "ages0-14": 24, "female": 166, "ages25-44": 83, "ages65+": 36}}, "KEARNY MESA": {"2010": {"ages15-24": 741, "male": 1479, "ages45-64": 737, "ages0-14": 206, "female": 1468, "ages25-44": 1036, "ages65+": 232}, "2011": {"ages15-24": 598, "male": 1249, "ages45-64": 639, "ages0-14": 124, "female": 1150, "ages25-44": 843, "ages65+": 209}}, "MID-CITY": {"2010": {"ages15-24": 855, "male": 1647, "ages45-64": 796, "ages0-14": 268, "female": 1738, "ages25-44": 1301, "ages65+": 262}, "2011": {"ages15-24": 795, "male": 1628, "ages45-64": 819, "ages0-14": 192, "female": 1567, "ages25-44": 1254, "ages65+": 228}}, "SOUTHEASTERN SAN DIEGO": {"2010": {"ages15-24": 732, "male": 1467, "ages45-64": 775, "ages0-14": 204, "female": 1391, "ages25-44": 914, "ages65+": 251}, "2011": {"ages15-24": 710, "male": 1429, "ages45-64": 759, "ages0-14": 215, "female": 1433, "ages25-44": 883, "ages65+": 304}}, "SOUTH BAY": {"2010": {"ages15-24": 83, "male": 147, "ages45-64": 52, "ages0-14": 28, "female": 179, "ages25-44": 126, "ages65+": 38}, "2011": {"ages15-24": 130, "male": 197, "ages45-64": 84, "ages0-14": 23, "female": 184, "ages25-44": 118, "ages65+": 28}}, "VALLEY CENTER": {"2010": {"ages15-24": 508, "male": 956, "ages45-64": 469, "ages0-14": 172, "female": 990, "ages25-44": 656, "ages65+": 164}, "2011": {"ages15-24": 769, "male": 1363, "ages45-64": 637, "ages0-14": 206, "female": 1334, "ages25-44": 891, "ages65+": 226}}, "ANZA-BORREGO SPRINGS": {"2010": {"ages15-24": 327, "male": 601, "ages45-64": 317, "ages0-14": 89, "female": 632, "ages25-44": 404, "ages65+": 110}, "2011": {"ages15-24": 274, "male": 576, "ages45-64": 318, "ages0-14": 87, "female": 603, "ages25-44": 418, "ages65+": 98}}, "LAKESIDE": {"2010": {"ages15-24": 44, "male": 97, "ages45-64": 59, "ages0-14": 11, "female": 92, "ages25-44": 59, "ages65+": 16}, "2011": {"ages15-24": 47, "male": 87, "ages45-64": 40, "ages0-14": 8, "female": 75, "ages25-44": 49, "ages65+": 19}}, "NATIONAL CITY": {"2010": {"ages15-24": 104, "male": 214, "ages45-64": 94, "ages0-14": 29, "female": 180, "ages25-44": 142, "ages65+": 33}, "2011": {"ages15-24": 287, "male": 558, "ages45-64": 283, "ages0-14": 64, "female": 549, "ages25-44": 394, "ages65+": 82}}, "CARLSBAD": {"2010": {"ages15-24": 273, "male": 527, "ages45-64": 217, "ages0-14": 81, "female": 466, "ages25-44": 331, "ages65+": 89}, "2011": {"ages15-24": 244, "male": 449, "ages45-64": 205, "ages0-14": 61, "female": 440, "ages25-44": 316, "ages65+": 63}}, "SPRING VALLEY": {"2010": {"ages15-24": 943, "male": 1838, "ages45-64": 936, "ages0-14": 216, "female": 1974, "ages25-44": 1473, "ages65+": 309}, "2011": {"ages15-24": 824, "male": 1755, "ages45-64": 943, "ages0-14": 161, "female": 1761, "ages25-44": 1346, "ages65+": 311}}, "HARBISON CREST": {"2010": {"ages15-24": 52, "male": 86, "ages45-64": 34, "ages0-14": 12, "female": 50, "ages25-44": 32, "ages65+": 5}, "2011": {"ages15-24": 41, "male": 92, "ages45-64": 50, "ages0-14": 9, "female": 70, "ages25-44": 48, "ages65+": 16}}, "CORONADO": {"2010": {"ages15-24": 235, "male": 488, "ages45-64": 279, "ages0-14": 91, "female": 562, "ages25-44": 394, "ages65+": 68}, "2011": {"ages15-24": 206, "male": 428, "ages45-64": 220, "ages0-14": 75, "female": 414, "ages25-44": 295, "ages65+": 75}}, "MOUNTAIN EMPIRE": {"2010": {"ages15-24": 41, "male": 91, "ages45-64": 56, "ages0-14": 10, "female": 97, "ages25-44": 59, "ages65+": 23}, "2011": {"ages15-24": 50, "male": 84, "ages45-64": 53, "ages0-14": 19, "female": 98, "ages25-44": 36, "ages65+": 23}}, "LA MESA": {"2010": {"ages15-24": 11, "male": 44, "ages45-64": 22, "ages0-14": 0, "female": 26, "ages25-44": 25, "ages65+": 10}, "2011": {"ages15-24": 7, "male": 31, "ages45-64": 21, "ages0-14": 0, "female": 18, "ages25-44": 13, "ages65+": 0}}}

var data = [], data2 = [], geo = [];
var gender = false ? "male" : "female";

// for (i = 0; i < collin_data.length; i++) {
for (i in collin_data) {
  if (i != "nop") {
    data.push( collin_data[i]["2010"][gender] );
    data2.push( collin_data[i]["2011"][gender] );
    geo.push( collin_data[i] );
  }
}

// var data = ["21", "11", "17", "6", '13', "<5"];
// var data2 = ["19", "13", "17", "7", "11", "<5"];
var yearsum = [];
var avg = [];
for (i = 0; i < data.length; i++) { 
    if (data[i] == "<5") {
        data[i] = 3;
    }
    if (data2[i] == "<5") {
        data2[i] = 3;
    }
    data[i] = +data[i];
    data2[i] = +data2[i];
    yearsum[i] = data[i] + data2[i];
}

// Easier way to sum
Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
        selector = function(item) {
            return item;
        }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += parseFloat(selector(this[i]));
    }
    return sum;
};

// Calculation of average and likelihood
avg = yearsum.sum() / yearsum.length;
var Likelihood = [];
for (i = 0; i < yearsum.length; i++) {
    Likelihood[i] = yearsum[i] / avg;
    Likelihood[i] = Likelihood[i].toFixed(2);
}

var temp = 0;
var regionNames = [];
for (i in collin_data) {
  // i = "CARLSBAD"
  // temp = 0, 1, 2, ...
  if (i != "nop") {
    regionNames[temp] = i;
  temp++;
  }
}

console.log(regionNames)
// Sorting likelihood by largest to smallest
//Likelihood = Likelihood.sort(sorter)

//Width and height
var w = 1200;
var h = 500;
var barPadding = 1;

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("rect")
   .data(Likelihood)
   .enter()
   .append("rect")
   .attr("x", 0)
   .attr("y", 0)
   .attr("x", function(d, i) {
       return i * (w/Likelihood.length); 
    })
   .attr("width", w / Likelihood.length - barPadding)
   .attr("height", function(d) {
    return d * 20;
    })
   .attr("y", function(d) {
    return h - 400 - d * 20;  //Height minus data value
    })
   .attr("fill", "dodgerblue");
svg.selectAll("text")
   .data(Likelihood)
   .enter()
   .append("text")
   .text(function(d) {
        return d;
   })
   .attr("x", function(d, i) {
        return i * (w / Likelihood.length);
   })
   .attr("y", function(d) {
        return h - 400 - (d * 20)-1;
   });


