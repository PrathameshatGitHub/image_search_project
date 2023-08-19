(function () {

    const Pictures=[
        "0",
        "1",
        "2",
        "3",
        "4"
    ];

    const buttons=document.querySelectorAll(".btn")
    const imgdiv=document.querySelector(".container")
    
    let counter=0
    buttons.forEach(function (btn) {
        btn.addEventListener("click",function(e){

            if(btn.classList.contains("left")){

                counter--
             if(counter<0)   {
                counter=Pictures.length-1

                }
                imgdiv.style.backgroung=`url('images/img${Pictures[counter]}.jpg')`
            }
            else if(btn.classList.contains("right")){

                counter++
             if(counter>Pictures.length-1)   {
                counter=0

                }
                imgdiv.style.background=`url('images/img${Pictures[counter]}.jpg')`
            }

        })

        
        
    })
})()