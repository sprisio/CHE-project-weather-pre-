// Pie Chart Data
const pieChartData = {
    labels: ['Temperature', 'Humidity', 'Wind Speed',],
    datasets: [{
        data: [26.92, 80, 10,],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56',]
    }]
};

// Line Chart Data
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Temperature Over Months',
        data: [14, 27, 24.92, 34, 32, 31],
        borderColor: '#4CAF50',
        fill: false
    }]
};

// Render Pie Chart
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCtx, {
    type: 'pie',
    data: pieChartData
});

// Render Line Chart
const lineChartCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData
});
