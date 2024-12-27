using Microsoft.AspNetCore.Mvc;
using FruitFundTracker.UI.ViewModels;

namespace FruitFundTracker.UI.Controllers
{
    [Route("[controller]")]
    public class FinancialReportsController : Controller
    {
        [Route("[action]")]
        public IActionResult MonthlyDeficit()
        {
            var model = new MonthlyDeficitViewModel
            {
                MonthlyDeficit = 1000
            };
            return PartialView("~/Views/Shared/FinancialReports/_MonthlyDeficitPartial.cshtml", model);
        }
    }
}
