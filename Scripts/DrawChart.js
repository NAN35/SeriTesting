var BASE_URL = "http://localhost:25019/scspuserbased";
var jsonData;
var jsonData1;

var deptnames=[];
var deptallocvalues = [];
var deptrelasevalues = [];
var deptexpvalues = [];

function gethorchart() {
    /*Retrieve Appointment Details*/
    var xmlhttpDepartment = new XMLHttpRequest();
    var url = BASE_URL + "/getdata.aspx?prog=3";
    xmlhttpDepartment.open('GET', url, true);
    xmlhttpDepartment.setRequestHeader("Accept", "application/json");
//    $("#loadingwork").removeClass("novisible");
//    $("#loadingwork").addClass("visible");
    xmlhttpDepartment.send();
    xmlhttpDepartment.onreadystatechange = function () {
        if (xmlhttpDepartment.readyState == 4) {
            if (xmlhttpDepartment.status == 200) {

                LoadDeptData(xmlhttpDepartment.responseText);
            }
            else {
                return ("Error ->" + xmlhttpDepartment.responseText);
            }
        }
    };
}

function LoadDeptData(recorddata) {
    jsonData1 = JSON.parse(recorddata);
   
    DepartmentStat();
}

function DepartmentStat() {
    var dataLength = jsonData1.length;
    var totalFemale = 0;
    var workingFemale = 0;

    for (var i = 0; i < dataLength; i++) {
        //deptnames = deptnames + "\"" + jsonData1[i].Department + "\",";

        deptnames.push(jsonData1[i].Department);
        deptallocvalues.push(jsonData1[i].Allocation);
        deptrelasevalues.push(jsonData1[i].Release);
       deptexpvalues.push(jsonData1[i].Expenditure);
    }
//    deptnames = deptnames + "]";
//    deptnames = deptnames.replace(",]", "");
//    
//    
    horizonralgraph();
}
function horizonralgraph() {


    

    console.log(deptnames);
    var barChartData = {
        labels: deptnames,
        datasets: [
	  			{
                    label: "Allocation",
                    fillColor: "#f4946c",
	  			    strokeColor: "rgba(220,220,220,0.8)",
	  			    highlightFill: "#facebb",
	  			    highlightStroke: "rgba(220,220,220,1)",
	  			    data: deptallocvalues
	  			},
                {
                    label: "Release",
                    fillColor: "#369cf4",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "#71e3fd",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: deptrelasevalues
                }
                ,
                {
                    label: "Expenditure in Lakhs",
                    fillColor: "#5bb734",
                    strokeColor: "#43a72d",
                    highlightFill: "#abcea6",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: deptexpvalues
                }
	  		]
    };

	 var ctx = document.getElementById("hbarcanvas").getContext("2d");

	 var chart = new Chart(ctx).HorizontalBar(barChartData, {
	     responsive: true,
	     barShowStroke: false
	 });

	//  document.getElementById('js-legend').innerHTML = chart.generateLegend();
    function escapeHTML(html) {
        return html.replace(/&/g, "&amp;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;")
                   .replace(/"/g, "&quot;")
                   .replace(/'/g, "&#039;");
    }
    
    // Assign sanitized data to innerHTML
    document.getElementById('js-legend').innerHTML = escapeHTML(chart.generateLegend());
}

function bargrapgh() {

    var all = document.getElementById("MainContent_lblallcoation").innerHTML;
    var rel = document.getElementById("MainContent_lblrelease").innerHTML;
    var exp = document.getElementById("MainContent_lblexpenditure").innerHTML
    console.log(all / 1000);
    console.log(rel / 1000);

    var barData = {
        labels: ["Allocation", "Release", "Expenditure"],
        datasets: [
                    {
                        fillColor: ["#ebccd1", "#bce8f1", "#159f5c", ],
                        strokeColor: ["#ebccd1", "#bce8f1", "#159f5c"],
                        data: [all, rel, exp]
                    }

                ]
    }


                var startWithDataset = 1;
                var startWithData = 1;

                var opt1 = {
                    animationStartWithDataset: startWithDataset,
                    animationStartWithData: startWithData,
                    animationSteps: 100,
                    canvasBorders: false,
                    canvasBordersWidth: 3,
                    canvasBordersColor: "black",
                    graphTitle: "Over All Progress",
                    legend: true,
                    inGraphDataShow: true,
                    annotateDisplay: true,
                    graphTitleFontSize: 18

                } 
    // get bar chart canvas
    var income = document.getElementById("income").getContext("2d");
    // draw bar chart
    new Chart(income).Bar(barData,opt1);
}

function generatePieChart1() {

    var all = document.getElementById("MainContent_lblallcoation").innerHTML;
    var rel = document.getElementById("MainContent_lblrelease").innerHTML;
    var exp = document.getElementById("MainContent_lblexpenditure").innerHTML;

    document.getElementById("canvas").innerHTML = "";
    var ctx = document.getElementById("canvas").getContext("2d");
    var elements = {
        labels: [""],
        datasets: [
           {
               data: [Math.round((exp / all) * 100*100)/100],
               fillColor: "#159f5c",
               title: "Progress Against Allocation %"
           },
           {
               data: [100 - Math.round(((exp / all) * 100*100)/100)],
               fillColor: "#ebccd1",
               title: "Allocation to be Spent %"
           }
            ]
    };
//var data = elements;
	var startWithDataset = 1;
	var startWithData = 1;

	var opt1 = {
	    animationStartWithDataset: startWithDataset,
	    animationStartWithData: startWithData,
	    animateRotate: true,
	    animateScale: true,
	    animationByData: false,
	    animationSteps: 50,
	    canvasBorders: false,
	    canvasBordersWidth: 3,
	    canvasBordersColor: "black",
	    graphTitle: "Expenditure Against Allocation",
	    legend: true,
	    inGraphDataShow: false,
	    animationEasing: "linear",
	    annotateDisplay: true,
	    spaceBetweenBar: 5,
	    graphTitleFontSize: 18

	}
    var piechart = new Chart(ctx).Pie(elements,opt1);
    $("#loadingwork").removeClass("visible");
    $("#loadingwork").addClass("novisible");
    //document.getElementById('jspie-legend').innerHTML = piechart.generateLegend();
}

function generatePieChart2() {

    var all = document.getElementById("MainContent_lblallcoation").innerHTML;
    var rel = document.getElementById("MainContent_lblrelease").innerHTML;
    var exp = document.getElementById("MainContent_lblexpenditure").innerHTML;

    document.getElementById("canvas2").innerHTML = "";
    var ctx = document.getElementById("canvas2").getContext("2d");
    var elements2 = {
        labels: [""],
        datasets: [
           {
               data: [Math.round((exp / rel) * 100 *100)/100],
               fillColor: "#159f5c",
               title: "Progress Against Release %"
           },
           {
               data: [100 - (Math.round((exp / rel) * 100 *100)/100)],
               fillColor: "#bce8f1",
               title: "Release to be Spent %"
           }
            ]
    };
//var data = elements;
var startWithDataset = 1;
var startWithData = 1;
var opt1 = {
    animationStartWithDataset: startWithDataset,
    animationStartWithData: startWithData,
    animateRotate: true,
    animateScale: true,
    animationByData: false,
    animationSteps: 50,
    canvasBorders: false,
    canvasBordersWidth: 3,
    canvasBordersColor: "black",
    graphTitle: "Expenditure Against Release",
    legend: true,
    inGraphDataShow: false,
    animationEasing: "linear",
    annotateDisplay: true,
    spaceBetweenBar: 5,
    graphTitleFontSize: 18

}
    var piechart = new Chart(ctx).Pie(elements2,opt1);
    $("#loadingwork2").removeClass("visible");
    $("#loadingwork2").addClass("novisible");
    //document.getElementById('jspie2-legend').innerHTML = piechart.generateLegend();
}