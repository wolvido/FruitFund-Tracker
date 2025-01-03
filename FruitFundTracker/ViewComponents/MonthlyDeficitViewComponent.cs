﻿using FruitFundTracker.UI.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FruitFundTracker.UI.ViewComponents
{
    public class MonthlyDeficitViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var model = new MonthlyDeficitViewModel
            {
                MonthlyDeficit = 900,
                MonthlyContributionDeficit = 400,
                MonthlyRepaymentDeficit = 500,
                MonthlyTotalDue = 1000
            };

            return View(model);
        }
    }
}
