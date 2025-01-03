namespace FruitFundTracker.UI.ViewModels
{
    public class MonthlyPaidViewModel
    {
        public decimal MonthlyPaid { get; set; }
        public decimal MonthlyContributionPaid { get; set; }
        public decimal MonthlyRepaymentPaid { get; set; }
        public decimal MonthlyTotal { get; set; }

        public decimal MonthlyTotalDue { get; set; }
    }
}
