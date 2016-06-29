$(function () {

    $('#radar').highcharts({

        chart: {
            polar: true,
            type: 'line',
            backgroundColor:null
        },

        title: {
            text: '',
            x: -80
        },
        
        credits: {
            enabled: false
        },
        
        exporting: { enabled: false },

        xAxis: {
            categories: ['JAVASCRIPT', 'PYTHON', 'C++',
                    'C#', 'BASH', 'JAVA'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            tickInterval: 20,
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'June 2016',
            data: [75, 80, 55, 65, 60, 90],
            pointPlacement: 'on'
        }]

    });
    
    // Node JS
    var doughnutData = [
        {
            value: 85,
            color:"#1abc9c"
        },
        {
            value : 15,
            color : "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("nodejs").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // AngularJS
    doughnutData = [
        {
            value: 85,
            color:"#1abc9c"
        },
        {
            value : 15,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("angularjs").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // ReactJS
    doughnutData = [
        {
            value: 70,
            color:"#1abc9c"
        },
        {
            value : 30,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("reactjs").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // jQuery
    doughnutData = [
        {
            value: 60,
            color:"#1abc9c"
        },
        {
            value : 40,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // Twisted
    doughnutData = [
        {
            value: 80,
            color:"#1abc9c"
        },
        {
            value : 20,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("twisted").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // Django
    doughnutData = [
        {
            value: 70,
            color:"#1abc9c"
        },
        {
            value : 30,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("django").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // CherryPy
    doughnutData = [
        {
            value: 70,
            color:"#1abc9c"
        },
        {
            value : 30,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("cherryPy").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // Flask
    doughnutData = [
        {
            value: 65,
            color:"#1abc9c"
        },
        {
            value : 35,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("flask").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // WPF
    doughnutData = [
        {
            value: 70,
            color:"#1abc9c"
        },
        {
            value : 30,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("wpf").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // ASP.NET
    doughnutData = [
        {
            value: 70,
            color:"#1abc9c"
        },
        {
            value : 30,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("aspnet").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // Java2EE
    doughnutData = [
        {
            value: 60,
            color:"#1abc9c"
        },
        {
            value : 40,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("java2ee").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});

    // Apache Solr
    doughnutData = [
        {
            value: 60,
            color:"#1abc9c"
        },
        {
            value : 40,
            color : "#ecf0f1"
        }
    ];
    myDoughnut = new Chart(document.getElementById("solr").getContext("2d")).Doughnut(doughnutData, {percentageInnerCutout : 60});


    // Skills Animation
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});