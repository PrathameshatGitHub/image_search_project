(function () {

 const  button=document.querySelectorAll(".btn")   
 const storeImage=document.querySelectorAll(".images")

 button.forEach(function(btn){

    btn.addEventListener("click",(e)=>{

e.preventDefault()
const filter=e.target.dataset.filter

storeImage.forEach((item)=>{

    if (filter ==='all') {
        item.style.display='block'
        
    }
    else{ 
        if (item.classList.contains(filter)) {
        item.style.display='block'
      
        
    }else{

        item.style.display='none'

    }}
})


    })
 })
    
})();