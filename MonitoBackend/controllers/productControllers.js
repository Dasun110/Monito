const Product =require('../models/Products');

module.exports ={
     createProduct:async(req,res)=>{
        const newProduct = new Product(req.body);
        try{
            await newProduct.save();
            res.status(200).json(" product created successfully")
        }catch(error){
            res.status(500).json(" failed to create the product")
        }
     },

     getAllProduct:async(req,res) => {
        try {
            const products =await Product.find().sort({createdAt:-1})
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(" failed to get the product")
        }
     },
     getProduct:async (req,res)=>{
        try {
            const product =await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(" failed to get the product")

        }
     },
     searchProduct:async(req,res)=>{
        try {
            const result =await Product.aggregate(
                [
                    {
                      $search: {
                        index: "Monito",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result)
            console.log(result)
        } catch (error) {
            res.status(500).json(" failed to get the product")

        }

     },
     deleteProduct: async (req, res) => {
      try {
          const productId = req.params.id;
          // Find the product by its ID and delete it
          const deletedProduct = await Product.deleteOne({ _id: productId });
          // Check if the product was found and deleted
          if (deletedProduct.deletedCount === 0) {
              return res.status(404).json("Product not found");
          }
          // Return success message
          res.status(200).json("Product deleted successfully");
      } catch (error) {
          // Handle errors
          res.status(500).json(error);
      }
  }
}