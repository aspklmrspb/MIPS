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
        private readonly string connectionString;

        public UserController(IConfiguration appConfiguration, ILogger<UserController> logger, SSOServiceSoap sSOServiceSoap)
        {
            this.configuration = appConfiguration;
            this.logger = logger;
            this.sSOServiceSoap = sSOServiceSoap;
            this.connectionString = appConfiguration.GetConnectionString("ExamAPIConnection");
        }
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> LoginAsync([FromBody]LoginUser loginuser)
        {
            try
            {
                var result = await sSOServiceSoap.SSOGetPortalUserByTokenAsync(loginuser.token);
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
