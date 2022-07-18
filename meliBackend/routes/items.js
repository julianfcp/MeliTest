const express = require("express");
const router = express.Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/query/:query", async (req, res) => {
  const result = await fetch(
    `${process.env.URL_MELI_API}/sites/MLA/search?q=${req.params.query}`
  );
  const json = await result.json();

  const { results, available_filters } = json;
  if (json.error) {
    console.log("error!");
    res.send({ error: "Not Found!" });
  } else {
    const dataResponse = {
      author: {
        name: process.env.AUTHOR_NAME,
        lastname: process.env.AUTHOR_LASTNAME,
      },
      categories: available_filters,
      items: results,
    };
    res.send(dataResponse);
  }
});
router.get("/:id", async (req, res) => {
  const result = await fetch(
    `${process.env.URL_MELI_API}/items/${req.params.id}`
  );
  const json = await result.json();

  const descRes = await fetch(
    `${process.env.URL_MELI_API}/items/${req.params.id}/description`
  );
  const jsonDesc = await descRes.json();
  //const {results, available_filters} = json;
  if (json.error) {
    console.log("error!");
    res.send({ error: "Not Found!" });
  } else {
    const dataResponse = {
      author: {
        name: process.env.AUTHOR_NAME,
        lastname: process.env.AUTHOR_LASTNAME,
      },
      item: {
        id: json.id,
        title: json.title,
        price: {
          currency: json.currency_id,
          amount: json.price,
          decimals: "getdecimals Function",
        },
      },
      picture: json.pictures[0].url,
      condition: json.condition,
      free_shipping: json.shipping.free_shipping,
      sold_quantity: json.sold_quantity,
      description: jsonDesc.plain_text,
    };
    res.send(dataResponse);
  }
});

module.exports = router;
