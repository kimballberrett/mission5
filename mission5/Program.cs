// Create the web application builder with command line arguments
// This initializes the ASP.NET Core hosting environment and configuration
var builder = WebApplication.CreateBuilder(args);

// Add services to the dependency injection container
// AddControllersWithViews enables MVC pattern with both controllers and Razor views
builder.Services.AddControllersWithViews();

// Build the web application with all configured services
var app = builder.Build();

// Configure the HTTP request pipeline
// This determines how the application responds to web requests
if (!app.Environment.IsDevelopment())
{
    // In production, use the error handler to show user-friendly error pages
    app.UseExceptionHandler("/Home/Error");

    // Enable HTTP Strict Transport Security (HSTS) for enhanced security
    // HSTS tells browsers to only use HTTPS for this site
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// Force all HTTP requests to redirect to HTTPS for security
app.UseHttpsRedirection();

// Enable routing middleware to match incoming requests to endpoints
app.UseRouting();

// Enable authorization middleware (for future use if authentication is added)
app.UseAuthorization();

// Enable serving of static files (CSS, JavaScript, images) with optimized caching
app.MapStaticAssets();

// Configure the default MVC route pattern
// This maps URLs to controller actions: /{controller}/{action}/{id}
// Default route: / goes to HomeController.Index()
app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();

// Start the web application and begin listening for requests
app.Run();