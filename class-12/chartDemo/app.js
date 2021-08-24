var ctx = document.getElementById('myChart').getContext('2d');

const numberLabels = [1, 2, 3, 4, 5, 6];
const fruitLabels = ['apple', 'orange', 'pineapple', 'mango', 'grape', 'peach'];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: fruitLabels,
        datasets: [{
            label: 'I love pizza',
            data: [100, 10, 8, 20, 90, 3],
            backgroundColor: [
                'red', 'orange', 'yellow', 'green', 'blue', 'purple'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});