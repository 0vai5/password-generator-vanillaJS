const rangeValue = document.getElementById('RangeValue');
const rangeInput = document.getElementById('range');
const btn = document.getElementById('generateButton');
const output = document.getElementById('output');
const outputContainer = document.getElementsByClassName('outputContainer')[0]; // Assuming there's only one
const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z',
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    '!', '@', '#', '$', '%',
    '^', '&', '*'
];

rangeValue.textContent = rangeInput.value

rangeInput.addEventListener('input', (e) => {
    rangeValue.textContent = e.target.value;
});

btn.addEventListener('click', () => {
    let password = '';
    const value = parseInt(rangeInput.value, 10); 

    for (let i = 0; i < value; i++) { 
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    outputContainer.style.display = 'block';
    output.textContent = password; 
});
