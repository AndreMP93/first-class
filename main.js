document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button1').addEventListener('click',(event)=>{
        document.getElementById('modal1').classList.add('is-active');
        console.log( document.getElementById('modal1').classList)
    })
})

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('buttonRemove1').addEventListener('click',(event)=>{
        document.getElementById('column1').remove('card1');
    })
})


function closeModal(){
    document.getElementById('modal1').classList.remove('is-active')
    console.log( document.getElementById('modal1').classList)
}

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button2').addEventListener('click',(event)=>{
        document.getElementById('modal2').classList.add('is-active');
        console.log( document.getElementById('modal2').classList)
    })
})
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('buttonRemove2').addEventListener('click',(event)=>{
        document.getElementById('column2').remove('card2');
    })
})

function closeModal2(){
    document.getElementById('modal2').classList.remove('is-active')
    console.log( document.getElementById('modal2').classList)
}

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button3').addEventListener('click',(event)=>{
        document.getElementById('modal3').classList.add('is-active');
        console.log( document.getElementById('modal3').classList)
    })
})
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('buttonRemove3').addEventListener('click',(event)=>{
        document.getElementById('column3').remove('card3');
    })
})
function closeModal3(){
    document.getElementById('modal3').classList.remove('is-active')
    console.log( document.getElementById('modal3').classList)
}

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button4').addEventListener('click',(event)=>{
        document.getElementById('modal4').classList.add('is-active');
        console.log( document.getElementById('modal4').classList)
    })
})

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('buttonRemove4').addEventListener('click',(event)=>{
        document.getElementById('column4').remove('card4');
    })
})

function closeModal4(){
    document.getElementById('modal4').classList.remove('is-active')
    console.log( document.getElementById('modal4').classList)
}

