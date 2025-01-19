require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const optionalConfigs = {
  PORT: process.env.PORT || 3000,
};

const requiredConfigs = {
  TEST: process.env.TEST,
};

for (const key in requiredConfigs) {
  // ==: check null or undefined
  if (requiredConfigs[key] == null) {
    throw new Error(`Missing required environment variable ${key}`);
  }
}

module.exports = {
  ...optionalConfigs,
  ...requiredConfigs,
};
