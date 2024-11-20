angular.module('myModule', ["checklist-model"])
.controller('NumbersCtrl', function ($scope, $http) {
    $http({
        method: 'POST',
        url: 'http://localhost/SCSPSERVICES/api/getdepartments',
        data: '',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function (data1, status, headers, config) {
        $scope.departments = data1;
        {
            //var data = $.param({
            //    FinancialYear: $scope.SelectedFinyrId,
            //    Month: mnth,
            //    dtlhd: $scope.SelectedDtlhead,
            //    departments: dept,
            //    SectorCd: $scope.SelectedSectr
            //});
            //console.log(data);

            data = 'FinancialYear=1718&Month=7&dtlhd=422,423&departments=1,2,3,4,5,6,7,8,9,10&SectorCd=1,2';

            $http({
                method: 'POST',
                url: 'http://localhost/SCSPSERVICES/api/getdashboardvalues',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (data, status, headers, config) {

                $scope.DeptarrayText = [];
                $scope.AllocarrayText = [];
                $scope.ReleasearrayText = [];
                $scope.ExparrayText = [];

                $scope.dashboardvalues = data;
                if ($scope.dashboardvalues.length > 0) {
                    for (var j = 0; j < $scope.dashboardvalues.length; j++) {
                        $scope.DeptarrayText.push($scope.dashboardvalues[j].DeptName);
                        $scope.AllocarrayText.push($scope.dashboardvalues[j].Allocation);
                        $scope.ReleasearrayText.push($scope.dashboardvalues[j].Release);
                        $scope.ExparrayText.push($scope.dashboardvalues[j].Expenditure);
                    }
                }
                else {
                    $scope.DeptarrayText.push('No Data');
                    $scope.AllocarrayText.push(0);
                    $scope.ReleasearrayText.push(0);
                    $scope.ExparrayText.push(0);
                }

                // Set up the chart
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'container',
                        type: 'column',
                        options3d: {
                            enabled: true,
                            alpha: 0,
                            beta: 0,
                            depth: 20,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: 'SCSP/TSP Progres Report'
                    },
                    xAxis: {
                        categories: $scope.DeptarrayText,
                        labels: {
                            skew3d: true,
                            style: {
                                fontSize: '16px'
                            }
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: 'Amount In Lakhs',
                            skew3d: true
                        }
                    },

                    tooltip: {
                        headerFormat: '<b>{point.key}</b><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
                    },

                    series: [{
                        name: 'Allocation',
                        data: $scope.AllocarrayText,
                        stack: '1'
                    }, {
                        name: 'Release',
                        data: $scope.ReleasearrayText,
                        stack: '2'
                    }, {
                        name: 'Expenditure',
                        data: $scope.ExparrayText,
                        stack: '3'
                    }]
                });

                function showValues() {
                    $('#alpha-value').html(chart.options.chart.options3d.alpha);
                    $('#beta-value').html(chart.options.chart.options3d.beta);
                    $('#depth-value').html(chart.options.chart.options3d.depth);
                }

                // Activate the sliders
                $('#sliders input').on('input change', function () {
                    chart.options.chart.options3d[this.id] = parseFloat(this.value);
                    showValues();
                    chart.redraw(false);
                });

                showValues();

            }).error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
    }).error(function (data, status, header, config) {
        $scope.ResponseDetails = "Data: " + data +
            "<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });


    $scope.depts = [1,2,3,4,5,6,7,8,9,10];

    $scope.months = [new Date().getMonth() + 1];

    $scope.qmonths = ['1,2,3'];

    //$scope.checkAll = function () {
    //    $scope.depts = [];
    //    for (var i = 0; i < $scope.departments.length; i++) {
    //        $scope.depts.push($scope.departments[i].id);
    //    }
    //    console.log($scope.depts);
    //};
    //$scope.uncheckAll = function () {
    //    $scope.depts = [];
    //    console.log($scope.depts);
    //};

    //$scope.checkFirst = function () {
    //    $scope.depts.splice(0, $scope.depts.length);
    //    $scope.depts.push('1');
    //};

    $scope.DepartmentSubmit = function () {
        //$scope.IsVisible = false;
        var dept = "", mnth = "";
        for (var i = 0; i < $scope.depts.length; i++) {
            dept += $scope.depts[i] + ',';
        }

        if ($scope.content == 'month') {
            for (var i = 0; i < $scope.months.length; i++) {
                mnth += $scope.months[i] + ',';
            }
        }
        else {
            for (var i = 0; i < $scope.qmonths.length; i++) {
                mnth += $scope.qmonths[i] + ',';
            }
        }

        dept = dept.substring(0, dept.length - 1);
        mnth = mnth.substring(0, mnth.length - 1);

        //console.log(mnth);

        if (dept != "") {

            var data = $.param({
                FinancialYear: $scope.SelectedFinyrId,
                Month: mnth,
                dtlhd: $scope.SelectedDtlhead,
                departments: dept,
                SectorCd: $scope.SelectedSectr
            });

            //console.log(data);

            //data = 'FinancialYear=1718&Month=7&dtlhd=422,423&departments=1&SectorCd=1,2';

            $http({
                method: 'POST',
                url: 'http://localhost/SCSPSERVICES/api/getdashboardvalues',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (data, status, headers, config) {

                $scope.DeptarrayText = [];
                $scope.AllocarrayText = [];
                $scope.ReleasearrayText = [];
                $scope.ExparrayText = [];

                $scope.dashboardvalues = data;
                if ($scope.dashboardvalues.length > 0) {
                    for (var j = 0; j < $scope.dashboardvalues.length; j++) {
                        $scope.DeptarrayText.push($scope.dashboardvalues[j].DeptName);
                        $scope.AllocarrayText.push($scope.dashboardvalues[j].Allocation);
                        $scope.ReleasearrayText.push($scope.dashboardvalues[j].Release);
                        $scope.ExparrayText.push($scope.dashboardvalues[j].Expenditure);
                    }
                }
                else {
                    $scope.DeptarrayText.push('No Data');
                    $scope.AllocarrayText.push(0);
                    $scope.ReleasearrayText.push(0);
                    $scope.ExparrayText.push(0);
                }

                // Set up the chart
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'container',
                        type: 'column',
                        options3d: {
                            enabled: true,
                            alpha: 0,
                            beta: 0,
                            depth: 20,
                            viewDistance: 25
                        }
                    },
                    title: {
                        text: 'SCSP/TSP Progres Report'
                    },
                    xAxis: {
                        categories: $scope.DeptarrayText,
                        labels: {
                            skew3d: true,
                            style: {
                                fontSize: '16px'
                            }
                        }
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: 'Amount In Lakhs',
                            skew3d: true
                        }
                    },

                    tooltip: {
                        headerFormat: '<b>{point.key}</b><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
                    },

                    series: [{
                        name: 'Allocation',
                        data: $scope.AllocarrayText,
                        stack: '1'
                    }, {
                        name: 'Release',
                        data: $scope.ReleasearrayText,
                        stack: '2'
                    }, {
                        name: 'Expenditure',
                        data: $scope.ExparrayText,
                        stack: '3'
                    }]
                });

                function showValues() {
                    $('#alpha-value').html(chart.options.chart.options3d.alpha);
                    $('#beta-value').html(chart.options.chart.options3d.beta);
                    $('#depth-value').html(chart.options.chart.options3d.depth);
                }

                // Activate the sliders
                $('#sliders input').on('input change', function () {
                    chart.options.chart.options3d[this.id] = parseFloat(this.value);
                    showValues();
                    chart.redraw(false);
                });

                showValues();

            }).error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
        else {
            $window.alert('Entered Name is : ');
        }
    }
});