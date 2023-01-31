  
document.querySelectorAll('a.yakor').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault()

        const href = this.getAttribute('href')

        const scrollTarget = document.getElementById(href)

        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset
        
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})
