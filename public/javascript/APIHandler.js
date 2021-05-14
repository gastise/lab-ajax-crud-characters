class APIHandler {
  constructor (baseURL) {
    this.api = axios.create({ baseURL });
  }

  getFullList = () => this.api.get("/characters");

  getOneRegister = (id) => this.api.get("/characters/" + id);

  createOneRegister = (newCharacter) => this.api.post("/characters", newCharacter);

  updateOneRegister () {
  }

  deleteOneRegister = (id) => this.api.delete("/characters/" + id);

}
