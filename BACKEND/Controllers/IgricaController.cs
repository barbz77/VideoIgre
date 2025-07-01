using BACKEND.Data;
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

    }


}
