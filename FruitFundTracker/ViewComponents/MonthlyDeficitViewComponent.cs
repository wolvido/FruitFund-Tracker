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
                MonthlyDeficit = 1000,
                MonthlyContributionDeficit = 500,
                MonthlyRepaymentDeficit = 500
            };

            return View(model);
        }
    }
}
