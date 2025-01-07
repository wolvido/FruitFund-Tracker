using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyPaidViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyPaidViewModel
            {
                TotalPaid = 100,
                ContributionPaid = 50,
                RepaymentPaid = 50,
                TotalDue = 1000
            
            };

            return View(model);
        }
    }
}
