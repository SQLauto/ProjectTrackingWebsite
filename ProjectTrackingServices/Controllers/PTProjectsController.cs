using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectTrackingServices.Controllers
{
    public class PTProjectsController : ApiController
    {
        // GET: api/PTProjects
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PTProjects/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PTProjects
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PTProjects/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PTProjects/5
        public void Delete(int id)
        {
        }
    }
}
