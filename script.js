// Contact button message
function showMessage() {
    alert("Thank you for viewing my profile! Contact details will be added soon.");
}

// Custom cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");

const cursorTrail = document.createElement("div");
cursorTrail.classList.add("cursor-trail");

document.body.appendChild(cursor);
document.body.appendChild(cursorTrail);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
        cursorTrail.style.left = e.clientX + "px";
        cursorTrail.style.top = e.clientY + "px";
    }, 80);
});
