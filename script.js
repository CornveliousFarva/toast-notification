const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Fire the nuclear weapons',
    'Can you hear me, Clem Fandango?',
    'If your name isn’t big on a theatre poster, do some individual leafleting outside the building making sure that it’s YOU who has star billing!',
    'Never speak in a sentence with more than six words in it.'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
   const notif = document.createElement('div')
   notif.classList.add('toast')
   notif.classList.add(type ? type : getRandomType())
   
   notif.innerText = getRandomMessage()

   toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage () {
       return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType () {
    return messages[Math.floor(Math.random() * messages.length)]
}