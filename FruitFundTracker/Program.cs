using static System.Net.Mime.MediaTypeNames;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddHsts(options =>
//{
//    options.Preload = true;
//    options.IncludeSubDomains = true;
//    options.MaxAge = TimeSpan.FromDays(365);
//});

// Add services to the container.
builder.Services.AddControllersWithViews();

//web optimizer service added
builder.Services.AddWebOptimizer(pipeline =>
{
    pipeline.AddFiles("text/css", "common.blocks/**/*.css", "desktop.blocks/**/*.css", "mobile.blocks/**/*.css");
    pipeline.AddFiles("text/javascript", "common.blocks/**/*.js", "desktop.blocks/**/*.js", "mobile.blocks/**/*.js");

    pipeline.MinifyJsFiles("text/javascript", "common.blocks/**/*.js", "desktop.blocks/**/*.js", "mobile.blocks/**/*.js");

    pipeline.AddCssBundle("/bundle.css", "common.blocks/**/*.css", "desktop.blocks/**/*.css", "mobile.blocks/**/*.css");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.MapControllers();

app.UseHttpsRedirection();

app.UseWebOptimizer();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.Run();
