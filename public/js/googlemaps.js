// Create the Google Map…
var map;
var geocoder;
var clicked = "";
var value_level_1;
var value_level_2;
var value_level_3;
var value_level_4;
var color_level_1 = "#FF0000";
var color_level_2 = "#FF4D4D";
var color_level_3 = "#FF9999";
var color_level_4 = "#FFCCCC";
var datasetPicked = [];
var polygons = [];
var regionNames = [];
var Likelihood = [];
var datasetSelected = {"LAGUNA-PINE VALLEY": {"2010": {"ages15-24": 66, "male": 148, "ages45-64": 94, "ages0-14": 25, "female": 150, "ages25-44": 92, "ages65+": 23}, "2011": {"ages15-24": 85, "male": 160, "ages45-64": 75, "ages0-14": 21, "female": 141, "ages25-44": 102, "ages65+": 21}}, "FALLBROOK": {"2010": {"ages15-24": 97, "male": 209, "ages45-64": 111, "ages0-14": 27, "female": 210, "ages25-44": 144, "ages65+": 49}, "2011": {"ages15-24": 79, "male": 184, "ages45-64": 127, "ages0-14": 32, "female": 212, "ages25-44": 134, "ages65+": 30}}, "MIRAMAR": {"2010": {"ages15-24": 109, "male": 223, "ages45-64": 112, "ages0-14": 16, "female": 204, "ages25-44": 162, "ages65+": 40}, "2011": {"ages15-24": 128, "male": 244, "ages45-64": 110, "ages0-14": 19, "female": 225, "ages25-44": 180, "ages65+": 44}}, "SAN DIEGUITO": {"2010": {"ages15-24": 122, "male": 209, "ages45-64": 97, "ages0-14": 38, "female": 239, "ages25-44": 149, "ages65+": 42}, "2011": {"ages15-24": 102, "male": 177, "ages45-64": 78, "ages0-14": 21, "female": 155, "ages25-44": 108, "ages65+": 25}}, "ESCONDIDO": {"2010": {"ages15-24": 135, "male": 331, "ages45-64": 181, "ages0-14": 39, "female": 305, "ages25-44": 226, "ages65+": 54}, "2011": {"ages15-24": 157, "male": 341, "ages45-64": 188, "ages0-14": 32, "female": 295, "ages25-44": 215, "ages65+": 51}}, "COASTAL": {"2010": {"ages15-24": 88, "male": 229, "ages45-64": 147, "ages0-14": 25, "female": 218, "ages25-44": 155, "ages65+": 32}, "2011": {"ages15-24": 66, "male": 210, "ages45-64": 137, "ages0-14": 16, "female": 189, "ages25-44": 137, "ages65+": 41}}, "nop": {"2010": {"ages15-24": 5113, "male": 10018, "ages45-64": 5137, "ages0-14": 1466, "female": 10264, "ages25-44": 7210, "ages65+": 1654}, "2011": {"ages15-24": 4936, "male": 10065, "ages45-64": 5215, "ages0-14": 1271, "female": 9823, "ages25-44": 7101, "ages65+": 1675}}, "RAMONA": {"2010": {"ages15-24": 88, "male": 157, "ages45-64": 84, "ages0-14": 20, "female": 178, "ages25-44": 125, "ages65+": 16}, "2011": {"ages15-24": 125, "male": 197, "ages45-64": 112, "ages0-14": 30, "female": 252, "ages25-44": 142, "ages65+": 38}}, "PALOMAR-JULIAN": {"2010": {"ages15-24": 34, "male": 94, "ages45-64": 49, "ages0-14": 6, "female": 69, "ages25-44": 59, "ages65+": 15}, "2011": {"ages15-24": 42, "male": 97, "ages45-64": 44, "ages0-14": 6, "female": 70, "ages25-44": 55, "ages65+": 21}}, "CENTRAL SAN DIEGO": {"2010": {"ages15-24": 547, "male": 1050, "ages45-64": 566, "ages0-14": 140, "female": 1113, "ages25-44": 749, "ages65+": 180}, "2011": {"ages15-24": 530, "male": 1100, "ages45-64": 542, "ages0-14": 129, "female": 1082, "ages25-44": 798, "ages65+": 207}}, "EL CAJON": {"2010": {"ages15-24": 221, "male": 424, "ages45-64": 224, "ages0-14": 64, "female": 440, "ages25-44": 279, "ages65+": 80}, "2011": {"ages15-24": 233, "male": 429, "ages45-64": 244, "ages0-14": 61, "female": 477, "ages25-44": 276, "ages65+": 93}}, "DEL MAR-MIRA MESA": {"2010": {"ages15-24": 249, "male": 465, "ages45-64": 252, "ages0-14": 58, "female": 519, "ages25-44": 362, "ages65+": 78}, "2011": {"ages15-24": 174, "male": 396, "ages45-64": 210, "ages0-14": 47, "female": 380, "ages25-44": 275, "ages65+": 94}}, "OCEANSIDE": {"2010": {"ages15-24": 80, "male": 152, "ages45-64": 67, "ages0-14": 21, "female": 132, "ages25-44": 99, "ages65+": 17}, "2011": {"ages15-24": 29, "male": 61, "ages45-64": 30, "ages0-14": 0, "female": 44, "ages25-44": 38, "ages65+": 5}}, "CHULA VISTA": {"2010": {"ages15-24": 46, "male": 93, "ages45-64": 36, "ages0-14": 10, "female": 54, "ages25-44": 46, "ages65+": 8}, "2011": {"ages15-24": 34, "male": 79, "ages45-64": 30, "ages0-14": 14, "female": 58, "ages25-44": 42, "ages65+": 17}}, "JAMUL": {"2010": {"ages15-24": 96, "male": 159, "ages45-64": 87, "ages0-14": 25, "female": 188, "ages25-44": 107, "ages65+": 35}, "2011": {"ages15-24": 73, "male": 171, "ages45-64": 76, "ages0-14": 32, "female": 167, "ages25-44": 105, "ages65+": 49}}, "POWAY": {"2010": {"ages15-24": 69, "male": 131, "ages45-64": 87, "ages0-14": 16, "female": 134, "ages25-44": 75, "ages65+": 18}, "2011": {"ages15-24": 64, "male": 113, "ages45-64": 64, "ages0-14": 12, "female": 91, "ages25-44": 55, "ages65+": 9}}, "SAN MARCOS": {"2010": {"ages15-24": 39, "male": 98, "ages45-64": 57, "ages0-14": 15, "female": 81, "ages25-44": 53, "ages65+": 16}, "2011": {"ages15-24": 42, "male": 113, "ages45-64": 66, "ages0-14": 8, "female": 89, "ages25-44": 62, "ages65+": 22}}, "PENINULA": {"2010": {"ages15-24": 83, "male": 136, "ages45-64": 79, "ages0-14": 7, "female": 182, "ages25-44": 123, "ages65+": 30}, "2011": {"ages15-24": 45, "male": 101, "ages45-64": 84, "ages0-14": 13, "female": 156, "ages25-44": 102, "ages65+": 14}}, "LEMON GROVE": {"2010": {"ages15-24": 37, "male": 90, "ages45-64": 31, "ages0-14": 0, "female": 39, "ages25-44": 54, "ages65+": 0}, "2011": {"ages15-24": 25, "male": 84, "ages45-64": 38, "ages0-14": 8, "female": 52, "ages25-44": 49, "ages65+": 16}}, "VISTA": {"2010": {"ages15-24": 822, "male": 1744, "ages45-64": 944, "ages0-14": 214, "female": 1668, "ages25-44": 1155, "ages65+": 300}, "2011": {"ages15-24": 835, "male": 1769, "ages45-64": 984, "ages0-14": 211, "female": 1675, "ages25-44": 1146, "ages65+": 295}}, "ALPINE": {"2010": {"ages15-24": 211, "male": 392, "ages45-64": 203, "ages0-14": 60, "female": 409, "ages25-44": 256, "ages65+": 75}, "2011": {"ages15-24": 214, "male": 383, "ages45-64": 224, "ages0-14": 54, "female": 449, "ages25-44": 258, "ages65+": 82}}, "SANTEE": {"2010": {"ages15-24": 87, "male": 152, "ages45-64": 91, "ages0-14": 26, "female": 167, "ages25-44": 92, "ages65+": 24}, "2011": {"ages15-24": 80, "male": 139, "ages45-64": 85, "ages0-14": 24, "female": 166, "ages25-44": 83, "ages65+": 36}}, "KEARNY MESA": {"2010": {"ages15-24": 741, "male": 1479, "ages45-64": 737, "ages0-14": 206, "female": 1468, "ages25-44": 1036, "ages65+": 232}, "2011": {"ages15-24": 598, "male": 1249, "ages45-64": 639, "ages0-14": 124, "female": 1150, "ages25-44": 843, "ages65+": 209}}, "MID-CITY": {"2010": {"ages15-24": 855, "male": 1647, "ages45-64": 796, "ages0-14": 268, "female": 1738, "ages25-44": 1301, "ages65+": 262}, "2011": {"ages15-24": 795, "male": 1628, "ages45-64": 819, "ages0-14": 192, "female": 1567, "ages25-44": 1254, "ages65+": 228}}, "SOUTHEASTERN SAN DIEGO": {"2010": {"ages15-24": 732, "male": 1467, "ages45-64": 775, "ages0-14": 204, "female": 1391, "ages25-44": 914, "ages65+": 251}, "2011": {"ages15-24": 710, "male": 1429, "ages45-64": 759, "ages0-14": 215, "female": 1433, "ages25-44": 883, "ages65+": 304}}, "SOUTH BAY": {"2010": {"ages15-24": 83, "male": 147, "ages45-64": 52, "ages0-14": 28, "female": 179, "ages25-44": 126, "ages65+": 38}, "2011": {"ages15-24": 130, "male": 197, "ages45-64": 84, "ages0-14": 23, "female": 184, "ages25-44": 118, "ages65+": 28}}, "VALLEY CENTER": {"2010": {"ages15-24": 508, "male": 956, "ages45-64": 469, "ages0-14": 172, "female": 990, "ages25-44": 656, "ages65+": 164}, "2011": {"ages15-24": 769, "male": 1363, "ages45-64": 637, "ages0-14": 206, "female": 1334, "ages25-44": 891, "ages65+": 226}}, "ANZA-BORREGO SPRINGS": {"2010": {"ages15-24": 327, "male": 601, "ages45-64": 317, "ages0-14": 89, "female": 632, "ages25-44": 404, "ages65+": 110}, "2011": {"ages15-24": 274, "male": 576, "ages45-64": 318, "ages0-14": 87, "female": 603, "ages25-44": 418, "ages65+": 98}}, "LAKESIDE": {"2010": {"ages15-24": 44, "male": 97, "ages45-64": 59, "ages0-14": 11, "female": 92, "ages25-44": 59, "ages65+": 16}, "2011": {"ages15-24": 47, "male": 87, "ages45-64": 40, "ages0-14": 8, "female": 75, "ages25-44": 49, "ages65+": 19}}, "NATIONAL CITY": {"2010": {"ages15-24": 104, "male": 214, "ages45-64": 94, "ages0-14": 29, "female": 180, "ages25-44": 142, "ages65+": 33}, "2011": {"ages15-24": 287, "male": 558, "ages45-64": 283, "ages0-14": 64, "female": 549, "ages25-44": 394, "ages65+": 82}}, "CARLSBAD": {"2010": {"ages15-24": 273, "male": 527, "ages45-64": 217, "ages0-14": 81, "female": 466, "ages25-44": 331, "ages65+": 89}, "2011": {"ages15-24": 244, "male": 449, "ages45-64": 205, "ages0-14": 61, "female": 440, "ages25-44": 316, "ages65+": 63}}, "SPRING VALLEY": {"2010": {"ages15-24": 943, "male": 1838, "ages45-64": 936, "ages0-14": 216, "female": 1974, "ages25-44": 1473, "ages65+": 309}, "2011": {"ages15-24": 824, "male": 1755, "ages45-64": 943, "ages0-14": 161, "female": 1761, "ages25-44": 1346, "ages65+": 311}}, "HARBISON CREST": {"2010": {"ages15-24": 52, "male": 86, "ages45-64": 34, "ages0-14": 12, "female": 50, "ages25-44": 32, "ages65+": 5}, "2011": {"ages15-24": 41, "male": 92, "ages45-64": 50, "ages0-14": 9, "female": 70, "ages25-44": 48, "ages65+": 16}}, "CORONADO": {"2010": {"ages15-24": 235, "male": 488, "ages45-64": 279, "ages0-14": 91, "female": 562, "ages25-44": 394, "ages65+": 68}, "2011": {"ages15-24": 206, "male": 428, "ages45-64": 220, "ages0-14": 75, "female": 414, "ages25-44": 295, "ages65+": 75}}, "MOUNTAIN EMPIRE": {"2010": {"ages15-24": 41, "male": 91, "ages45-64": 56, "ages0-14": 10, "female": 97, "ages25-44": 59, "ages65+": 23}, "2011": {"ages15-24": 50, "male": 84, "ages45-64": 53, "ages0-14": 19, "female": 98, "ages25-44": 36, "ages65+": 23}}, "LA MESA": {"2010": {"ages15-24": 11, "male": 44, "ages45-64": 22, "ages0-14": 0, "female": 26, "ages25-44": 25, "ages65+": 10}, "2011": {"ages15-24": 7, "male": 31, "ages45-64": 21, "ages0-14": 0, "female": 18, "ages25-44": 13, "ages65+": 0}}};
var genderSelected = "male";
var ageSelected = "ages0-14";
var ageBar = "#ageNULL";
var genderBar = "#genderNULL";
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong></strong> <span style='color:red'>" + d.num + "</span>";
  });

