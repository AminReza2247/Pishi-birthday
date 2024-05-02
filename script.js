let wrapper = document.querySelector('#text')
let counter = 0
let text = 'وجود تو تنها هدیه گرانبهایی بود که\nخدا منو لایق اون دونست..... \n و هدیه من به تو شیرینم,...\n قلب عاشقی هست که فقط برای تو میتپه..... \n صادقانه و عاشقانه دوستت دارم... \n تولدت مبارک گلبی :)'

const img = document.querySelector('img')

window.addEventListener('load',()=>{
    img.classList.add('img--active')
})

const typeWriter = () => {
 let func = setInterval(()=>{
        if (counter === text.length - 1){
            clearInterval(func)
        }
        wrapper.innerHTML += text[counter]
        counter++

    },100)
}
typeWriter()


document.addEventListener('click',(event)=>{

    let snow = document.createElement('span')

    snow.classList.add('snowflake')
    snow.style.top = event.clientY + 'px'
    snow.style.left = event.clientX + 'px'
    let randomSize = Math.floor(Math.random()*100) + 'px'
    snow.style.width = randomSize
    snow.style.height = randomSize

    document.body.appendChild(snow)

    setTimeout(()=>{
        snow.remove()
    },1000)
})