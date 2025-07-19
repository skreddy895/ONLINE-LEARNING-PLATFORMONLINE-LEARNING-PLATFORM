window.onload = function() {
  alert("Welcome to EduSphere! Let’s start your learning journey.");
};

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const questions = ['q1', 'q2', 'q3'];
  let score = 0;
  let total = questions.length;

  questions.forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    const questionDiv = selected ? selected.closest('.quiz-question') : null;

    if (selected) {
      if (selected.value === 'correct') {
        score++;
        selected.parentElement.style.color = 'green';
      } else {
        selected.parentElement.style.color = 'red';
        const correctLabel = questionDiv.querySelector('input[value="correct"]').parentElement;
        if(correctLabel){
          correctLabel.style.color = 'green';
        }
      }
    } else {
      if(questionDiv) {
        questionDiv.querySelector('p').style.color = 'red';
      }
    }
  });

  const resultDiv = document.getElementById('quiz-result');
  resultDiv.innerHTML = `Your Score: ${score} / ${total}`;
});
