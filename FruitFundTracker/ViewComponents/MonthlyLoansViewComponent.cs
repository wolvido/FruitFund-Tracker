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
                PaidLoans = 50,
                UnPaidLoans = 500,
                PaidBorrowers = 2,
                UnPaidBorrowers = 1
            };

            return View(model);
        }
    }
}
