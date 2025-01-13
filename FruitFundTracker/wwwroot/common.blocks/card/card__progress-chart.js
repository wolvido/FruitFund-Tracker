$(function () {

    let YearProgressData = JSON.parse(window.YearProgressData);

    //let january = YearProgressData.MonthProgressList[0];

    //let contributions = january.MonthlyContributions.PaidContributions;

    //console.log(contributions);

    let contributionsProgress = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1000, 1000];
    let loans = [-200, -100, -400, -400, -200, -600, -600, -400, -400, -600, -400, -100];
    let repayment = [0, 100, 0, 0, 200, 0, 0, 200, 0, 0, 200, 400];


    let data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            label: 'Contributions',
            data: contributionsProgress,
            borderColor: 'green',
            backgroundColor: 'rgba(105, 255, 17, 0.2)',
            fill: true,
            tension: .2
        },
        {
            label: 'Loans',
            data: loans,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 63, 26, 0.2)',
            fill: true,
            tension: .2
        },
        {
            label: 'Repaid Loans',
            data: repayment,
            borderColor: 'blue',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            fill: true,
            tension: .2
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {  
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    stacked: true
                }
            },
            plugins: {
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                }
            },
            interaction: {
                intersect: false,
            },
        },
    }

    const ctx = $(".card__progress-chart");

    new Chart(ctx, config);


});