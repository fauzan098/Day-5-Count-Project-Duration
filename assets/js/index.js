const myEmail= "muhammadariffauzan03@gmail.com"

function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // console.log(name)
    // console.log(email)
    // console.log(phone)
    // console.log(subject)
    // console.log(message)
    

    let a = document.createElement('a')
    a.href = `mailto:${myEmail}?subject=${subject}&body=hello My name is ${name}. ${message}, please call me at ${phone} if you need help. thanks..`
    a.click()
}