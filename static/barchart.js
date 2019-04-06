
//month for any year you want
//stats are the number of occurences of each crime, the index in stats corresponds to the index in the crimes array

  //var data = {'SOUTHEAST':[{month:'01', stats:[197, 5, 0]}, {month:'02', stats:[146, 7, 0]}, {month:'03', stats:[161, 6, 1]}, {month:'04', stats:[143, 8, 1]}, {month:'05', stats:[151, 9, 1]}, {month:'06', stats:[148, 11, 0]}, {month:'07', stats:[159, 4, 2]}, {month:'08', stats:[180, 7, 0]}, {month:'09', stats:[163, 3, 0]}, {month:'10', stats:[171, 8, 0]}, {month: '11', stats:[157, 3, 0]}, {month:'12', stats:[171, 5, 1]}], 'NORTHWEST': {'01': [74, 2, 0], '02': [63, 1, 0], '03': [94, 0, 1], '04': [72, 0, 0], '05': [81, 3, 0], '06': [69, 1, 0], '07': [81, 2, 0], '08': [83, 0, 0], '09': [84, 0, 0], '10': [95, 0, 0], '11': [73, 1, 1], '12': [75, 1, 0]}, 'NORTH': {'01': [103, 4, 0], '02': [69, 0, 1], '03': [69, 2, 0], '04': [91, 7, 0], '05': [108, 2, 1], '06': [105, 2, 0], '07': [88, 3, 1], '08': [92, 3, 0], '09': [108, 0, 0], '10': [92, 1, 0], '11': [89, 2, 2], '12': [96, 3, 0]}, 'SOUTHWEST': {'01': [115, 1, 1], '02': [82, 2, 1], '03': [101, 2, 1], '04': [94, 1, 1], '05': [116, 3, 0], '06': [108, 5, 0], '07': [112, 1, 0], '08': [120, 3, 0], '09': [118, 2, 0], '10': [120, 2, 1], '11': [92, 3, 1], '12': [104, 0, 0]}, 'NORTHEAST': {'01': [142, 4, 1], '02': [103, 1, 0], '03': [120, 1, 1], '04': [126, 4, 1], '05': [135, 3, 1], '06': [101, 0, 1], '07': [113, 3, 1], '08': [137, 5, 0], '09': [111, 1, 0], '10': [97, 2, 1], '11': [100, 0, 0], '12': [131, 2, 0]}, 'DOWNTOWN': {'01': [40, 1, 2], '02': [32, 0, 0],'03': [47, 1, 0], '04': [69, 1, 0], '05': [58, 1, 0], '06': [50, 0, 1], '07':[73, 1, 2], '08': [49, 4, 2], '09': [63, 0, 1], '10': [45, 0, 1], '11': [49, 2, 1], '12': [48, 4, 0]}};

  var data = {'SOUTHEAST': [{'month': '01', 'stats': [197, 5, 0]}, {'month': '02', 'stats': [146, 7, 0]}, {'month': '03', 'stats': [161, 6, 1]}, {'month': '04', 'stats': [143, 8, 1]}, {'month': '05', 'stats': [151, 9, 1]}, {'month': '06', 'stats': [148, 11, 0]}, {'month': '07', 'stats': [159, 4, 2]}, {'month': '08', 'stats': [180, 7, 0]}, {'month': '09', 'stats': [163, 3, 0]}, {'month': '10', 'stats': [171, 8, 0]}, {'month': '11', 'stats': [157, 3, 0]}, {'month': '12', 'stats': [171, 5, 1]}], 'NORTHWEST': [{'month': '01', 'stats': [74, 2, 0]}, {'month': '02', 'stats': [63, 1, 0]}, {'month': '03', 'stats': [94, 0, 1]}, {'month': '04', 'stats': [72, 0, 0]}, {'month': '05', 'stats': [81, 3, 0]}, {'month': '06', 'stats': [69, 1, 0]}, {'month': '07', 'stats': [81, 2, 0]}, {'month': '08', 'stats': [83, 0, 0]}, {'month': '09', 'stats': [84, 0, 0]}, {'month': '10', 'stats': [95, 0, 0]}, {'month': '11', 'stats': [73, 1, 1]}, {'month': '12', 'stats': [75, 1, 0]}], 'NORTH': [{'month': '01', 'stats': [103, 4, 0]}, {'month': '02', 'stats': [69, 0, 1]}, {'month': '03', 'stats': [69, 2, 0]}, {'month': '04', 'stats': [91, 7, 0]}, {'month': '05', 'stats': [108, 2, 1]}, {'month': '06', 'stats': [105, 2, 0]}, {'month': '07', 'stats': [88, 3, 1]}, {'month': '08', 'stats': [92, 3, 0]}, {'month': '09', 'stats': [108, 0, 0]}, {'month': '10', 'stats': [92, 1, 0]}, {'month': '11', 'stats': [89, 2, 2]}, {'month': '12', 'stats': [96, 3, 0]}], 'SOUTHWEST': [{'month': '01', 'stats': [115, 1, 1]}, {'month': '02', 'stats': [82, 2, 1]}, {'month': '03', 'stats': [101, 2, 1]}, {'month': '04', 'stats': [94, 1, 1]}, {'month': '05', 'stats': [116, 3, 0]}, {'month': '06', 'stats': [108, 5, 0]}, {'month': '07', 'stats': [112, 1, 0]}, {'month': '08', 'stats': [120, 3, 0]}, {'month': '09', 'stats': [118, 2, 0]}, {'month': '10', 'stats': [120, 2, 1]}, {'month': '11', 'stats': [92, 3, 1]}, {'month': '12', 'stats': [104, 0, 0]}], 'NORTHEAST': [{'month': '01', 'stats': [142, 4, 1]}, {'month': '02', 'stats': [103, 1, 0]}, {'month': '03', 'stats': [120, 1, 1]}, {'month': '04', 'stats': [126, 4, 1]}, {'month': '05', 'stats': [135, 3, 1]}, {'month': '06', 'stats': [101, 0, 1]}, {'month': '07', 'stats': [113, 3, 1]}, {'month': '08', 'stats': [137, 5, 0]}, {'month': '09', 'stats': [111, 1, 0]}, {'month': '10', 'stats': [97, 2, 1]}, {'month': '11', 'stats': [100, 0, 0]}, {'month': '12', 'stats': [131, 2, 0]}], 'DOWNTOWN': [{'month': '01', 'stats': [40, 1, 2]}, {'month': '02', 'stats': [32, 0, 0]}, {'month': '03', 'stats': [47, 1, 0]}, {'month': '04', 'stats': [69, 1, 0]}, {'month': '05', 'stats': [58, 1, 0]}, {'month': '06', 'stats': [50, 0, 1]}, {'month': '07', 'stats': [73, 1, 2]}, {'month': '08', 'stats': [49, 4, 2]}, {'month': '09', 'stats': [63, 0, 1]}, {'month': '10', 'stats': [45, 0, 1]}, {'month': '11', 'stats': [49, 2, 1]}, {'month': '12', 'stats': [48, 4, 0]}]};

  var district = 'SOUTHEAST'
  var ids = ['a', 'b', 'c'];
  var crimes = ['car theft', 'murder', 'vagrancy'];

  d3.select('.categories').selectAll('.checkbox')
    .data(ids)
    .enter()
    .append('div')
    .attr('class', 'checkbox')
    .append('label').html(function(id, index) {
      var checkbox = '<input id="' + id + '" type="checkbox" class="category" checked="checked">';
      return checkbox + crimes[index];
    });

  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 800 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  var x = d3.scaleLinear().range([0, width]);

  var y0 = d3.scaleBand().range([0, height]);

  var y1 = d3.scaleBand();


  var color = d3.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y0);

  var svg = d3.select(".graph").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.select('#district').on('change', function() {
    district = d3.select('#district').node().value

    checkBoxes();
  });

  d3.select('.categories').selectAll('.category').on('change', function() {
    checkBoxes();
  });
  renderGraph();

  function checkBoxes(){
    var x = d3.select('.categories').selectAll('.category:checked');

    var ids = []
    x.nodes().forEach(function(d){
        ids.push(d.id);
    });

    updateGraph(ids)
    updateGraph(ids)
  }

  function renderGraph() {
    x.domain([0, 0]);

    y0.domain(data[district].map(function(d) { return d.month; }));

    y1.domain(crimes).rangeRound([0, 20]);


    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
  }

  function updateGraph(selectedIds) {
    //console.log(district);

    var monthsData = data[district].map(function(monthData) {
      return {
        month: monthData.month,
        ages: selectedIds.map(function(selectedId) {
          var index = ids.findIndex(function(id) {
            return selectedId === id;
          });
          return {
            id: ids[index],
            name: crimes[index],
            value: monthData.stats[index]
          };
        })
      }
    });
    //console.log(monthsData);

    x.domain([0, d3.max(monthsData, function(d) { return d3.max(d.ages, function(d) { return d.value }); })]);

    y0.domain(monthsData.map(function(d) { return d.month; }));

    y1.domain(ids).rangeRound([0, 20]);

    svg.selectAll('.axis.x').call(xAxis);
    svg.selectAll('.axis.y').call(yAxis);

    var month = svg.selectAll(".month")
      .data(monthsData);

      //console.log(month);

    month.enter().append("g")
      .attr("class", "month")
      .attr("transform", function(d) { return "translate(0, " + y0(d.month) + ")"; });

    var age = month.selectAll("rect")
      .data(function(d) { return d.ages; });


    age.enter().append("rect")
    .attr("x", 0)
    .attr("y", function(d, index) { return y1(ids[index]); })
    .attr("id", function(d) { return d.id; })
    .style("fill", function(d) { return color(d.name); })
    .text(function(d) { return d.name })
    .transition()
    .attr("width", function(d) { return x(d.value); })
    .attr("height", 10);
//console.log(age);

    age
      .attr("x", 0)
      .attr("y", function(d, index) { return y1(ids[index]); })
      .attr("id", function(d) { return d.id; })
      .style("fill", function(d) { return color(d.name); })
      .text(function(d) { return d.name })
      .transition()
      .attr("width", function(d) { return x(d.value); })
      .attr("height", 10);

    age.exit().transition().attr("width", 0).remove();


    var legend = svg.selectAll(".legend")
        .data(monthsData[0].ages.map(function(age) { return age.name; }));
        console.log(legend);

    legend.enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + (200 + i * 20) + ")"; });

    var legendColor = legend.selectAll('.legend-color').data(function(d) { return [d]; });
    legendColor.enter().append("rect")
      .attr('class', 'legend-color')
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

    var legendText = legend.selectAll('.legend-text').data(function(d) { console.log(d); return [d]; });

    legendText.enter().append("text")
      .attr('class', 'legend-text')
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

    legend.exit().remove();

  }

  checkBoxes();
  checkBoxes();
