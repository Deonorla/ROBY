 /*=======  SHOW MENU ========*/
 const showMenu =(toggleId, navId)=>{
     const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
 
     if(toggle && nav){
         toggle.addEventListener('click', ()=>{
             nav.classList.toggle('reveal')
         })
     }
 }


 showMenu('nav-toggle','nav-menu')


  /*======= REMOVE MENU ========*/
  const navLink = document.querySelectorAll('.nav_link')
  function actionLink(){
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('reveal')
  }
  navLink.forEach(list => list.addEventListener('click', actionLink))


   /*======= SCROLL SECTION ACTIVE LINK ========*/
     const sections = document.querySelectorAll('section[id]')

     window.addEventListener('scroll', scrollActive)

     function scrollActive(){
         const scrollY = window.pageYOffset

         sections.forEach(current=>{
             const sectionHeight = current.offsetHeight
             const sectionTop = current.offsetTop - 50
             const sectionId = current.getAttribute('id')

             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

             document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active')
         }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active')
         }
         }) 
     }
    /*======= CHANGE COLOR HEADER ========*/

    window.onscroll = ()=>{

        const nav = document.getElementById('header') 
        if(this.scrollY >= 200) nav.classList.add('scroll-header'); 
        else nav.classList.remove('scroll-header')
    
     }