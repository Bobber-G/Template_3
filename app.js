
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

let skills = document.querySelector('.skills')
let bars   = document.querySelectorAll('.colr')

window.addEventListener('scroll', ()=>{

    let s_top = document.documentElement.scrollTop
    let per_width = (s_top * 100)/height
    scroller.style.width = `${per_width}%`

    // *****************************

    if(this.scrollY>1300){
        move_up.classList.add('show')
    }else{
        move_up.classList.remove('show')
    }

    // ******************************** 
    
    if(window.scrollY >= skills.offsetTop - 200){
        bars.forEach((bar)=>{
            bar.style.width = bar.dataset.width
        })
    }
})

let move_up = document.querySelector('.move-up')

move_up.addEventListener('click',()=>{
    window.scrollTo({
        top: 0 ,
        behavior: 'smooth' 
    })
})


let stats = document.querySelector('.stats')
let nums  =  document.querySelectorAll('.elem small')

function test(el){
    let goal = el.dataset.goal
    let cont = setInterval(() => {
        el.textContent++
        if(el.textContent == goal){
            clearInterval(cont)
        }
    }, 2000/goal);
}
// test(document.querySelectorAll('.elem small')[0])

let started = false
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= stats.offsetTop -200){
        if(!started){
            nums.forEach((el)=>{
                test(el)
            })
        }
        started = true
    }
})