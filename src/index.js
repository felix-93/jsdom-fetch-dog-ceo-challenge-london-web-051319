console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    getImage()
    filterBreeds()
  })

function getImage() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(images => images.json())
    .then(imageArray => renderImage(imageArray));
  }

function renderImage(imageArray) {
    main = document.querySelector('#dog-image-container')
    imageArray["message"].forEach(image => {
        const dog = document.createElement('img')
        dog.src = image
        main.appendChild(dog)
    })
}

// function getBreeds() {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//     .then(breeds => breeds.json())
//     .then(breedArray => renderBreeds(breedArray)); 
// }

// function renderBreeds(breedArray) {
//     main = document.querySelector('#dog-breeds')
//     for (const breed in breedArray["message"]) {
//         const dogname = document.createElement('li')
//         dogname.textContent = breed
//         dogname.addEventListener('click', function() {
//             dogname.style.color = "red";
//             return false;
//         })
//         main.appendChild(dogname)
//     }
// }

function filterBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(breeds => breeds.json())
    .then(breedArray => renderBreedsFilter(breedArray)); 
}

function renderBreedsFilter(breedArray) {
    const main = document.querySelector('#dog-breeds')
    const filter = document.querySelector('#breed-dropdown')
    filter.addEventListener('change', function() {
        while (main.firstChild) main.removeChild(main.firstChild);
        filterBreeds()
      })
    for (const breed in breedArray["message"]) {
        if (filter.value === "all"){
            const dogname = document.createElement('li')
            dogname.textContent = breed
            dogname.addEventListener('click', function() {
                dogname.style.color = "red";
            })
            main.appendChild(dogname)}
        else if (breed.startsWith(filter.value)){
            const dogname = document.createElement('li')
            dogname.textContent = breed
            dogname.addEventListener('click', function() {
                dogname.style.color = "red";
            })
            main.appendChild(dogname)
        }
    }
}
