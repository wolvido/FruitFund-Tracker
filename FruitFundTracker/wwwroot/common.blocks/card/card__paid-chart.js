$(function () {

    let contributionPaid = $(".card__info_contribution-paid > strong");
    let loanPaid = $(".card__info_loan-paid > strong");
    let monthlyTotalDue = $(".card__monthly-due").first();

    let contributionPaidNum = parseInt(contributionPaid.text());
    let loanPaidNum = parseInt(loanPaid.text());
    let monthlyTotalDueNum = parseInt(monthlyTotalDue.text());

    let monthlyRemainingDue = monthlyTotalDueNum - (contributionPaidNum + loanPaidNum);

    //set colors
    let contributionPaidColor = "blue";
    let loanPaidColor = "#512DA8";
    let monthlyRemainingDueColor = "red";

    contributionPaid.css("color", contributionPaidColor);
    loanPaid.css("color", loanPaidColor);

    const ctx = $(".card__paid-chart");

    let data = {
        labels: ["Contribution Paid", "Loan Paid", "Due"],
        datasets: [
            {
                data: [contributionPaidNum, loanPaidNum, monthlyRemainingDue],
                backgroundColor: [contributionPaidColor, loanPaidColor, monthlyRemainingDueColor]
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