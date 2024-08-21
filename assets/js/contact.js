/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // service_id - template_id - #form - public key
    emailjs.sendForm('service_ze5mq1z', 'template_ydlebbn', '#contact-form', '9Zd8YLzRp-PU_nFeq')
        .then(() => {
            contactMessage.textContent = 'Your message has been sent successfully!'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            //clear input
            contactForm.reset()
        })

        .catch((error) => {
            contactMessage.textContent = 'Failed to send your message. Please try again later.'
            console.error('EmailJS Error:', error)

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //clear input
            contactForm.reset()
        })
}

contactForm.addEventListener('submit', sendEmail)