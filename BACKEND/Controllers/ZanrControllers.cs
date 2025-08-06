using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ZanrController : ControllerBase
    {
        private readonly EdunovaContext _context;

        public ZanrController(EdunovaContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Zanrovi);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
        [HttpPost]
        public IActionResult Post(Zanr zanr)
        {

            try
            {
                _context.Zanrovi.Add(zanr);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, zanr);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }


        }
        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Zanr zanr)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora bit veca od 0" });
            }

            try
            {
                Zanr i = _context.Zanrovi.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }

                i.Naziv = zanr.Naziv;


                _context.Zanrovi.Update(i);
                _context.SaveChanges();
                return Ok(i);

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }

        [HttpDelete("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora bit veca od 0" });
            }

            try
            {
                Zanr i = _context.Zanrovi.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }

                _context.Zanrovi.Remove(i);
                _context.SaveChanges();
                return NoContent();

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
