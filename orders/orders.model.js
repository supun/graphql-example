const ordersResolvers = require("./orders.resolvers")

const orders =[
        {
            date:'2020-10-10',
            subtotal:90.22,
            items:[
                {
                    product:{
                        id:'redshoe',
                        description:'Old Red Shoe',
                        price : 45.11
                    },
                    quantity: 2
                }
            ]
        }
    ];

function getAllOrders(){
        return ordersResolvers;
}

module.exports = {
        getAllOrders,
}