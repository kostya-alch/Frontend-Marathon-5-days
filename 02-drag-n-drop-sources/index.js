const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend);

function dragover(event) {
  event.preventDefault();
}
const dragenter = (event) => {
  event.target.classList.add('hovered');
};
const dragleave = (event) => {
  event.target.classList.remove('hovered');
};
const dragDrop = (event) => {
  event.target.classList.remove('hovered');
  event.target.append(item);
};

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragDrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}
