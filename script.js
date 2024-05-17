//Tabbed Menu
function OpenMenu(event, menuName){
   let menuArr = document.getElementsByClassName('menu')
   for(let i = 0; i < menuArr.length; i++){
    menuArr[i].style.display = 'none'
   }

   let tablinks = document.getElementsByClassName('tablink')
   for(let i = 0; i < tablinks.length; i++){
    tablinks[i].classList.remove('active-tab')
   }

   document.getElementById(menuName).style.display = 'block'
   event.currentTarget.classList.add("active-tab")
}

document.getElementById('mainLink').click()
