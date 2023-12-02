let sections = document.querySelectorAll('section');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });

            setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{

                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx, 1) * 50)
                })
            },2000);

            setTimeout(()=>{
                intro.style.top = '-100vh';
            }, 2300)
        })
})