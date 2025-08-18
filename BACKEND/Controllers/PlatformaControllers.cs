using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PlatformaController : ControllerBase
    {
        private readonly EdunovaContext _context;

        public PlatformaController(EdunovaContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Platforme);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }

        [HttpGet("{sifra:int}")]
        public IActionResult Get(int sifra)
        {
            if (sifra <= 0)
            {
                return BadRequest("Sifra nije dobra");
            }
            try
            {
                var platforma = _context.Platforme.Find(sifra);
                if (platforma == null)
                {
                    return NotFound();
                }
                return Ok(_context.Platforme);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }

        [HttpPost]
        public IActionResult Post(Platforma platforma)
        {

            try
            {
                _context.Platforme.Add(platforma);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, platforma);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }


        }
        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Platforma platforma)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora bit veca od 0" });
            }

            try
            {
                Platforma i = _context.Platforme.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }

                i.Naziv = platforma.Naziv;


                _context.Platforme.Update(i);
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
                Platforma i = _context.Platforme.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }

                _context.Platforme.Remove(i);
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
