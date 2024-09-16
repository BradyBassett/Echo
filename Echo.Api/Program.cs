using Echo.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Load Environment Variables
var dbUsername = Environment.GetEnvironmentVariable("ECHO_DB_USERNAME");
var dbPassword = Environment.GetEnvironmentVariable("ECHO_DB_PASSWORD");
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!
	.Replace("{DB_USERNAME}", dbUsername)
	.Replace("{DB_PASSWORD}", dbPassword);

// Adding DbContext
builder.Services.AddDbContext<EchoDbContext>(options =>
	options.UseNpgsql(connectionString));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
