/*==== Contact Mail ====*/ 
const contactForm = document.getElementById('contact-form')
      contactMessage= document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //servicesID-templateID-#form-publicKey
    
    emailjs.sendForm('service_qae0caw','template_at73fz2','#contact-form','Bq5xd3ctbH4QdHqzs')
        .then(()=>{
            contactMessage.textContent='Message Sent Successfully ✅'

            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)
        })
}

contactForm.addEventListener('submit',sendEmail)