function initialize() {
  geocoder = new google.maps.Geocoder(); 
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 9,
    center: new google.maps.LatLng(32.95749,-116.9058),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

function getColorRange(dataset) {
  var max;
  var min;
  for (var i = 0; i < dataset.length; i++) {
    if (!max || dataset[i] > max) {
      max = dataset[i];
    }
    if (!min || dataset[i] < min) {
      min = dataset[i];
    }
  }
  value_level_4 = min;
  value_level_3 = min + (max - min)/3;
  value_level_2 = min + (max - min)*2/3;
  value_level_1 = max;
}

function sorter(number1, number2)
{
  return number2 - number1;
}

function loadData() {
  datasetPicked = [];
  for (var i = 0; i < Likelihood.length; i++) {
    var num = parseFloat(Likelihood[i]);
    if (isNaN(num)) {
      num = 0;
    }
    datasetPicked.push(num);
  }
  getColorRange(datasetPicked);
  d3.json("maps/sdcounty.json", function(data) {
    setPolygon(data.features,0);
  });
}

function loadD3() {
  loadD3Age();
  loadD3Gender();
}

function loadD3Age() {
    var margin = {top: 20, right: 20, bottom: 150, left: 40};
  var width = 1200 - margin.left - margin.right;
  var height = 300 - margin.top - margin.bottom;

  //define scale of x to be from 0 to width of SVG, with .1 padding in between
  var scaleX = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  //define scale of y to be from the height of SVG to 0
  var scaleY = d3.scale.linear()
    .range([height, 0]);

  //define axes
  var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient("left");

  collin_data = datasetSelected;

  var data = [], data2 = [];
  var geo = [];
  var age = ageSelected;

  // for (i = 0; i < collin_data.length; i++) {
  for (i in collin_data) {
    if (i != "nop") {
      data.push( collin_data[i]["2010"][age] );
      data2.push( collin_data[i]["2011"][age] );
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
  Likelihood = [];
  for (i = 0; i < yearsum.length; i++) {
      Likelihood[i] = yearsum[i] / avg;
      Likelihood[i] = Likelihood[i].toFixed(2);
  }

  var temp = 0;
  regionNames = [];
  for (i in collin_data) {
    // i = "CARLSBAD"
    // temp = 0, 1, 2, ...
    if (i != "nop") {
      regionNames[temp] = i;
    temp++;
    }
  }

  var d3set = [];

  for (i = 0; i < Likelihood.length; i++) {
    if (isNaN(Likelihood[i])) {
      Likelihood[i] = 0;
    }
    d3set.push({"num":Likelihood[i],"region":regionNames[i]});
  }

  //create svg
  $("#agechart").html("");
  var svg = d3.select("#agechart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    //set domain of x to be all the usernames contained in the data
    scaleX.domain(d3set.map(function(d) { return d.region; }));
    //set domain of y to be from 0 to the maximum media count returned
    scaleY.domain([0, d3.max(d3set, function(d) { return d.num; })]);

    //set up x axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")") //move x-axis to the bottom
      .call(xAxis)
      .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function(d) {
        return "rotate(-65)" 
      });

    //set up y axis
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

    //set up bars in bar graph
    svg.selectAll(".bar")
      .data(d3set)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return scaleX(d.region); })
      .attr("width", scaleX.rangeBand())
      .attr("y", function(d) { return scaleY(d.num); })
      .attr("id", function(d) { return "age"+d.region.replace(/\s+/g, ''); })
      .attr("fill", "steelblue")
      .attr("height", function(d) { return height - scaleY(d.num); })
      .on("mouseover",tip.show)
      .on("mouseout",tip.hide);
}

function loadD3Gender() {
  var margin = {top: 20, right: 20, bottom: 150, left: 40};
  var width = 1200 - margin.left - margin.right;
  var height = 300 - margin.top - margin.bottom;

  //define scale of x to be from 0 to width of SVG, with .1 padding in between
  var scaleX = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  //define scale of y to be from the height of SVG to 0
  var scaleY = d3.scale.linear()
    .range([height, 0]);

  //define axes
  var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient("left");

  collin_data = datasetSelected;

  var data = [], data2 = [];
  var geo = [];
  var gender = genderSelected;

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
  Likelihood = [];
  for (i = 0; i < yearsum.length; i++) {
      Likelihood[i] = yearsum[i] / avg;
      Likelihood[i] = Likelihood[i].toFixed(2);
  }

  var temp = 0;
  regionNames = [];
  for (i in collin_data) {
    // i = "CARLSBAD"
    // temp = 0, 1, 2, ...
    if (i != "nop") {
      regionNames[temp] = i;
    temp++;
    }
  }

  var d3set = [];

  for (i = 0; i < Likelihood.length; i++) {
    if (isNaN(Likelihood[i])) {
      Likelihood[i] = 0;
    }
    d3set.push({"num":Likelihood[i],"region":regionNames[i]});
  }

  //create svg
  $("#genderchart").html("");
  var svg = d3.select("#genderchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //set domain of x to be all the usernames contained in the data
    scaleX.domain(d3set.map(function(d) { return d.region; }));
    //set domain of y to be from 0 to the maximum media count returned
    scaleY.domain([0, d3.max(d3set, function(d) { return d.num; })]);

    svg.call(tip);

    //set up x axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")") //move x-axis to the bottom
      .call(xAxis)
      .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function(d) {
        return "rotate(-65)" 
      });

    //set up y axis
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

    //set up bars in bar graph
    svg.selectAll(".bar")
      .data(d3set)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return scaleX(d.region); })
      .attr("width", scaleX.rangeBand())
      .attr("y", function(d) { return scaleY(d.num); })
      .attr("id", function(d) { return "gender"+d.region.replace(/\s+/g, ''); })
      .attr("fill", "steelblue")
      .attr("height", function(d) { return height - scaleY(d.num); })
      .on("mouseover",tip.show)
      .on("mouseout",tip.hide);
}

