$(function () {
    let paidContributionNum = parseInt($(".card__value_paid > strong").text());
    let deficitContributionNum = parseInt($(".card__value_deficit > strong").text());

    console.log(paidContributionNum);
    console.log(deficitContributionNum);

    //set colors
    let paidContributionColor = "green";
    let deficitContributionColor = "red";

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