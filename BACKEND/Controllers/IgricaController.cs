﻿using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class IgricaController : ControllerBase
    {
        private readonly EdunovaContext _context;

        public IgricaController(EdunovaContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Igrice);
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
                var igrica = _context.Igrice.Find(sifra);
                if(igrica == null)
                {
                    return NotFound();
                }
                return Ok(_context.Igrice);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
        [HttpPost]
        public IActionResult Post(Igrica igrica)
        {

            try
            {
                _context.Igrice.Add(igrica);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, igrica);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }


        }
        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Igrica igrica)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora bit veca od 0" });
            }

            try
            {
                Igrica i = _context.Igrice.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }

                i.Naziv = igrica.Naziv;
                i.Ocjena = igrica.Ocjena;
                i.godinaIzdanja = igrica.godinaIzdanja;

                _context.Igrice.Update(i);
                _context.SaveChanges();
                return Ok(i);

            }
            catch(Exception e)
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
                Igrica i = _context.Igrice.Find(sifra);
                if (i == null)
                {
                    return NotFound();
                }
      
                _context.Igrice.Remove(i);
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
