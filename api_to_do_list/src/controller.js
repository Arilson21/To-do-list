const ToDoList = require('./model');


class ToDoListController {
    async index(req, res) {
        try{
            const list = await ToDoList.findAll()
            return res.json(list)
        }catch(e){
            console.log(e)
        }
    }

    async store (req, res) {
        try{
            const list = await ToDoList.create(req.body);
            return res.json(list);
        }catch(e) {
            console.log(e)
        }
    }

    async show(req, res) {
        try{
            const id = req.params.id
            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando Id']
                })
            }

            if(!Number(id)){
                return res.status(400).json({
                    errors: ['Id inválido']
                });
            }
            const list = await ToDoList.findByPk(id);
            if(!list){
                return res.status(400).json({
                    errors: ['Essa tarefa não existe']
                })
            }
            return res.json(list);
        } catch(e){
            console.log(e)
        }

    }

    async update (req, res) {
        try{
            const id = req.params.id
            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando Id']
                })
            }

            if(!Number(id)){
                return res.status(400).json({
                    errors: ['Id inválido']
                });
            }
            const list = await ToDoList.findByPk(id);
            const newList = await list.update(req.body);

            if(!list){
                return res.status(400).json({
                    errors: ['Essa tarefa não existe']
                })
            }

            return res.json(newList);
        }catch(e){
            console.log(e)
        }
    }

    async delete (req, res) {
        try{
            const id = req.params.id
            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando Id']
                })
            }

            if(!Number(id)){
                return res.status(400).json({
                    errors: ['Id inválido']
                });
            }

            const list = await ToDoList.findByPk(id);

            if(!list){
                return res.status(400).json({
                    errors: ['Essa tarefa não existe']
                })
            }

            await list.destroy()

            return res.json({
                apagado: true
            })
        }catch(e){
            console.log(e)
        }
    }

}
module.exports = new ToDoListController();



