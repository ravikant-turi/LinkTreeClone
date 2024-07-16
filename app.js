// const data={

//     username : "RaviKant",
//     userboi:"im web dev",
//     profileImage:"image/profile.jpg",
//     socialLink:[
//         {    

//             linkdin:'https://www.linkedin.com/in/ravikant-turi/'
//         },
//         {
//             github:'https://github.com/ravikant-turi'
//         },
//         {
//             linkdin:'https://www.linkedin.com/in/ravikant-turi/'
//         },
//         {
//             linkdin:'https://www.linkedin.com/in/ravikant-turi/'
//         },
//         {
//             linkdin:'https://www.linkedin.com/in/ravikant-turi/'
//         },
//     ]
// }

const loader = document.querySelector(".loader")
// console.log(loader)
const linkDiv = document.querySelector('.link-div')
// console.log(linkDiv)
const username = document.querySelector('.username')
// console.log(username)
const profileImage = document.querySelector(".profile-image")
// console.log(profileImage)
const userboi = document.querySelector('.user-boi')
// console.log(userboi)
const logo = document.querySelector('.logo')
// console.log(logo)

const card = document.querySelector('.card')
// console.log(card)

const innerCard = document.querySelector('.inner-card')
// console.log(innerCard)

const linkname=document.querySelector('.link-name')
// console.log(linkname)

function applyData(data) {
    profileImage.src = data.profileImage
    username.innerText = data.username
    userboi.innerText = data.userboi
   


    data.socialLink.map((nextlink) => {
        // Create the anchor element
        const link = document.createElement('a');
        link.className = 'linkdin link-div';
        link.href = nextlink.urlLink;  // Assuming nextlink has a url property
    
        // Create the image element
        const img = document.createElement('img');
        img.src = nextlink.icon;  // Assuming nextlink has an imgSrc property
        img.alt = ""; // Assuming nextlink has an altText property
        img.className = 'linkdin-image logo';
    
        // Create the h1 element
        const h1 = document.createElement('h1');
        h1.className = 'link-name';
        h1.textContent = nextlink.linkname;  // Assuming nextlink has a name property
    
        // Append the image and h1 to the anchor element
        link.appendChild(img);
        link.appendChild(h1);
    
        // Append the anchor element to a parent element
        // Assuming there is a parent element with an id of 'social-links-container'
        card.appendChild(link);
    });
    
    
}



function fetchData() {
    loader.style.display = 'block'
    fetch('https://api.npoint.io/92f56efdb53800347602')
        .then(data => data.json())
        .then(data => {
           
            loader.style.display = "none"
            card.style.display = 'block'
            
            applyData(data);
        })

}
fetchData()
