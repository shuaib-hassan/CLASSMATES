const friends = ["omar", "kule", "najma", "abdimalik", "yahya", "mohamed"];
slice = friends.slice(0, 3);
input = "kule";
console.log(slice); // Output: [ 'kule', 'najma' ]

if (friends.length > 5) {
    console.log("You have many friends.");
} else if (friends.length > 3) {
    console.log("You have a few friends.");
} else {
    console.log("You have only a couple of friends.");
}
// Output: You have many friends.

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = ['Name'];

headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});

.wrapper {
    /* Add any styles here if needed */
}

input:checked + .slider {
    background-color: #0fbcf9;
}

input:checked + .slider:before {
    transform: translateX(26px);
}

.slider:after {
    content: "🌙";
    position: absolute;
    left: 4px;
    top: 46%;
    transform: translateY(-50%);
    font-size: 18px;
    opacity: 1;
    transition: 0.4s;
}

input:checked + .slider:after {
    content: "☀️";
    left: 31px;
    top: 16px;
    opacity: 1;
}

table.appendChild(headerRow);

friends.forEach(friend => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');+
    cell.textContent = friend;
    row.appendChild(cell);
    table.appendChild(row);
});

document.body.appendChild(table);
console.log(table);

document.createElement('p');
const paragraph = document.createElement('p');
console.log(paragraph);

console.log(document.createElement('p'));

console.log(name)  

friends

friends.forEach(friend => {
    console.log(friend);
});

const head = document.createElement('h1');
const header = document.createElement('h2');
header.appendChild(document.createTextNode('header'));
document.body.appendChild(header);
head.appendChild(document.createTextNode('head'));
document.body.appendChild(head);
body.appendChild(head)
console.log(head)

function changeBackground() {
    const randomColor = `rgb(${random255()},${random255()},${random255()})`;
    document.body.style.backgroundColor = randomColor;
}
    }

    const random = Math.floor(Math.random() * myfriend.length);
    const randomValue = Math.floor(Math.random() * myfriends.length);
    console.log(random)

const myfriends = ["omar", "kule", "najma", "abdimalik", "yahya", "mohamed"];
console.log(myfriends)   

let my friends = ["omar", "kule", "najma", "abdimalik", "yahya", "mohamed"];
console.log(my friends)

// Create a button for toggling dark mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

// Add event listener to toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add styles for dark mode
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    .dark-mode table {
        border-color: #ffffff;
    }
`;
document.head.appendChild(style);