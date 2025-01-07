﻿namespace FruitFundTracker.UI.ViewModels
{
    public class MonthlyContributionsViewModel
    {
        public decimal PaidContributions { get; set; }
        public decimal UnPaidContributions { get; set; }
        public int PaidMembers { get; set; }
        public int UnPaidMembers { get; set; }
    }
}
