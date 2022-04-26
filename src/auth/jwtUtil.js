import jwtDecode from "jwt-decode";
import moment from "moment";

const ValidateToken = token => {
  if (!token || token.length <= 0) return false;

  try {
    const userToken = jwtDecode(token);

    if (!userToken) return false;

    let expireDate = moment.unix(userToken.exp).toDate();

    if (expireDate < Date.now()) return false;
  } catch (error) {
    console.log(error);
  }

  return true;
};

export default ValidateToken;
