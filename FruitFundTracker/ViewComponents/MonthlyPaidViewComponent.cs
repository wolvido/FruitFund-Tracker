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
                MonthlyPaid = 100,
                MonthlyContributionPaid = 50,
                MonthlyRepaymentPaid = 50,
                MonthlyTotalDue = 1000
            
            };

            return View(model);
        }
    }
}
