namespace FruitFundTracker.UI.ViewModels
{
    public class MonthProgressViewModel
    {
        public string? Month { get; set; }
        public decimal ContributionsPaid { get; set; }
        public decimal LoansPaid { get; set; }
        public decimal ContributionsUnpaid { get; set; }
        public decimal LoansUnpaid { get; set; }
        public decimal TotalPaid { get; set; }
        public decimal TotalDue { get; set; }
        public decimal PaidBorrowers { get; set; }
        public decimal UnPaidBorrowers { get; set; }
        public decimal PaidMembers { get; set; }
        public decimal UnPaidMembers { get; set; }
    }
}