function changeColor() {
 for (var i = 0; i < polygons.length; i++) {
    polygons[i].setMap(null);
  }
  polygons = [];
  loadData();
}

function setPolygon(data,index) {
  if (index < data.length) {
      var color = color_level_4;
      var path = data[index].geometry.coordinates[0];
        var address = data[index].properties.NAME;
        var indexOfAddress = regionNames.indexOf(address);
        var regionValue = 0;
        if (indexOfAddress >= 0 ) {
          regionValue = datasetPicked[indexOfAddress];
        }
        if (regionValue == 0) {
          color = "#FFFFFF";
        } else if (regionValue <= value_level_4) {
          color = color_level_4;
        } else if (regionValue <= value_level_3) {
          color = color_level_3;
        } else if (regionValue <= value_level_2) {
          color = color_level_2;
        } else if (regionValue <= value_level_1) {
          color = color_level_1;
        }
        var coords = [];
        for (var j = 0; j < path.length; j++){
          coords.push(new google.maps.LatLng(path[j][1], path[j][0]));
        }
        var polygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: "#0000000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35
        });
        polygon.setMap(map);
        var contentString = '<div class="infowindow">'+
          '<h1>' + address + '</h1>'+
          '<div>'+
          '<p><b>'+ "Number of Times More Likely Than SD County Average: " + regionValue + '</b>' +
          '</div>'+
          '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        google.maps.event.addListener(polygon, 'click', function(event) {
          infowindow.setPosition(event.latLng);   
          infowindow.open(map,polygon);
          var element = document.getElementById('location');
          element.innerHTML = address;
          d3.select(ageBar)
           .attr("fill","steelblue");
          
          d3.select(genderBar)
           .attr("fill","steelblue");
          
          ageBar = "#age" + address.replace(/\s+/g, '');
          d3.select(ageBar)
            .attr("fill","red"); 
          genderBar = "#gender" + address.replace(/\s+/g, '');
          d3.select(genderBar)
            .attr("fill","red"); 
          //selectArea(address);
          //TODO: click event
        });
        google.maps.event.addListener(polygon, 'mouseover', function() {
          //TODO: mouseover event
        });
        google.maps.event.addListener(polygon, 'mouseout', function() {
          infowindow.close();
        });
    polygons.push(polygon);
    setPolygon(data,index+1); 
  }
}

