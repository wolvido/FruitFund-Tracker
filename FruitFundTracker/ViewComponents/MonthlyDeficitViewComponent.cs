using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyDeficitViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyDeficitViewModel
            {
                TotalDeficit = 900,
                ContributionDeficit = 400,
                RepaymentDeficit = 500,
                TotalDue = 1000
            };

            return View(model);
        }
    }
}
