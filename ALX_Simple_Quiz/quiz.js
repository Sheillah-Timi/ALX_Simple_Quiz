// Define the function to check the answer
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Retrieve feedback element
    const feedback = document.getElementById("feedback");

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
