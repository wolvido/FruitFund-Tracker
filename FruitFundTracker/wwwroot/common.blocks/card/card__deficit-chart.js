$(function() {

    console.log('card__deficit-chart.js');

    const ctx = $(".card__deficit-chart");

    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19],
                backgroundColor: ['red', 'blue']
            }
        ]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        },
    });

});