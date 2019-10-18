const studentLists = document.querySelector(".students");
const scrollTrigger = document.querySelector(".scroll-trigger");
let reachEnd = false
let offset = 0;


scrollTrigger.addEventListener("click", () => {
    const url = `/api/students?offset=${offset}`;
    offset += 10

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const name of data.students) {
                studentLists.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
            }
            reachEnd = data.students.length === 0;
            console.log(reachEnd);
        });

});