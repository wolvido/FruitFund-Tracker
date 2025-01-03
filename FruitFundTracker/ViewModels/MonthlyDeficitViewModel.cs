namespace FruitFundTracker.UI.ViewModels
{
    public class MonthlyDeficitViewModel
    {
        public decimal MonthlyDeficit { get; set; }
        public decimal MonthlyContributionDeficit { get; set; }

        public decimal MonthlyRepaymentDeficit { get; set; }
        public decimal MonthlyTotalDue { get; set; }
    }
}
