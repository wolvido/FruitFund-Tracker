namespace FruitFundTracker.UI.ViewModels
{
    public class YearProgressViewModel
    {
        public List<MonthProgressViewModel>? MonthProgressList { get; set; }
        public double YearProgress { get; set; }

        public string YearProgressPercentage => $"{YearProgress:P0}";
    }
}
