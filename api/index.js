module.exports = (x) => {
  const rtr = x.Router();
  rtr.route("/add/:n1/:n2").get((req, res) => {
    let { n1, n2 } = req.params;
    n1 = Number(n1);
    n2 = Number(n2);
    const add = n1 + n2;

    if (req.headers["content-type"] === "application/json") {
      res.set({ "Content-Type": "application/json" }).json({ n1, n2, add });
    } else {
      res.send("Сумма = " + add);
    }
  });

  rtr.route("/j/add/:n1/:n2").get((req, res) => {
    let { n1, n2 } = req.params;
    n1 = Number(n1);
    n2 = Number(n2);
    const add = n1 + n2;

    res.set({ "Content-Type": "application/json" }).json({ n1, n2, add });
  });

  rtr.route("/mpy/:n1/:n2").get((req, res) => {
    let { n1, n2 } = req.params;
    n1 = Number(n1);
    n2 = Number(n2);
    const mpy = n1 * n2;

    if (req.headers["content-type"] === "application/json") {
      res.set({ "Content-Type": "application/json" }).json({ n1, n2, mpy });
    } else {
      res.send("Произведение = " + mpy);
    }
  });

  rtr.route("/j/mpy/:n1/:n2").get((req, res) => {
    let { n1, n2 } = req.params;
    n1 = Number(n1);
    n2 = Number(n2);
    const mpy = n1 * n2;

    res.set({ "Content-Type": "application/json" }).json({ n1, n2, mpy });
  });

  return rtr;
};
