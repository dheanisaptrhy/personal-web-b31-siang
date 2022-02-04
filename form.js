function showData(){

    // Dom Mengambil data
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value
    
    if (name == ""){
        alert('name input field must not be empty')
    }
    else if(email == ""){
        alert('email input field must not be empty')
    }
    else if(phone == ""){
        alert('phone input field must not be empty')
    }
    else if(subject == ""){
        alert('subject input field must not be empty')
    }
    else if(message == ""){
        alert('message input field must not be empty')
    }
    // if(name != null && email != null && phone != null && message != null && subject != null)
    else{
        //dom create element
        let a = document.createElement("a")
        let emailReceiver = 'dheanisa@tmail.com'
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my Name is ${name}. ${subject}. ${message}. Please contact me at ${phone} or at my email ${email}. Thank you`
    
        a.click()
    }
    // }
    

    //dom mengirim data
    // document.getElementById("input-name").value = ""
    // document.getElementById("input-email").value = ""
    // document.getElementById("input-phone").value = ""
    // document.getElementById("input-subject").value = ""
    // document.getElementById("input-message").value = ""

    //object

    // let dataObject = {
    //     dataName : name, 
    //     dataEmail: email,
    //     dataPhone: phone,
    //     dataSubject: subject,
    //     message
    // }

    // console.log(dataObject)

    // console.table(dataObject)



}