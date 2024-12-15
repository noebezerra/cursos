const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaControler extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

module.exports = MatriculaControler;
