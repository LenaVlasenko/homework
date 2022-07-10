let headdress = {
    hat:[
        {img: 'img/hat.png', className: 'hat', name: 'шляпа'}
    ],

     render(){
       let lDiv = document.getElementById("Universe")
         let headdressDiv = document.createElement("div")
         headdressDiv.id = "headdressDiv"
         let ul = document.createElement("ul")
         headdress.hat.map( hat => {
             console.log(hat)
             let li = document.createElement("li")
             if(hat.img) {
                 let img = document.createElement("img")
                 img.src = hat.img
                 li.appendChild(img)
             }
             let h3 = document.createElement("h3")
             h3.innerText = hat.name
             li.appendChild(h3)
             li.onclick = function () {
                 dolly.setHat(hat)
             }
             ul.appendChild(li)
         })
         headdressDiv.appendChild(ul)
         lDiv.appendChild(headdressDiv)
     }
}
headdress.render()
