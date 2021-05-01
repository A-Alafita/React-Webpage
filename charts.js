const delta = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(delta, {
    type: "bar",
    data: {
        labels: ['data1', 'data2', 'data3', 'data4', 'data5'],
        datasets: [{
            label: 'Num datos',
            data: [10, 9, 54, 15, 32],// data baseinformation 
            backgroundColor: [
                'rgb(90, 88, 214)',
                'rgb(65, 194, 242 )',
                'rgb(236, 41, 30 )',
                'rgb(24, 179, 109 )',
                'rgb(24, 179, 166  )',


            ]

        }]
    }
});


const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Progress",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]};


const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART,{
    type:'line',
    data: data
});



const ctx = document.getElementById("disp").getContext("2d");
let disp = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ['git1', 'git2', 'git3'],
        datasets: [{
            label: 'Num datos',
            data: [10, 9, 15],// data baseinformation 
            backgroundColor: [
                'rgb(90, 88, 214)',
                'rgb(65, 194, 242 )',
                'rgb(236, 41, 30 )'
            ]

        }]
    }
});

const experience = document.getElementById("radar-chart");
let iconliving = new Chart(experience, {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});


