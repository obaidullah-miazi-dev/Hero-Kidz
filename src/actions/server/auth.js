"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, password } = payload;

  if (!email || !password) {
    return null;
  }

  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) {
    return null;
  }

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role: "user",
    createdAt: new Date().toISOString,
  };

  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
