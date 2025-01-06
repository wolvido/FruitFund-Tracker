using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyLoansViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyLoansViewModel
            {
                MonthlyPaidLoans = 50,
                MonthlyUnPaidLoans = 500,
                MonthlyPaidBorrowers = 2,
                MonthlyUnPaidBorrowers = 1
            };

            return View(model);
        }
    }
}
