using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectTrackingServices.Controllers
{
    public class PTUserStoryController : ApiController
    {
        // GET: api/PTUserStory
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PTUserStory/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PTUserStory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PTUserStory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PTUserStory/5
        public void Delete(int id)
        {
        }
    }
}
