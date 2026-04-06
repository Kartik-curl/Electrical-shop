const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})
document.querySelectorAll(".fade_up").forEach(el=>{
    observer.observe(el);
})

document.querySelectorAll(".fade_left").forEach(el=>{
    observer.observe(el);
})