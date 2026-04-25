using System;
using Microsoft.EntityFrameworkCore;
using Class_Library_Travel_Manager;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy => policy.WithOrigins("http://localhost:3000") // portul
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Configurează pipeline-ul HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReact");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();