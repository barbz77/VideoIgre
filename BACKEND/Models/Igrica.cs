using System.ComponentModel.DataAnnotations.Schema;

namespace BACKEND.Models
{
    public class Igrica : Entitet
    {
        public string Naziv { get; set; } = "";
        public byte Ocjena { get; set; }
        public DateTime GodinaIzdanja { get; set; }
        public ICollection<Platforma> Platforme { get; set; } = new List<Platforma>();
        public ICollection<Zanr> Zanrovi { get; set; } = new List<Zanr>();


    }
}
