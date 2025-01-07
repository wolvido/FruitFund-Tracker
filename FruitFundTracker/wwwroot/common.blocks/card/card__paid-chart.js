$(function () {

    let contributionPaid = $(".card__paid_contribution").first();
    let loanPaid = $(".card__paid_loan").first();
    let monthlyTotalDue = $(".card__monthly-due").first();

    let contributionPaidNum = parseInt(contributionPaid.text());
    let loanPaidNum = parseInt(loanPaid.text());
    let monthlyTotalDueNum = parseInt(monthlyTotalDue.text());

    let monthlyRemainingDue = monthlyTotalDueNum - (contributionPaidNum + loanPaidNum);

    //set colors
    let contributionPaidColor = "#4077cc";
    let loanPaidColor = "#704dcb";
    let monthlyRemainingDueColor = "#ff3a3a";

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