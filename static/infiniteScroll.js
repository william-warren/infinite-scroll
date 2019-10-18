const studentList = document.querySelector(".students");
const scrollTrigger = document.querySelector("#infinite-scroll-trigger");
let reachEnd = false;
let offset = 0;

function updateStudentList() {
    if (reachEnd) {
        return;
    }
    const url = `/api/students?offset=${offset}`;
    offset += 10;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const name of data.students) {
                studentList.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
            }
            reachEnd = data.students.length === 0;
        });
}

const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.target === scrollTrigger && entry.isIntersecting) {
            updateStudentList();
        }
    }
});

observer.observe(scrollTrigger);