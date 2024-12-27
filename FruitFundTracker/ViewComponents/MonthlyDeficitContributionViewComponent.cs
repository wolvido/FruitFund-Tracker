using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyDeficitContributionViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyDeficitViewModel
            {
                MonthlyDeficitContribution = 1200
            };
            return View(model);
        }
    }
}