function changeColor() {
 for (var i = 0; i < polygons.length; i++) {
    polygons[i].setMap(null);
  }
  polygons = [];
 loadData();
}

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);
  var datasetName = $("#dataset").html();
  datasetName = datasetName.substring(0,datasetName.indexOf(" <span")); 
  var genderInput = $("#gender").html();
  genderInput = genderInput.substring(0,genderInput.indexOf(" <span")); 
  var ageInput = $("#age").html();
  ageInput = ageInput.substring(0,ageInput.indexOf(" <span")); 
  console.log(datasetName);
  if (ageInput == "0 - 14") {
    ageSelected = "ages0-14";
  } else if (ageInput == "15 - 24") {
    ageSelected = "ages15-24";
  } else if (ageInput == "25 - 44") {
    ageSelected = "ages25-44";
  } else if (ageInput == "45 - 64") {
    ageSelected = "ages45-64";
  } else if (ageInput == "65 +") {
    ageSelected = "ages65+";
  }
  if (genderInput == "Male") {
    genderSelected = "male";
  } else if (genderInput == "Female") {
    genderSelected = "female";
  } 
  if (datasetName == "Alcohol Vehicular Injuries") {
    datasetAlcoholInjury();
  } else if (datasetName == "Total Vehicular Injuries") {
    datasetTotalInjury();
  } else if (datasetName == "Anxiety Disorder") {
    datasetAnxiety();
  } else if (datasetName == "Assults") {
    datasetAssults();
  } else if (datasetName == "Asthma") {
    datasetAsthma();
  } else if (datasetName == "Alcohol Related Disorder") {
    datasetAlcohol();
  } else if (datasetName == "Substance Related Disorder") {
    datasetSubstance();
  } else if (datasetName == "Firearm Injuries") {
    datasetFirearm();
  } else if (datasetName == "Homicide") {
    datasetHomicide();
  } else if (datasetName == "Lung Cancer") {
    datasetLungCancer();
  } else if (datasetName == "Self Injury") {
    datasetSelfInjury();
  } else {
    loadD3();
    loadData();
  }
    var options = {
        enableGestures: true
    };
