// when top >=600 show button 
let btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// when click the button top=0
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
}

const sessions = document.querySelectorAll("session");
const lists = document.querySelector("ul.list");
// when you add a new section the list increases autoatically

for (sec of sessions) {
    const list = document.createElement("li");
    list.innerHTML = `<a href = "#${sec.id}" data-set = ".${sec.id}">${sec.id}</a>`;
    lists.appendChild(list);
}


// when you click on the menu items you will be vanigated to the appropiated section dynamically
var linkList = document.querySelectorAll(".ul-list .list a");

function moveAnyWhere(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.set).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}

moveAnyWhere(linkList);


var menuList = document.querySelectorAll(".ul-list .list li");

//use loop to use all list

    for (let index = 0; index < menuList.length; index++){
    menuList[index].addEventListener("click", function() {

        let current = document.getElementsByClassName(" active");
        
        if (current.length > 0) {
            //remove all class active from list
            current[0].className = current[0].className.replace(" active", "");
            
        }
        //add class active on list when click on it
        this.className += " active";
        
    });
}


let work = document.querySelector(".work");

let section = document.querySelector(".section");

let Portfolio = document.querySelector(".Portfolios");

let testimonial = document.querySelector(".testimonial");

let wantto = document.querySelector("#wantto");

let footer = document.querySelector(".footer");

window.addEventListener("scroll", function () {
    // add active class in Nav section 
      if ( window.scrollY >= work.offsetTop - 200 && window.scrollY <= section.offsetTop - 100) {
          work.classList.add("active");
          document.getElementsByTagName("li")[0].classList.add("active");
    } else {
        work.classList.remove("active");
        document.getElementsByTagName("li")[0].classList.remove("active");
    }
   // add active class in section 
    if (window.scrollY >= section.offsetTop -20 && window.scrollY <= Portfolio.offsetTop -100) {
        section.classList.add("active");
        document.getElementsByTagName("li")[1].classList.add("active");
        
    } else {
        section.classList.remove("active");
        document.getElementsByTagName("li")[1].classList.remove("active");
     }

    // add active class in Portfolio

    if (window.scrollY >= Portfolio.offsetTop && window.scrollY <= testimonial.offsetTop-100 ) {
          Portfolio.classList.add("active");
          document.getElementsByTagName("li")[2].classList.add("active");
    } else {
          Portfolio.classList.remove("active");
          document.getElementsByTagName("li")[2].classList.remove("active");
    }

    // add active class in testimonial
      if ( window.scrollY >= testimonial.offsetTop && window.scrollY <= wantto.offsetTop -200) {
          testimonial.classList.add("active");
          document.getElementsByTagName("li")[3].classList.add("active");
     } else  {
          testimonial.classList.remove("active");
          document.getElementsByTagName("li")[3].classList.remove("active");
    }

     if ( window.scrollY >= wantto.offsetTop - 200 && window.scrollY <= footer.offsetTop) {
          wantto.classList.add("active");
          document.getElementsByTagName("li")[4].classList.add("active");
     }else  {
           wantto.classList.remove("active");
          document.getElementsByTagName("li")[4].classList.remove("active");
    }

    
});
    


// var btns = document.querySelectorAll(".section .ontime button");

// var parg = document.querySelector(".section .ontime p.solid");

// btns.forEach(function (btn) {
//     btn.onclick = function () {
//         btn.innerHTML = "Learn Less";
//         btn.style.backgroundColor = "navy";
//     }
// })