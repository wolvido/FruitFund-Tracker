$(function() {

    let contributionDeficit = $(".card__info_contribution-deficit > strong");
    let loanDeficit = $(".card__info_loan > strong");
    let monthlyTotalDue = $(".card__monthly-due").first();

    let contributionDeficitNum = parseInt(contributionDeficit.text());
    let loanDeficitNum = parseInt(loanDeficit.text());
    let monthlyTotalDueNum = parseInt(monthlyTotalDue.text());

    let monthlyRemainingDue = monthlyTotalDueNum - (contributionDeficitNum + loanDeficitNum);

    //set colors
    let contributionDeficitColor = "#FF6F00";
    let loanDeficitColor = "#FFD54F";
    let monthlyRemainingDueColor = "green";

    contributionDeficit.css("color", contributionDeficitColor); 
    loanDeficit.css("color", loanDeficitColor);

    const ctx = $(".card__deficit-chart");

    let data = {
        labels: ["Contribution Deficit", "Loan", "Paid"],
        datasets: [
            {
                data: [contributionDeficitNum, loanDeficitNum, monthlyRemainingDue],
                backgroundColor: [contributionDeficitColor, loanDeficitColor, monthlyRemainingDueColor]
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