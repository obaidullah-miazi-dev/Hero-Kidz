"use server";

import { authOptions } from "@/lib/authOption";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

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

export const getCartData = cache(async () => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return [];
  }

  const query = { email: user.email };
  const result = await cartCollection.find(query).toArray();
  return result;
});

export const deleteCartItem = async (id) => {
  const query = { _id: new ObjectId(id) };
  const result = await cartCollection.deleteOne(query);
  if (result.deletedCount) {
    revalidatePath('/cart')
    return { success: true };
  }
};
