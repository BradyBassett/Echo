using Microsoft.EntityFrameworkCore;

namespace Echo.Api.Data;

public class EchoDbContext : DbContext
{
	protected readonly IConfiguration Configuration;

	public EchoDbContext(IConfiguration configuration)
	{
		Configuration = configuration;
	}

	protected override void OnConfiguring(DbContextOptionsBuilder options)
	{
		options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"));
	}
}
