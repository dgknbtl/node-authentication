class MongooseService {
  constructor(Model) {
    this.model = Model;
  }

  async insert(body) {
    return await this.model.create(body);
  }
}

module.exports = MongooseService;
