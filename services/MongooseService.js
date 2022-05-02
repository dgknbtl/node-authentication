class MongooseService {
  constructor(Model) {
    this.model = Model;
  }

  async insert(body) {
    return await this.model.create(body);
  }

  async findBy(property, value) {
    return this.model.find({ [property]: value });
  }
}

module.exports = MongooseService;
