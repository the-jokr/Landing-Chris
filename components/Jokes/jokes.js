
class Joke {
    constructor(jokeElement) {
      this.jokeElement = jokeElement;
      this.expandJokeBtn = this.jokeElement.querySelector('.showcase-bottom-joke-title');
      this.expandJokeBtn.addEventListener('click', () => this.expandJoke())
    }
  
    expandJoke() {
      if (this.jokeElement.className === "showcase-bottom-joke") {
        this.jokeElement.classList.toggle('joke-open');
      }else if (this.jokeElement.className === "showcase-bottom-joke joke-open") {
        this.jokeElement.classList.toggle('joke-close');
      }else{
        this.jokeElement.setAttribute("class", "showcase-bottom-joke joke-open")
      }

  
    }
  }
  
let jokes = document.querySelectorAll('.showcase-bottom-joke');
jokes.forEach(page => {
    return new Joke(page);
});



