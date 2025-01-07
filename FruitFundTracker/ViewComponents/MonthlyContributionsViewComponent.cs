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
                PaidContributions = 50,
                UnPaidContributions = 400,
                PaidMembers = 2,
                UnPaidMembers = 1
            };

            return View(model);
        }
    }
}
