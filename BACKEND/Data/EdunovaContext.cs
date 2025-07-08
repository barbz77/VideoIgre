using BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Data
{
    public class EdunovaContext : DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) : base(options)
        {

        }

        public DbSet<Igrica> Igrice {  get; set; }
        public DbSet<Zanr> Zanrovi { get; set; }
        public DbSet<Platforma> Platforme { get; set; }
    }
}
