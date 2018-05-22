const errors = require('./errors.map');
module.exports = (status) => {
    let e = new Error(errors[status]);
    e.status = status;
    return e;
}