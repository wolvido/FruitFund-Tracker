$(function () {
    let paidLoanNum = parseInt($(".card__paid_loan > strong").text());
    let deficitLoanNum = parseInt($(".card__deficit_loan > strong").text());

    //set colors
    let paidLoanColor = "green";
    let deficitLoanColor = "red";

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