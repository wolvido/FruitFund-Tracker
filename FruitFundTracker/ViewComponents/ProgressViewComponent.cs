using FruitFundTracker.UI.Enums;
using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text.Json;


namespace FruitFundTracker.UI.ViewComponents
{
    public class ProgressViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {


            List<MonthProgressViewModel> list =
            [
                new MonthProgressViewModel
                {
                    Month = Months.January,
                    MonthlyContributions = new MonthlyContributionsViewModel
                    {
                        PaidContributions = 10
                    },
                    MonthlyLoans = new MonthlyLoansViewModel
                    {
                        PaidLoans = 5,
                        UnPaidLoans = 10,
                    }
                },

                new MonthProgressViewModel
                {
                    Month = Months.February,
                    MonthlyContributions = new MonthlyContributionsViewModel
                    {
                        PaidContributions = 20
                    },
                    MonthlyLoans = new MonthlyLoansViewModel
                    {
                        PaidLoans = 20,
                        UnPaidLoans = 10,
                    }
                },

                new MonthProgressViewModel
                {
                    Month = Months.March,
                    MonthlyContributions = new MonthlyContributionsViewModel
                    {
                        PaidContributions = 30
                    },
                    MonthlyLoans = new MonthlyLoansViewModel
                    {
                        PaidLoans = 30,
                        UnPaidLoans = 10,
                    }

                }
            ];

            var model = new YearProgressViewModel
            {
                MonthProgressList = list,
                YearProgress = 1
            };

            return View(model);
        }
    }
}
