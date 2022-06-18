import Saldo from "../models/saldo.js";

const SaldoController = {
    getAll : async(req, res) => {

        try {
            const data = await Saldo.findAll({
                attributes : ['id', 'keterangan', 'saldo', 'tanggal', 'dekredit']
            })
            res.json(data)


        } catch (error) {
        res.status(404).json({msg : error}) 
        }
        
    },
    getid : async(req, res) => {

        try {
            const data = await Saldo.findAll({
                attributes : ['id', 'keterangan', 'saldo', 'tanggal', 'dekredit'],
                where : { id : req.params.id }
            })
            res.json(data)
            
        } catch (error) {
            
        }
                
            },
            input : async(req, res) => {

                try {
                    const data = await Saldo.create(req.body)
                    res.status(201).json({ msg : "sukses" })
                } catch (error) {
                    res.status(404).json({msg : error})
                }
                        
                    },
            update : async(req, res) => {

                        try {
                            const data = await Saldo.update(req.body, {
                                where : { id : req.params.id }
                            })
                            res.status(201).json({ msg : "sukses" })
                            
                        } catch (error) {
                            res.status(404).json({msg : error})
                        }
                                
                            },
                            delete : async(req, res) => {

                                try {
                                    const data = await Saldo.destroy({
                                        where : { id : req.params.id }
                                    })
                                    res.json({msg : 'sukses'})
                                } catch (error) {
                                    res.status(404).json({msg : error})
                                }
                                        
                                    }

}

export default SaldoController