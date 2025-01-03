$(function() {

    let contributionDeficit = $(".card__contribution-deficit > strong");
    let loanDeficit = $(".card__loan > strong");

    let contributionDeficitInt = parseInt(contributionDeficit.text());
    let loanDeficitInt = parseInt(loanDeficit.text());

    //set colors
    let contributionDeficitColor = "#FF6F00";
    let loanDeficitColor = "#FFD54F";

    contributionDeficit.css("color", contributionDeficitColor); 
    loanDeficit.css("color", loanDeficitColor);

    const ctx = $(".card__deficit-chart");

    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [contributionDeficitInt, loanDeficitInt],
                backgroundColor: [contributionDeficitColor, loanDeficitColor]
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