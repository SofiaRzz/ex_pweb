import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const planetas = [
  { nome: "Mercúrio", diametro: 4880, distanciaSol: 57910000 },
  { nome: "Vênus", diametro: 12104, distanciaSol: 108200000 },
  { nome: "Terra", diametro: 12756, distanciaSol: 149600000 },
  { nome: "Marte", diametro: 6794, distanciaSol: 227940000 },
  { nome: "Júpiter", diametro: 142984, distanciaSol: 778330000 },
  { nome: "Saturno", diametro: 120536, distanciaSol: 1429400000 },
  { nome: "Urano", diametro: 51118, distanciaSol: 2870990000 },
  { nome: "Netuno", diametro: 49532, distanciaSol: 4504000000 },
];

app.get("/ps", (req, res) => {
  res.render("home", { planetas: planetas });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
