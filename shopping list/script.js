var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

// append delete button to existing
var ulLength = ul.children.length;
var newUl = document.createElement('UL');
for (var i = 0; i < ulLength; i++) {
    var newLi = document.createElement('LI');
    newLi.appendChild(document.createTextNode(ul.children[i].textContent));
    newUl.appendChild(newLi);
    newUl.appendChild(addDelButton());
}
ul.replaceWith(newUl);

// input length
function inputLength() {
    return input.value.length;
}

// add delete button
function addDelButton() {
    var delButton = document.createElement('button');
    delButton.appendChild(document.createTextNode('delete'));
    delButton.setAttribute('id', 'delete')
    return delButton;
}

// create new list element
function createListElement() {
    var li = document.createElement('LI');
    li.appendChild(document.createTextNode(input.value));
    newUl.appendChild(li);
    newUl.appendChild(addDelButton());
    input.value = "";
}

// add list after click button
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// add list after press enter
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// delete list after click button
function delListAfterClick(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    } else if (event.target.getAttribute('id', 'delete')) {
        event.target.previousSibling.remove();
        event.target.remove();
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

newUl.addEventListener('click', delListAfterClick);