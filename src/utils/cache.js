import moment from "moment";

const prefix = "cache.";
const expiryInMinutes = 5;

const keys = { currentUser: "currentUser" };

const store = (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    localStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = item => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);

  let limit = expiryInMinutes;

  //Auth token
  if (item.value.exp) {
    limit = moment.unix(item.value.exp).diff(now, "minutes");
  }

  return now.diff(storedTime, "minutes") > limit;
};

const get = key => {
  try {
    const value = localStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      localStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const remove = key => {
  try {
    const value = localStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (item) {
      localStorage.removeItem(prefix + key);
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  store,
  remove,
  prefix,
  keys,
};
