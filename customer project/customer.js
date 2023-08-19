(function () {

    const customerImage=document.querySelector('#customerimage')
    const customerName=document.querySelector('#customername')
    const customerText=document.querySelector('#cutomer-text')

    let index=0
    const btn=document.querySelectorAll('.btn')
      const customers=[]

      function Customer(img,text,name) {
        this.img=img
        this.text=text
        this.name=name

        
      }
      function newcustomers(img,text,name) {

      
        let customer=new Customer(img,text,name)

        customers.push(customer)
      }

      newcustomers("C:\\Users\\Admin\\Downloads\\virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg", "tu kaua", "virat");
      newcustomers("C:\\Users\\Admin\\Downloads\\virat1.jpeg", "this is", "anna");
      newcustomers("C:\\Users\\Admin\\Downloads\\virat.png", "rader", "fadfaf");
      


      btn.forEach (function(button){
        button.addEventListener("click",function(e){
       if(e.target.parentElement.classList.contains('previous')){

        if (index===0) {
            index=customers.length
            
        }
        index--
        customerImage.src=customers[index].img
        customerName.textContent=customers[index].name
        customerText.textContent=customers[index].text
        


       }
       if(e.target.parentElement.classList.contains('next')){
        index++
        if ( index===customers.length) {
            index=0
            
        }
       
        customerImage.src=customers[index].img
        customerName.textContent=customers[index].name
        customerText.textContent=customers[index].text
        


       }


        })

      })
    
})();