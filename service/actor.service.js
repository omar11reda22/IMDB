const actorrepo = require("../repos/actor.repo");

class ActorService {
  async createactor(actorData) {
    return await actorrepo.addnewactor(actorData);
  }

  async getAllactors() {
    return await actorrepo.getallactors();
  }
}

module.exports = new ActorService();
