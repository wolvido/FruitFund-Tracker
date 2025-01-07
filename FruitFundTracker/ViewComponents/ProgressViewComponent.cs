using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class ProgressViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }

        //public IViewComponentResult GetProgress()
        //{

        //}
    }
}
