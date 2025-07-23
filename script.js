const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.getElementById('errorMsg');
const taskList = document.getElementById('taskList');

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.querySelector('.slider .prev');
const nextBtn = document.querySelector('.slider .next');

const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg"
];
let currentSlide = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  errorMsg.textContent = '';

  const taskText = taskInput.value.trim();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    errorMsg.textContent = 'Введите корректный email.';
    return;
  }
  if (taskText === '') {
    errorMsg.textContent = 'Задача не может быть пустой.';
    return;
  }

  addTask(taskText);

  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  taskList.appendChild(li);
}

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

function showSlide(index) {
  currentSlide = (index + images.length) % images.length; 
  sliderImage.src = images[currentSlide];
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);