using BACKEND.Data;
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
    }

}
