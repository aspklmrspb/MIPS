using nrdr13.acr.org.SSOService;
using System.ServiceModel;

namespace MIPS_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = new ConfigurationBuilder()
                                .SetBasePath(builder.Environment.ContentRootPath)
                                .AddJsonFile("appsettings.json")
                                .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
                                .Build();
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<SSOServiceSoap>(provider =>
            {
                var binding = new BasicHttpsBinding();
                var endpoint = new EndpointAddress(configuration["NrdrAPIConfiguration:TokenValidatorURL"]);
                var client = new SSOServiceSoapClient(binding, endpoint);
                return client;
            });
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors(); // Enable CORS
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}