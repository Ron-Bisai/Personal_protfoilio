/*===== Modal Know more ====*/ 
const modal = document.querySelectorAll('.services_modal'),
      modalButton = document.querySelectorAll('.services_buttons'),
      modalClose = document.querySelectorAll('.services_modal-close')
    
let activemodal=(modalClick)=>{
     modal[modalClick].classList.add('active-modal')
}   

modalButton.forEach((modalButton,i)=>{
    modalButton.addEventListener('click',()=>{
        activemodal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modal.forEach((modalremove)=>{
            modalremove.classList.remove('active-modal')
        })
    })
})