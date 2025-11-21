using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using DotNetDevLottery;
using DotNetDevLottery.Services;
using DotNetDevLottery.Services.Implementations;
using Blazored.LocalStorage;
using Microsoft.FluentUI.AspNetCore.Components;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddSingleton(sp =>
{
    return new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) };
});

builder.Services.AddSingleton<IEventService, EventService>();
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddFluentUIComponents();

await builder.Build().RunAsync();
