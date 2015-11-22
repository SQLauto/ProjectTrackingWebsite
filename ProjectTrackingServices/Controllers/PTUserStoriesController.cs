using ProjectTrackingServices.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectTrackingServices.Controllers
{
    [EnableCors(origins: "http://localhost:54758", headers: "*", methods: "*")]
    public class PTUserStoriesController : ApiController
    {
        UserStoriesRepository repository;

        public PTUserStoriesController()
        {
            repository = new UserStoriesRepository();
        }

        // GET api/ptuserstories
        [Route("api/ptuserstories")]
        public IEnumerable<UserStory> Get()
        {
            return repository.GetAllUserStories();
        }

        // GET api/ptuserstories/5
        [Route("api/ptuserstories/{id?}")]
        public UserStory Get(int id)
        {
            return repository.GetUserStory(id);
        }

        [Route("api/ptuserstories")]
        public IEnumerable<UserStory> Post([FromBody]UserStory us)
        {
            return repository.InsertUserStory(us);
        }

        [Route("api/ptuserstories")]
        public IEnumerable<UserStory> Put(UserStory us)
        {
            return repository.UpdateUserStory(us);
        }

        [Route("api/ptuserstories")]
        public IEnumerable<UserStory> Delete(UserStory us)
        {
            return repository.DeleteUserStory(us);
        }
    }
}
