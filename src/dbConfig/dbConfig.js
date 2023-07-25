import mongoose from "mongoose";
export function connect() {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected successfully");
    });
    connection.on("error", (err) => {
      console.log("error occured", err);
    });
  } catch (error) {
    console.log("error occured: ", error);
  }
}
