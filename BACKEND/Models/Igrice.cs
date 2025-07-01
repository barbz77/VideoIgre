namespace BACKEND.Models
{
    public class Igrica : Entitet
    {
        public string Naziv { get; set; } = "";
        public decimal Ocjena { get; set; }
        public DateTime GodinjaIzdanja { get; set; }
    }
}
