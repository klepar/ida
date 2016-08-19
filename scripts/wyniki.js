



	$('#Grid').mixitup({
	targetSelector: '.karta_wyszukania', 
	});
	
	
	
	$('#Grid2').mixitup({
	targetSelector: '.karta_wyszukania-2',
	filterSelector: '.filter2',
	});
	
	$("#sortowanie").click(function(e){
	$(function(){	  
	$('#sl1').slider('setValue', '100');
	$("#suwak-val-1").val('100');
	$('#sl2').slider('setValue', '0');
	$("#suwak-val-2").val('0');
	$('#sl3').slider('setValue', '0');
	$("#suwak-val-3").val('0');
	$('#sl4').slider('setValue', '0');
	$("#suwak-val-4").val('0');
	$('#sl5').slider('setValue', '0');
	$("#suwak-val-5").val('0');
	$('#Grid').mixitup('sort','data-myorder');
	$('#w11_chart_4').empty();
	$('#w11_chart_4').attr('id', 'w11_chart_1_bis');
	var data = [
  [100],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red']);

var svg = d3.select("#w11_chart_1_bis").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('100');

	$('#w11_chart_5').empty();
	$('#w11_chart_5').attr('id', 'w11_chart_2_bis');
	$('.karta_wyszukania.5 .oceny-karta').hide();
	var data = [
  [97, 3],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red','white']);

var svg = d3.select("#w11_chart_2_bis").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('97');
	
	
	$('#w11_chart_1').empty();
	$('#w11_chart_1').attr('id', 'w11_chart_3_bis');
	
	var data = [
  [97,3],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red','white']);

var svg = d3.select("#w11_chart_3_bis").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('97');
	
	$('#w11_chart_3').empty();
	$('#w11_chart_3').attr('id', 'w11_chart_4_bis');
	
	var data = [
  [84,16],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red','white']);

var svg = d3.select("#w11_chart_4_bis").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('84');
	
	
	$('#w11_chart_2').empty();
	$('#w11_chart_2').attr('id', 'w11_chart_5_bis');
	
	var data = [
  [81, 19],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red','white']);

var svg = d3.select("#w11_chart_5_bis").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
	  .attr("fill", "white")
      .text('81');

	
	
	});
	
e.preventDefault();
	
});
	
	
	
	
	
	$("#sl1").on('slide', function(slideEvt) {
$("#suwak-val-1").val(slideEvt.value);
});
$("#sl2").on('slide', function(slideEvt) {
$("#suwak-val-2").val(slideEvt.value);
});
$("#sl3").on('slide', function(slideEvt) {
$("#suwak-val-3").val(slideEvt.value);
});
$("#sl4").on('slide', function(slideEvt) {
$("#suwak-val-4").val(slideEvt.value);
});
$("#sl5").on('slide', function(slideEvt) {
$("#suwak-val-5").val(slideEvt.value);
});
	
	
$(document).ready(function(){
		
		$('.block-cart.1 .front-cart').click(function(e){
			$('.block-cart.1').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.1 button.btn.btn-compare.1').click(function(e){
			$('.block-cart.1').removeClass('flip');
			e.preventDefault();
		});
		$('.block-cart.1 .averse.1').click(function(e){
			$('.block-cart.1').removeClass('flip');
			e.preventDefault();
		});
		
		
		
		$('.block-cart.2 .front-cart').click(function(e){
			$('.block-cart.2').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.2 button.btn.btn-compare.2').click(function(e){
			$('.block-cart.2').removeClass('flip');
			e.preventDefault();
		});
		$('.block-cart.2 .averse.2').click(function(e){
			$('.block-cart.2').removeClass('flip');
			e.preventDefault();
		});
		
		
		$('.block-cart.3 .front-cart').click(function(e){
			$('.block-cart.3').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.3 button.btn.btn-compare.3').click(function(e){
			$('.block-cart.3').removeClass('flip');
			e.preventDefault();
		});
		$('.block-cart.3 .averse.3').click(function(e){
			$('.block-cart.3').removeClass('flip');
			e.preventDefault();
		});
		
		
		$('.block-cart.4 .front-cart').click(function(e){
			$('.block-cart.4').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.4 button.btn.btn-compare.4').click(function(e){
			$('.block-cart.4').removeClass('flip');
			e.preventDefault();
		});
		$('.block-cart.4 .averse.4').click(function(e){
			$('.block-cart.4').removeClass('flip');
			e.preventDefault();
		});
		
		$('.block-cart.5 .front-cart').click(function(e){
			$('.block-cart.5').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.5 button.btn.btn-compare.5').click(function(e){
			$('.block-cart.5').removeClass('flip');
			e.preventDefault();
		});
		$('.block-cart.5 .averse.5').click(function(e){
			$('.block-cart.5').removeClass('flip');
			e.preventDefault();
		});
		
		
		
		$('.block-cart.6 .front-cart').click(function(e){
			$('.block-cart.6').addClass('flip');
			e.preventDefault();
		});
		$('.block-cart.6 .averse.6').click(function(e){
			$('.block-cart.6').removeClass('flip');
			e.preventDefault();
		});
});	
	
/** graph */
	
var data = [
  [20,  20, 20, 20, 20, 20],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red', 'green', 'blue', 'yellow','#FFBE33','white']);

var svg = d3.select("#w11_chart_2").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
	  .attr("fill", "white")
      .text('80');	
	
 /** graph */
 
var data = [
  [10,  30, 20, 20, 20],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red', 'green', 'blue', 'yellow','orange']);

var svg = d3.select("#w11_chart_1").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('100');	

/** graph */

var data = [
  [12,  12, 12, 12, 12, 40],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red', 'green', 'blue', 'yellow','orange','white']);

var svg = d3.select("#w11_chart_3").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('60');

/** graph */


var data = [
  [8,  8, 8, 8, 8, 60],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red', 'green', 'blue', 'yellow','orange','white']);

var svg = d3.select("#w11_chart_4").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('40');





/** graph */
	  
var data = [
  [4,  4, 4, 4, 4, 80],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['red', 'green', 'blue', 'yellow','#FFBE33','white']);

var svg = d3.select("#w11_chart_5").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('20');
	  

	  




/** graph2 */
	  
var data = [
  [100],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['green']);

var svg = d3.select("#w12_chart_1").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('100');

/** graph2 */
	  
var data = [
  [20, 80],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['white','green']);

var svg = d3.select("#w12_chart_2").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('80');

/** graph2 */
	  
var data = [
  [30,30,40],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['green','green','white']);

var svg = d3.select("#w12_chart_3").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('60');

/** graph2 */
	  
var data = [
  [40,60],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['green','white']);

var svg = d3.select("#w12_chart_4").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('40');

/** graph2 */
	  
var data = [
  [20, 80],
  ];

var m = 0,
    r = 60,
    z = d3.scale.ordinal()
    .range(['green','white']);

var svg = d3.select("#w12_chart_5").selectAll("svg")
    .data(data)
  .enter().append("svg:svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("svg:g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
	.enter().append("svg:path")
    .attr("d", d3.svg.arc()
    .innerRadius(r / 2)
    .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });

svg.append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text('20');

