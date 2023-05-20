let name = 'Dharmesh'
document.getElementById('heading').innerHTML = `<h1>Welcome ${name}</h1>`
let element = document.getElementsByTagName('div')
element[0].setAttribute('class','green');
element[0].style.color="blue"
let classelements = document.getElementsByClassName('green')
for(let i=0;i<classelements.length;i++)
{
    classelements[i].style.color = "bule";
    classelements[i].style.fontFamily = "Verdana"
    classelements[i].style.fontSize = "40px"
    classelements[i].style.textAlign = "center"
}



let fav = ["Audi","Bmw","Kia","Rolls Roys"]
let h2 = document.createElement('h2')
h2.append("my favourite cars are")
document.body.appendChild(h2)

let ul = document.createElement('ul')

for(let i=0;i<fav.length;i++)
{
    let li = document.createElement('li')
    li.append(`${fav[i]}`)
    ul.appendChild(li)
}
 document.body.appendChild(ul)

 let input = document.createElement('input')
 input.setAttribute('type','text')
 input.setAttribute('placeholder','Password')
 input.setAttribute('value','Admin@123')
 document.body.append(input)
 
 
 let elements = document.querySelectorAll('.pinkcolor')
 console.log(elements)
 
 {/* <ul>
     <li></li>
     <li></li>
     <li></li>
 </ul> */}
 
 
 //Query Selector
 // .class
 // #id
 // p,h1
 // div>p

