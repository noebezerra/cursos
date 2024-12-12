class ErrorBase extends Error {
  constructor(message = 'Error interno do servidor', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  restosta(res) {
    res
      .status(this.status)
      .send({ messsage: this.message, status: this.status });
  }
}

export default ErrorBase;
