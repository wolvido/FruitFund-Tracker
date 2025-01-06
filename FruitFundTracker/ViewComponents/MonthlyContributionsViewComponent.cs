using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyContributionsViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyContributionsViewModel
            {
                MonthlyPaidContributions = 50,
                MonthlyUnPaidContributions = 400,
                MonthlyPaidMembers = 2,
                MonthlyUnPaidMembers = 1
            };

            return View(model);
        }
    }
}
