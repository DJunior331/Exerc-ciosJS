const elements = [
    {tag: 'p', text: 'Qualquer texto que você quiser'},
    {tag: 'div', text: 'Phrase2'},
    {tag: 'section', text: 'Phrase3'},
    {tag: 'footer', text: 'Phrase4'}
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createTag = document.createElement(tag)
    createTag.innerText = text;
    div.appendChild(createTag)
    console.log(tag, text)
}

container.appendChild(div);

