//vlastnosti a metody

let title='pan prstenu'
console.log(title.length)
console.log(title.toUpperCase())
console.log(title.slice(0,5))
console.log(title.slice(title.length-5,title.length))

//e-maily

let email=prompt('zadej e-mail')
let atIndex=email.indexOf('@')
let celejmeno=email.slice(0,atIndex)
let domena=email.slice(atIndex+1,email.length)
const parsedEmail= {
    userName:celejmeno,
    domain:domena,
}

let Pemail=document.querySelector('.email')
Pemail.innerHTML='Email:' + email

let PatIndex=document.querySelector('.atIndex')
PatIndex.innerHTML='atIndex:' + atIndex

let Pcelejmeno=document.querySelector('.celejmeno')
Pcelejmeno.innerHTML='cele jmeno:' + celejmeno

let Pdomena=document.querySelector('.domena')
Pdomena.innerHTML='domena:' + domena

//dorucovani

let adresaUlice=prompt('zadej ulici')
let adresacislodomu=prompt('zadej cislo domu')
let adresamesto=prompt('zadej mesto')
let adresaPSC=prompt('zadej PSC')
 
const adresa = {
    ulice:adresaUlice,
    cislodomu:adresacislodomu,
    mesto:adresamesto,
    psc:adresaPSC,
};

const { ulice,cislodomu,mesto,psc } = adresa;

let Padresa=document.querySelector('.adresa')

Padresa.innerHTML= (
  `<address>
	<p>${ulice} ${cislodomu}</p>
	<p>${psc} ${mesto}</p>
  </address>`
)

