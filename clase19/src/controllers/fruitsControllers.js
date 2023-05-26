const fruitsControllers = (Fruit) => {

    const getAllFruits = async (req, res) => {
        const { query } = req;

        const response = await Fruit.find(query)
    
        res.status(200).json(response)
    }

    const postFruit = async (req, res) => {
        try{
            const { body } = req;

            const fruit = await new Fruit(body);
    
            await fruit.save();
    
            res.status(201).json(fruit);
        }catch(err){
            console.log(err.name)
            if(err.name === 'MongoServerError'){
                console.log('Dato ya existente en la base de datos');
                res.status(401).send('Dato repetido');
            }else if(err.name === 'ValidationError'){
                res.status(403).send('Te falto el dato color')
            }else{
                res.status(500).send(err.message);
            }
        }
    }

    const getFruitById = async(req, res) => {
        const { params } = req;

        const response = await Fruit.findById(params.id)
    
        res.status(200).json(response)
    }

    const putFruitById = async (req, res) => {
        const { params, body } = req;
        const response = await Fruit.updateOne(
          {
            _id: params.id,
          },
          {
            $set: {
              name: body.name,
              color: body.color,
              size: body.size,
            },
          }
        );
        res.status(201).json(response);
      }

    const deleteById = async  (req, res) => {
        try{
            const { params } = req;

            const response = await Fruit.findByIdAndDelete(params.id)
        
            res.status(202).json(response)
        }catch(err){
            console.log(err)
        }
    }

    //esto sirve para guardar las funciones dentro de un objeto
        //esto se hace por que la funcion tiene funciones mas pequeñas dentro, entonces se trae el funcionamiento de ambas de esta forma
            //este objeto luego sera desestructurado para que vuelva a leerse como codigo js.
    return { getAllFruits, getFruitById, postFruit, deleteById, putFruitById}
}

module.exports = fruitsControllers;