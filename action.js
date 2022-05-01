
    let ele1 = document.querySelector('#imgBox1');
    let ele2 = document.querySelector('#imgBox2');
    let ele3 = document.querySelector('#imgBox3');
    
  
  var textbox1 =  document.querySelector('#textBox1');
  var textbox2 =  document.querySelector('#textBox2');
  var textbox3 =  document.querySelector('#textBox3');
    


   window.addEventListener('scroll', function(){
    
        // console.log(pageYOffset); 
        // console.log(parent.scrollTop);
        console.log(window.scrollY);

        if(window.scrollY > 670 && window.scrollY < 900){
            console.log('up');
            // textbox.style.right= "5%";
            textbox1.classList.add('positinedRight');                          
       
           ele1.style.left ='0';
                      
        }  if(window.scrollY < 670 ){

            textbox1.classList.remove('positinedRight');
            ele1.style.left ='20%';
            console.log('down');
        }  if(window.scrollY > 900){

            textbox1.classList.remove('positinedRight');
            ele1.style.left ='20%';
            console.log('down');

        }
        
        //   840 1110    1140 1440

        if(window.scrollY > 960 && window.scrollY < 1240){
            console.log('up');
            // textbox.style.right= "5%";
            textbox2.classList.add('positinedRight');                          
       
           ele2.style.left ='0';
                      
        }  if(window.scrollY < 960 ){

            textbox2.classList.remove('positinedRight');
            ele2.style.left ='20%';
            console.log('down');
        }  if(window.scrollY > 1240){

            textbox2.classList.remove('positinedRight');
            ele2.style.left ='20%';
            console.log('down');

        }

        // kjkljl

        if(window.scrollY > 1290 && window.scrollY < 1590){
            console.log('up');
            // textbox.style.right= "5%";
            textbox3.classList.add('positinedRight');                          
       
           ele3.style.left ='0';
                      
        }  if(window.scrollY < 1290 ){

            textbox3.classList.remove('positinedRight');
            ele3.style.left ='20%';
            console.log('down');
        }  if(window.scrollY > 1590){

            textbox3.classList.remove('positinedRight');
            ele3.style.left ='20%';
            console.log('down');

        }



    });



    // Navbar

    let menubar= document.getElementById("menubar");
    let menubtn= document.getElementById("menubtn");
 
        menubar.style.right="-250px";
 
        
        menubtn.onclick = function() {
         if(menubar.style.right == "-250px") {
             menubar.style.right="0";
            //  menubtn.src = "images/close.png";
         }
         else {
             menubar.style.right= "-250px";
            //  menubtn.src = "images/menu.png";
         }
     }

    //  Hide Navbar When click on any navitem
    
         function hide(){
             menubar.style.right= "-250px";
 
         }