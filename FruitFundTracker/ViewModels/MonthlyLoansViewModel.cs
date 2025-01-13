namespace FruitFundTracker.UI.ViewModels
{
    public class MonthlyLoansViewModel
    {
        public decimal PaidLoans { get; set; }
        public decimal UnPaidLoans { get; set; }
        public decimal TotalLoans => PaidLoans + UnPaidLoans;
        public int PaidBorrowers { get; set; }
        public int UnPaidBorrowers { get; set; }
    }
}