var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              if(gesture.state == "stop")
              {
                console.log();
                map.setZoom(map.getZoom()-1);
                console.log("Circle Gesture");
              }
                
              break;
          case "keyTap":
              console.log("Key Tap Gesture");
              break;
          case "screenTap":
             if(gesture.state == "stop") {
              console.log(gesture.duration);
              map.setZoom(map.getZoom()+1);
              console.log(map.getZoom());
              console.log("screenTap");
             }
              break;
          case "swipe":
             var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
            //Classify as right-left or up-down
            if(gesture.state == "stop") {
            if(isHorizontal){
              if(gesture.duration > 150000) {
              if(gesture.direction[0] > 0){
                  console.log("right");
                  console.log(gesture.duration);
                  if(map.getZoom() < 10)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F-0.5));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F-0.05));
                  
              } else {
                  
                  console.log("left");
                  console.log(gesture.duration);
                  if(map.getZoom() < 10)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F+0.5));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A,map.getCenter().F+0.05));
              }
             }
            } else { //vertical
              if(gesture.duration > 65000) {
              if(gesture.direction[1] > 0){
                  console.log("up");
                  console.log(gesture.duration);
                  if(map.getZoom() < 9)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A - 0.5,map.getCenter().F));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A - 0.04,map.getCenter().F));
              } else {
                  console.log("down");
                  console.log(gesture.duration);
                  if(map.getZoom() < 9)
                    map.setCenter(new google.maps.LatLng(map.getCenter().A + 0.5,map.getCenter().F));
                  else
                    map.setCenter(new google.maps.LatLng(map.getCenter().A + 0.04,map.getCenter().F));
              }                  
            }
            }
              }
              break;
        }
    });
  }
});
    var controller = Leap.loop(options, function(frame) {
        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.grabStrength > 0.9) {
                //positions = hand.screenPosition();
                //map.setZoom(positions[2]);
                //map.setCenter(marker.getPosition());
                //console.log(hand.screenPosition());
                //map.panBy(x:number, y:number)
                //console.log(map.getCenter());
            }
        }
    }).use('screenPosition', {
        scale: 0.75
    });
});

