using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nrdr13.acr.org.SSOService;

namespace MIPS_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly ILogger<UserController> logger;
        private readonly SSOServiceSoap sSOServiceSoap;

        public UserController(IConfiguration appConfiguration, ILogger<UserController> logger, SSOServiceSoap sSOServiceSoap)
        {
            this.configuration = appConfiguration;
            this.logger = logger;
            this.sSOServiceSoap = sSOServiceSoap;
        }
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> LoginAsync([FromBody]LoginUser loginuser)
        {
            try
            {
                var result = await sSOServiceSoap.SSOGetPortalUserByTokenAsync(loginuser.token);
                var cookieOptions = new CookieOptions
                {
                    // Set the cookie properties
                    Path = "/", // Cookie is accessible site-wide
                    HttpOnly = true, // Cookie is accessible only through HTTP requests
                    Secure = true, // Cookie is sent only over secure HTTPS connections
                    SameSite = SameSiteMode.Strict, // Cookie is not sent on cross-site requests
                    Expires = DateTime.UtcNow.AddDays(7) // Cookie expiration date
                };

                // Add the cookie to the response
                Response.Cookies.Append("YourCookieName", "YourCookieValue", cookieOptions);

                return Ok(result);
            }
            catch (Exception Ex)
            {
                string Msg = Ex.Message;
            }
            return Ok("Error in Login");
        }
    }
}
