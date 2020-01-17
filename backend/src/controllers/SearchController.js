const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    //buscar todos devs num raio de 10km
    //filtro por tecnologia

    const { latitude, longitude, techs } = req.query;

    const techArray = parseStringAsArray(techs);
    console.log(techArray);

    const devs = await Dev.find({
      techs: {
        $in: techArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          }
        }
      }
    });

    return res.json({ devs });
  }
};
