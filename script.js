const search = () => {

    const searchbox = document.getElementById("search-engine").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".list")
    const pname = storeitems.getElementsByTagName('h3')

    // console.log(pname.innertext);

    for (let i = 0; i < pname.length; i++) {

        let match = product[i].getElementsByTagName('h3')[0];
        

        if (match) {
           let textvalue= match.textContent || match.innerHTML
        //    console.log(match.innerHTML);
        //    console.log(textvalue);
           
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){ 
                product[i].style.display = "";
                // console.log(textvalue.toUpperCase().indexOf(searchbox));
            } else {
                product[i].style.display = "none";
            }

        }
    }
}