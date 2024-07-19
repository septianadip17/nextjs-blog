import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://septianadip7998:P45Ru2ibAqd9fMUo@cluster0.acbpqrt.mongodb.net/"
    )
    .then(() => console.log("database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;