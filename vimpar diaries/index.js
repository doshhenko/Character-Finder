const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function (event){
    const word = event.target.value.toLowerCase();
    divs.forEach(item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word)?(item.style.display="block"):(item.style.display="none");
    })
    
} )
gsap.from(".container",
    {y: 500, 
    duration: 1.5,
})

gsap.from("h1",
    {y: -100, 
    duration: 1.5,
})