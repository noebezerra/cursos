module.exports = (obj) => {
  for (let prop in obj) {
    if (/Id|id/.test(prop)) {
      obj[prop] = Number(obj[prop]);
    }
  }
  return obj;
};
