namespace BACKEND.Models
{
    public class Platforma : Entitet
    {
        public string Naziv { get; set; } = "";
        public ICollection<Igrica>? Igrice{ get; set; }

    }
}