fetch('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        console.log(data.data[0].name)
        document.querySelector("title").innerHTML=`${data.data[0].name}-Hardventas`
        document.getElementById("dinero").innerHTML=`$${data.data[0].price}`
        document.getElementById("descripcion").innerHTML=`${data.data[0].description}`
    })

