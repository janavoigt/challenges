import dbConnect from "@/db/models/dbConnect";
import Product from "@/db/models/Products";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    if (!products) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(products);
  }
}
