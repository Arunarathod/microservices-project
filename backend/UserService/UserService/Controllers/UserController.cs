using Microsoft.AspNetCore.Mvc;

namespace UserService.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : Controller
    {
        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
        {
            return Ok(new { message = $"User Created: {user.Name} - {user.Email}" });
        }
    }

    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
