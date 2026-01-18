"use server";

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const add2Cart = async ({ product, inc = true }) => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return false;
  }
  const query = { email: user?.email, productId: product._id };
  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    const updateData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updateData);
    return { success: Boolean(result.modifiedCount) };
  } else {
    const newData = {
      productId: product?._id,
      username: user?.user?.name,
      email: user?.email,
      title: product?.title,
      quantity: 1,
      image: product?.image,
      price: product?.price - (product?.price * product?.discount) / 100,
    };

    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};
