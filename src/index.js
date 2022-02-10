const dogsList = document.querySelector(".dogs-list")
const main = document.querySelector(".main")
const noDogsMessage = document.querySelector(".dog-section__no-dogs")
const plusBtn = document.querySelector(".dogs-list__button--add")

const goodDog = "Good dog!"
const badDog = "Bad dog!"
const yes = "Yes!"
const no = "No!"

function renderForm() {
    plusBtn.addEventListener("click", function() {
        clearMain()
        createNewForm()
        captureFormData()
    })
}

function createNewForm() {
    const formSection = document.createElement("section")
    formSection.setAttribute("class", "main__dog-section")
    const addDogName = document.createElement("h2")
    addDogName.innerText = "Add a new dog"
    const form = document.createElement("form")
    form.setAttribute("class", "form")
    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Dog's name"
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    const imgLabel = document.createElement("label")
    imgLabel.setAttribute("for", "image")
    imgLabel.innerText = "Dog's picture"
    const imgInput = document.createElement("input")
    imgInput.setAttribute("type", "url")
    imgInput.setAttribute("id", "image")
    imgInput.setAttribute("name", "image")
    const bioLabel = document.createElement("label")
    bioLabel.setAttribute("for", "bio")
    bioLabel.innerText = "Dog's bio"
    const textArea = document.createElement("textarea")
    textArea.setAttribute("rows", "5")
    textArea.setAttribute("id", "bio")
    textArea.setAttribute("name", "bio")
    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("id", "submit")
    submitButton.setAttribute("name", "submit")
    submitButton.setAttribute("value", "Let's add a dog!")
    submitButton.setAttribute("class", "form__button")
    main.append(formSection)
    formSection.append(addDogName, form)
    form.append(nameLabel, nameInput, imgLabel, imgInput, bioLabel, textArea, submitButton)
}

function captureFormData() {
    const form = document.querySelector(".form")
    let newDog = {}
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        const dogNameInput = document.querySelector("#name").value
        const dogImage = document.querySelector("#image").value
        const textareaInput = document.querySelector("#bio").value
        if (dogNameInput.length === 0) return
        newDog = {
            id: data.length+1,
            name: dogNameInput,
            bio: textareaInput,
            isGoodDog: true,
            image: dogImage
        }
        addNewDogToTopList(newDog)
    })
    return newDog
}

function addNewDogToTopList(formData) {
    data.unshift(formData)
    renderTopList(data)
}

function renderTopList(array) {
    clearTopList()
    for (const element of array) {
        const liElement = document.createElement("li");
        liElement.setAttribute("class", "dogs-list__button")
        liElement.innerText = element.name
        dogsList.append(liElement)
        liElement.addEventListener("click", function() {
            clearMain()
            renderCard(element)
        })
    }
}

renderTopList(data)
renderForm()

function renderCard(element) {
    const card = document.createElement("section")
    card.setAttribute("class", "main__dog-section")
    const dogName = document.createElement("h2")
    dogName.innerText = element.name
    const dogImg = document.createElement("img")
    dogImg.setAttribute("src", element.image)
    dogImg.setAttribute("height", "400px") //
    const descriptionDiv = document.createElement("div")
    descriptionDiv.setAttribute("class", "main__dog-section__desc")
    const h3Bio = document.createElement("h3")
    h3Bio.innerText = "Bio"
    const pBio = document.createElement("p")
    pBio.innerText = element.bio
    const btnDiv = document.createElement("div")
    btnDiv.setAttribute("class", "main__dog-section__btn")
    const pEl = document.createElement("p")
    const btnEl = document.createElement("button")
    const emElement = document.createElement("em")
    emElement.innerText = "Is naughty?"
    if (dogBehaviourChecker(element)) {
        pEl.innerText = no
        pEl.prepend(emElement)
        btnEl.innerText = goodDog
    } else {
        pEl.innerText = yes
        pEl.prepend(emElement)
        btnEl.innerText = badDog
    }
    btnEl.addEventListener("click", function() {
        if (element.isGoodDog) {
            element.isGoodDog = false
            pEl.innerText = yes
            pEl.prepend(emElement)
            btnEl.innerText = badDog
        } else {
            element.isGoodDog = true
            pEl.innerText = no
            pEl.prepend(emElement)
            btnEl.innerText = goodDog
        }
    })
    main.append(card)
    card.append(dogName, dogImg, descriptionDiv, btnDiv)
    descriptionDiv.append(h3Bio, pBio)
    btnDiv.append(pEl, btnEl)
}

function clearTopList() {
    const dogsListchildren = Array.from(dogsList.children)
    for (const dogsListchild of dogsListchildren) {
        if (dogsListchild !== plusBtn)
        dogsListchild.remove()
    }
}

function clearMain() {
    const children = Array.from(main.children)
    for (const child of children) {
        child.remove()
    }
}

function dogBehaviourChecker(element) {
    return element.isGoodDog
}
