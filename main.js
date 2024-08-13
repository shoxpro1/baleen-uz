const title = document.querySelector('.a');
const button = document.querySelector('.la')
const eng = document.querySelector('.lak')
const rus = document.querySelector('.l')
const uzb = document.querySelector('.lal')
const big = document.querySelector('.big')
const btn = document.querySelector('.bt')
const dumaloq = document.querySelector('.dumaloq')
const body = document.querySelector('.body')
const div = document.querySelector('.aa')
const lol = document.querySelector('.lol')
const bu = document.querySelector('.bu')
const fo = document.querySelector('.for')
const x = document.querySelector('.x')
const ju = document.querySelector('.ju')
const book = document.querySelector('.book')
const luk = document.querySelector('.luk')
const luku = document.querySelector('.luku')
const su = document.querySelector('.su')



button.addEventListener('click', () => {
    if(title.classList.contains('anew')){
        title.classList.remove('anew')
    } else {
        title.classList.add('anew')
    }
})
eng.addEventListener('click', () => {
    button.textContent = 'Eng'
    eng.classList.add('limon')
    title.classList.remove('anew')
    rus.classList.add('anew')
    uzb.classList.add('anew')

})
rus.addEventListener('click', () => {
    button.textContent = 'Rus'
    eng.classList.add('ane')
    rus.classList.add('lion')
    title.classList.remove('anew')
    uzb.classList.add('anew')
})
uzb.addEventListener('click', () => {
    button.textContent = 'Uzb'
    eng.classList.add('anew')
    uzb.classList.add('lio')
    title.classList.remove('anew')
    rus.classList.add('anew')
    rus.classList.add('an')
})
btn.addEventListener('click', () => {
    if(dumaloq.classList.contains('dumaloqnew')){
        dumaloq.classList.remove('dumaloqnew')
        body.classList.remove('bodynew')
        div.classList.remove('divnew')
        button.classList.remove('bignew')
        eng.classList.remove('bignew')
        rus.classList.remove('bignew')
        uzb.classList.remove('bignew')
       aa.classList.remove('aanew')
          bu.classList.remove('bunew')
    } else {
        dumaloq.classList.add('dumaloqnew')
        body.classList.add('bodynew')
        div.classList.add('divnew')
        button.classList.add('bignew')
        eng.classList.add('bignew')
        rus.classList.add('bignew')
        uzb.classList.add('bignew')
        aa.classList.add('aanew')
        bu.classList.add('bunew')
    }
})
bu.addEventListener('click', () => {
 body.classList.add('bodyneww')
 fo.classList.add('fo')
})
x.addEventListener('click', () =>{
    body.classList.remove('bodyneww')
    fo.classList.remove('fo')
})
book.addEventListener('click', () =>{
 if(ju.classList.contains('junew')){
     ju.classList.remove('junew')
     body.classList.remove('bodyne')
    } else {
        ju.classList.add('junew')
        body.classList.add('bodyne')
    }
})
luk.addEventListener('click', () =>{
luku.classList.add('liki')
luk.classList.add('luku')
   })
   su.addEventListener('click', () =>{
    luku.classList.remove('liki')
    luk.classList.remove('luku')
       })