using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using mission5.Models;

namespace mission5.Controllers;

/// <summary>
/// Main controller for the language learning tutoring website
/// Handles routing for the home page, calculator, and error pages
/// </summary>
public class HomeController : Controller
{
    /// <summary>
    /// Displays the home page with language learning information
    /// Route: /Home/Index or just /
    /// </summary>
    /// <returns>The Index view showing linguistic learning levels</returns>
    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    /// Displays the tutoring calculator page
    /// Route: /Home/Calculator
    /// </summary>
    /// <returns>The Calculator view for calculating tutoring costs</returns>
    public IActionResult Calculator()
    {
        return View();
    }

    /// <summary>
    /// Displays the error page when an unhandled exception occurs
    /// Route: /Home/Error
    /// </summary>
    /// <returns>The Error view with request tracking information</returns>
    /// <remarks>
    /// ResponseCache attribute ensures error pages are never cached,
    /// so users always see current error information
    /// </remarks>
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        // Create error view model with request ID for troubleshooting
        // Uses the current Activity ID if available, otherwise falls back to HttpContext trace identifier
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}