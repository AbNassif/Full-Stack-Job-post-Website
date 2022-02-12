/*
    This below script will help us navigate through the questions 
    displayed by each topic.
    if a topic is pressed, all other topics will close and the chosen topic's question
    will show.

*/

let topics = document.querySelectorAll(".topicsHolder input");
let accordions = document.querySelectorAll(".accordion");




function showHide(index) {
    accordions.forEach(accordion => {
        closeAllShowedAnswers(accordion);
        accordion.style.display = "none";
    })
    accordions[index].style.display = "block";
}

function closeAllShowedAnswers(el) {
    const allChildren = el.querySelectorAll(".accordion-collapse");
    allChildren.forEach(btn => btn.classList.remove("show"));
}

showHide(0);

function addTopic(topicName) {

    // Add topic to topic holder
    let topicsWrapper = document.querySelector(".topicsHolder ");
    const elementsWrapper = document.createElement("div");
    elementsWrapper.innerHTML = `
        <input type="radio" class="btn-check" name="btnradio" data-index="${topicsWrapper.childElementCount/2}"  id="btnradio${(topicsWrapper.childElementCount/2) +1}" autocomplete="off">
        <label class="btn btn-outline-success" for="btnradio3">${topicName}</label>
    `;

    topicsWrapper.appendChild(elementsWrapper.firstElementChild);
    topicsWrapper.appendChild(elementsWrapper.lastElementChild);
    elementsWrapper.remove();
}

topics.forEach(topic => {
    topic.addEventListener("change", (e) => {
        showHide(e.target.getAttribute('data-index'))
    })
})

//Later on we'll add features that allow us to add questions and answers related to each topic and  structure them correctly
