namespace BACKEND.Models
{
    public class Zanr : Entitet
    {
        public string Naziv { get; set; } = "";
        public ICollection<Igrica>? Igrice { get; set; }

    }
}