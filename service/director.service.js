const directorrepo = require("../repos/director.repo");   


class DirectorService {
  async createdirector(actorData) {
    return await directorrepo.addnewdirector(actorData);
  }

  async getAlldirectors() {
    return await directorrepo.getalldirectors();
  }


}

module.exports = new DirectorService(); 
