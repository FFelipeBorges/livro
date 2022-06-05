const { Livro } = require('../models')

const livrosController = {
    index: async (request, response) => {
        const livros = await Livro.findAll();

        return response.json(livros);
    },
    create: async (request, response) => {
        const payload = request.body;

        const livro = await Livro.create(payload);

        return response.json(livro);
    },
    update: async (request, response) => {
        const { idLivro } = request.params;
        const payload = request.body;

        // const livro = await Livro.update(payload, {
        //     where: {
        //         id: idLivro
        //     },
        // });

        // const livro = await Livro.findOne({where: { id: idLivro }});

        //**Outra atualiza os paramentros que foram modificados */

        const livro = await Livro.findOne({where: { id: idLivro }});
        
        Object.assign(payload, livro);

        await livro.save()

        return response.json(livro);
    },
};

module.exports = livrosController;