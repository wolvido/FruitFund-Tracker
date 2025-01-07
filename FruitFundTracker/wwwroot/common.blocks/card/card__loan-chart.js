$(function () {
    let paidLoanNum = parseInt($(".card__paid_loan > strong").text());
    let deficitLoanNum = parseInt($(".card__deficit_loan > strong").text());

    //set colors
    let paidLoanColor = "#6dc458";
    let deficitLoanColor = "#ff3a3a";

    const ctx = $(".card__loan-chart");

    let data = {
        labels: ["Paid", "Deficit"],
        datasets: [
            {
                data: [paidLoanNum, deficitLoanNum],
                backgroundColor: [paidLoanColor, deficitLoanColor]
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