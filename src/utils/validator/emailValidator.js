// eslint-disable-next-line
const emailValidator = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

export default emailValidator;
