using FruitFundTracker.UI.Enums;

namespace FruitFundTracker.UI.ViewModels
{
    public class MonthProgressViewModel
    {
        public Months Month { get; set; }
        public MonthlyContributionsViewModel? MonthlyContributions { get; set; }
        public MonthlyDeficitViewModel? MonthlyDeficit { get; set; }
        public MonthlyLoansViewModel? MonthlyLoans { get; set; }
        public MonthlyPaidViewModel? MonthlyPaid { get; set; }

    }
}
