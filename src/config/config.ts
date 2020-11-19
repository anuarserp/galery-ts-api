export default {
   DB: {
      MONGO_DATABASE: process.env.MONGO_DATABASE || "galery-ts-api",
      MONGO_USER: process.env.MONGOUSER || "admin",
      MONGO_PASSWORD: process.env.MONGO_PASSWOORD || "admin",
      MONGO_HOST: process.env.MONGO_HOST || "localhost",
   },
   PORT: process.env.PORT || 3000,
};
