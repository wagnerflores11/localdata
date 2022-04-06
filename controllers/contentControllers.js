const { create } = require("domain");
const contents = [];

exports.get = async (req, res) => {
  try {
    //var contents = [req.body.title];

    if (contents.length == 0) {
      return res.status(404).send({
        mensagem: "Não foram encontrados dados",
      });
    } else {      
        contents(data)
    }

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, others, author, content } = req.body;
    const data = { id: generateID(), title, others, author, content };
    contents.push(data);

    const response = {
      title: data.title,
      author: data.author,
      msg: "Create Sucess",
    };
    console.log(data);
    console.log(response);
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}
