// Menu Mobile

// feito em css




//=================== sobre nós =========================//

   
// Função para buscar dados da API
async function fetchData(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}

// Função para atualizar o conteúdo da aba com os dados buscados
async function updateTabContent() {
  const apiUrl = 'https://www.mdsystemweb.com.br/projects/api/v1/test/about.php';
  const data = await fetchData(apiUrl);

  if (!data || data.length !== 3) {
      console.error('Invalid data format from API.');
      return;
  }

  const tab1Content = document.getElementById('tab1Content');
  const tab2Content = document.getElementById('tab2Content');
  const tab3Content = document.getElementById('tab3Content');

  tab1Content.innerHTML = data[0].description;
  tab2Content.innerHTML = data[1].description;
  tab3Content.innerHTML = data[2].description;
}


// Chame a função updateTabContent para preencher as guias com dados da API
updateTabContent();




//====================================== serviços ======================================///




// Função para fazer a requisição HTTP para a API e atualizar o slideshow
 async function fetchDataFromAPI() {
  const apiUrl = "https://www.mdsystemweb.com.br/projects/api/v1/test/services.php";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    updateSlideshow(data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}


// Função para criar os slides e inserir os dados
function updateSlideshow(data) {
  const slideshowContainer = document.querySelector('.slideshow-container');
  slideshowContainer.innerHTML = ""; // Limpa o conteúdo anterior

  data.forEach((slideData, index) => {
    const slide = document.createElement('div');
    slide.classList.add('mySlides');

    const titleElement = document.createElement('p');
    titleElement.classList.add('author');
    titleElement.textContent = slideData.title;

    const textElement = document.createElement('q');
    textElement.textContent = slideData.text;

    slide.appendChild(titleElement);
    slide.appendChild(textElement);

    slideshowContainer.appendChild(slide);
  });

 // Reinicia a apresentação de slides
  currentSlideIndex = 1;
  showSlide(currentSlideIndex);
}

// Função para exibir o slide atual
function showSlide(n) {
  const slides = document.querySelectorAll('.mySlides');
  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  slides.forEach(slide => slide.style.display = 'none');
  slides[currentSlideIndex - 1].style.display = 'block';

  currentSlideIndex++; // Mover para o próximo slide
}


// Função para mover para o slide seguinte ou anterior
function plusSlides(n) {
  showSlide(currentSlideIndex + n);
}




// Inicializa a apresentação de slides quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromAPI();

  
  let slideIndex = 0;
  showSlides();
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    const totalSlides = slides.length;
  
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = 'none';
    }
  
 
// Calcula os índices dos slides atual, anterior e seguinte
    const currentIndex = (slideIndex + totalSlides) % totalSlides;
    const prevIndex = (currentIndex - 1 % totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1 % totalSlides) % totalSlides;
  
    slides[currentIndex].style.display = 'block';
    slides[prevIndex].style.display = 'block';
    slides[nextIndex].style.display = 'block';
  }
  
  document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
  });
  

  
});

