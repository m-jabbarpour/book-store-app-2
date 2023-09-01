import { NextApiRequest, NextApiResponse } from "next";

import booksDataBase from "../../../database/db";

import { Book } from "@/types";

type NewObject = { [key: string]: unknown };

type BookKeys =
  | "id"
  | "title"
  | "authors"
  | "translators"
  | "publications"
  | "category"
  | "subCategory"
  | "image"
  | "rate"
  | "numberOfComments"
  | "price"
  | "quantity"
  | "introduction"
  | "sample";

const selectProps = (...props: BookKeys[]) => {
  return function (obj: Book) {
    const newObj: NewObject = {};
    props.forEach((prop) => {
      newObj[prop] = obj[prop];
    });
    return newObj;
  };
};

const requiredBookDetails = booksDataBase.map(
  selectProps(
    "id",
    "title",
    "category",
    "subCategory",
    "price",
    "quantity",
    "image"
  )
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(requiredBookDetails);
}
