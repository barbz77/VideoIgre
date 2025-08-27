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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Platforma>()
              .HasMany(p => p.Igrice)
              .WithMany(i => i.Platforme)
              .UsingEntity<Dictionary<string, object>>("igricePlatforme",
               j => j.HasOne<Igrica>().WithMany().HasForeignKey("igrica"),
               j => j.HasOne<Platforma>().WithMany().HasForeignKey("platforma"),
               j => j.ToTable("igricePlatforme")
              );
            modelBuilder.Entity<Zanr>()
            .HasMany(p => p.Igrice)
            .WithMany(i => i.Zanrovi)
            .UsingEntity<Dictionary<string, object>>("igriceZanrovi",
             j => j.HasOne<Igrica>().WithMany().HasForeignKey("igrica"),
             j => j.HasOne<Zanr>().WithMany().HasForeignKey("zanr"),
             j => j.ToTable("igriceZanrovi")
            );



        }
    }
}
