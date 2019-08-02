

class Properties  {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;   
      this.abilities = data.abilities[0].ability.name;
      this.abilitiesOne = data.abilities[1].ability.name;
      this.weight = data.weight;
      this.base_experience = data.base_experience;
    }
  }
  
  export default Properties;