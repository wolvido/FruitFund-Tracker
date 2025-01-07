$(function () {
    let paidContributionNum = parseInt($(".card__paid_contribution > strong").text());
    let deficitContributionNum = parseInt($(".card__deficit_contribution > strong").text());

    //set colors
    let paidContributionColor = "#6dc458";
    let deficitContributionColor = "#ff3a3a";

    const ctx = $(".card__contribution-chart");

    let data = {
        labels: ["Paid", "Deficit"],
        datasets: [
            {
                data: [paidContributionNum, deficitContributionNum],
                backgroundColor: [paidContributionColor, deficitContributionColor]
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
                    display: false,
                }
            }
        },
    });
});