function datasetAlcoholInjury() {
  d3.json("json/2010-2011-Alcohol-Involved-Motor-Vehicle-Crash-Inj.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Alcohol Vehicular Injuries  <span class="caret"></span>';
}
function datasetTotalInjury() {
  d3.json("json/2010-2011-Total-Injuries-Due-To-Motor-Vehicle-Cras.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Total Vehicular Injuries  <span class="caret"></span>';
}
function datasetAnxiety(){
  d3.json("json/2010-2012-Anxiety-Disorder.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Anxiety Disorder <span class="caret"></span>';
}
function datasetAssults(){
  d3.json("json/2010-2012-Assaults.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Assults  <span class="caret"></span>';
}
function datasetAsthma() {
  d3.json("json/2010-2012-Asthma.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Asthma  <span class="caret"></span>';
}
function datasetAlcohol() {
  d3.json("json/2010-2012-Chronic-Alcohol-Related-Disorder.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Alcohol Related Disorder  <span class="caret"></span>';
}
function datasetSubstance() {
  d3.json("json/2010-2012-Chronic-Substance-Related-Disorder.json", function(data) {
    console.log(data);
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Substance Related Disorder  <span class="caret"></span>';
}
function datasetFirearm() {
  d3.json("json/2010-2012-Firearm-Related-Injuries.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Firearm Injuries  <span class="caret"></span>';
}
function datasetHomicide() {
  d3.json("json/2010-2012-Homicide.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Homicide  <span class="caret"></span>';
}
function datasetLungCancer() {
  d3.json("json/2010-2012-Lung-Cancer.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Lung Cancer <span class="caret"></span>';
}
function datasetSelfInjury() {
  d3.json("json/2010-2012-Self-Inflicted-Injury.json", function(data) {
    datasetSelected = data;
    loadD3();
    changeColor();
  });
  var element = document.getElementById('dataset');
  element.innerHTML = 'Self Injury  <span class="caret"></span>';
}
function filterMale() {
  genderSelected = "male";
  loadD3Gender();
  changeColor();
  console.log("male selected");
  var element = document.getElementById('gender');
  element.innerHTML = 'Male  <span class="caret"></span>';
}
function filterFemale() {
  genderSelected = "female";
  loadD3Gender();
  changeColor();
  console.log("female selected");
  var element = document.getElementById('gender');
  element.innerHTML = 'Female <span class="caret"></span>';
}
function clearGender() {
  console.log("gender filter cleared");
  var element = document.getElementById('gender');
  element.innerHTML = '<span class="caret"></span>';
}
function filter0To14() {
  ageSelected = "ages0-14";
  loadD3Age();
  changeColor();
  console.log("0-14 selected");
  var element = document.getElementById('age');
  element.innerHTML = '0 - 14 <span class="caret"></span>';
}
function filter15To24() {
  ageSelected = "ages15-24";
  loadD3Age();
  changeColor();
  console.log("15-24 selected");
  var element = document.getElementById('age');
  element.innerHTML = '15 - 24 <span class="caret"></span>';
}
function filter25To44() {
  ageSelected = "ages25-44";
  loadD3Age();
  changeColor();
  console.log("25-44 selected");
  var element = document.getElementById('age');
  element.innerHTML = '25 - 44  <span class="caret"></span>';
}
function filter45To64() {
  ageSelected = "ages45-64";
  loadD3Age();
  changeColor();
  console.log("45-64 selected");
  var element = document.getElementById('age');
  element.innerHTML = '45 - 64  <span class="caret"></span>';
}
function filter65() {
  ageSelected = "ages65+";
  loadD3Age();
  changeColor();
  console.log("65+ selected");
  var element = document.getElementById('age');
  element.innerHTML = '65 +  <span class="caret"></span>';
}



