let state = false

function toogleNavbarNav () {
    let nav = document.getElementById('navbar-nav')
    
    if(state == false) {
        nav.style.display = 'flex'
        
        state = true
    } else if (state == true) {
        nav.style.display = 'none'
        state = false
    }

}

$(document).ready(function() {
var currslide = 1

function slideImage(){
    if(currslide < 6){
        $('.slider-container').animate({
    'left' : '-=110%'
    },1500) 
    currslide++;
    }
    else{
        $('.slider-container').animate({
            'left' : '-625'},0) 
            currslide = 1;
    }
    }
    $('.slider-container').animate({
        'right' : '625'},0) 
setInterval(slideImage,2000)
})

let validate = () => {
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let email = document.getElementById('email')
    let mgender = document.getElementById('mgender')
    let fgender = document.getElementById('fgender')
    let silver = document.getElementById('silver')
    let gold = document.getElementById('gold')
    let diamond = document.getElementById('diamond')
    let agreement = document.getElementById('agreement')
    let errorMsg = []

    //Validasi

    vUsername(username, errorMsg)
    vPassword(password, errorMsg)
    vEmail(email, errorMsg)
    VPlan(silver,gold,diamond, errorMsg)
    vGender(mgender,fgender,errorMsg)
    vAgreement(agreement,errorMsg)
    

    if(errorMsg.length === 0) {
        alert('Registration Success!')
    }else {
        alert(errorMsg.join('\n'))
    }
}

let vUsername = (username , errorMsg) => {
    if (username.value === '') {
        errorMsg.push('Username required')
    } else if (username.value.length < 5) {
        errorMsg.push('Username min len 5')
    }
}

let vPassword = (password , errorMsg) => {
    var upper=  /^(?=.*[A-Z])/;
    var lower=  /^(?=.*[a-z])/;
    if (password.value === '') {
        errorMsg.push('Password required')
    } else if (password.value.length < 8) {
        errorMsg.push('Password min len 8')
    } else if (!password.value.match(upper) || !password.value.match(lower)){
        errorMsg.push('Password need Uppercase and Lowercase')
    }
}

let vEmail = (email, errorMsg) => {
    if(email.value === '') {
        errorMsg.push('Email is required')
    }else if(email.value.startsWith('.') || email.value.startsWith('@')) {
        errorMsg.push('Email cannot start with . or @')
    }else if(email.value.indexOf('.') === (email.value.indexOf('@') + 1)) {
         errorMsg.push('Email cannot contain . after @')
    }else if(!email.value.endsWith('@gmail.com') && !email.value.endsWith('@yahoo.com')) {
        errorMsg.push('Email must ends with @gmail.com / @yahoo.com')
    }
}

let VPlan = (silver,gold,diamond, errorMsg) => {
    if(!silver.checked && !gold.checked && !diamond.checked) {
        errorMsg.push('Plan required')
    }
}

let vGender = (mgender, fgender, errorMsg) => {
    if(!mgender.checked && !fgender.checked) {
        errorMsg.push('Gender required')
    }
}

let vAgreement = (agreement,errorMsg) => {
    if(!agreement.checked) {
        errorMsg.push('You mush agree to terms and conditions')
    }
}