import express from "express";

import "./database";
import donates from "./models/Donates";
import { getRepository, getCustomRepository } from "typeorm";
// import Donates from "./repositories/DonatesRepositories";
import Donates from "./models/Donates";

const app = express();

app.use(express.json());

app.get("/", async (request, response) => {
  const donatesRepo = getRepository(Donates);
  const listDonates = await donatesRepo.find();

  return response.json({ listDonates });
});

app.post("/", async (request, response) => {
  const { name, email, blood } = request.body;

  const donatesRepo = getRepository(Donates);

  let donate = await donatesRepo.findOne({ where: { email: email } });

  if (!!donate) {
    return response.status(404).json({ message: "Already register" });
  }

  donate = await donatesRepo.create({ name: name, email: email, blood: blood });

  await donatesRepo.save(donate);

  return response.json({ donate });
});

app.listen(3333, () => {
  console.log("started server 🚀🚀🚀🚀🚀");
});
