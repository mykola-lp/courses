// Each object represents a task with its script path, name and description.
const taskConfig = {
  task01: {
    scriptPath: "scripts/task01.js",
    name: "Task 1.",
    description: "Створіть змінну за допомогою camelCase, snake_case та PascalCase і надайте їм значення від 0 до 2-х. Виведіть значення цих змінних на екран за допомогою методу alert та console.log. Скажіть, чим кардинально відрізняється alert та console.log?"
  },
  task02: {
    scriptPath: "scripts/task02.js",
    name: "Task 2.",
    description: "Дано рядок str = 'HTML'. Застосуйте до неї певний метод рядків, щоб усі літери стали короткими. Виведіть результат у консоль. Якщо є труднощі, подивіться, що таке методи рядків."
  },
  task03: {
    scriptPath: "scripts/task03.js",
    name: "Task 3.",
    description: "Запитайте ім'я користувача за допомогою методу prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я {ім'я}'."
  },
  task04: {
    scriptPath: "scripts/task04.js",
    name: "Task 4.",
    description: "Даний масив ['Саша', 'Петрик', 'Оксана'], зробіть із нього ['Оксанa', 'Олег', 'Сашко']. Реалізуйте це завдання двома способами. У першому вихідний масив має бути змінений, у другому - не може бути змінений."
  },
  task05: {
    scriptPath: "scripts/task05.js",
    name: "Task 5.",
    description: "Напишіть скрипт, який приймає з клавіатури 2 числа, і якщо перше більше за друге, то виводить на екран їх суму, якщо ж навпаки - суму. Якщо числа однакові, виводить на екран цифри однакові."
  },
  task06: {
    scriptPath: "scripts/task06.js",
    name: "Task 6.",
    description: "Даний масив чисел, наприклад: [10, 20, 30, 50, 235, 3000]. Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5. "
  },
  task07: {
    scriptPath: "scripts/task07.js",
    name: "Task 7.",
    description: "Вага записана у змінну weight. Рекомендацію записуй рядком у змінну recommendation. Якщо вага до 4 кг (не включаючи це значення), рекомендація – 'Пора перекусити'. Якщо вага від 4 кг включно до 5.5 кг включно - 'Вага в нормі'.Якщо вага більше 5.5 кг - 'Пора на тренування'. Як умови, використовуй значення weight 1, 3, 4, 5, 10. Рекомендацію виводь у консоль."
  }

  // Add more tasks here...
};

// Event that runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the select element and the run button.
  const taskSelector = document.getElementById('taskSelector');
  const runButton = document.getElementById('runTask');
  const taskDescription = document.getElementById('taskDescription');
  
  // Variable to store the selected task.
  let selectedTask = null;

  // Check the URL for the 'run' parameter to see if a task was already running.
  const urlParams = new URLSearchParams(window.location.search);
  const runTask = urlParams.get('run');

  // If the 'run' parameter exists, remove it from the URL and reset the select element.
  if (runTask && taskConfig[runTask]) {
    window.history.replaceState(null, '', window.location.pathname); // Clean the URL without reloading.
    taskSelector.value = '';                                         // Reset the select element to its default value.
    runButton.disabled = true;                                       // Disable the run button until a new task is selected.
    taskDescription.textContent = '';                                // Clear the description.
  }

  // Handle changes in the select element.
  taskSelector.addEventListener('change', (e) => {
    selectedTask = e.target.value;               // Store the selected task.
    runButton.disabled = !selectedTask;          // Enable the run button only if a task is selected.

    if (selectedTask) {
      const task = taskConfig[selectedTask];
      taskDescription.textContent = task.description; // Update the task description.

      // Update the URL without reloading the page.
      const newUrl = `${window.location.pathname}?run=${selectedTask}`;
      window.history.replaceState(null, '', newUrl);
    } else {
      taskDescription.textContent = ''; // Clear description if no task is selected.
    }
  });

  // Handle the click event on the run button to execute the selected task.
  runButton.addEventListener('click', () => {
    if (selectedTask) {
      const task = taskConfig[selectedTask];
        
      if (task) {
        clearContext(); // Clear previous data before running the new task.

        // Load the script for the selected task.
        loadScript(task.scriptPath, () => {
          const functionName = selectedTask; // The function name matches the task name.

          console.log(`Trying to call function: ${functionName}`);

          if (typeof window[functionName] === 'function') {
            window[functionName]();                                   // Call the function for the selected task.
          } else {
            console.error(`Function ${functionName} is not defined`); // Log an error if the function is not found.
          }

          // Print the task description to the console.
          console.log(`Task Description: ${task.description}`);
        });
      }
    }
  });
});

/**
 * Function to load an external script.
 * 
 * @param {string} src - the path to the script to load.
 * @param {function} callback - the callback function to execute after the script loads. 
 */
function loadScript(src, callback) {
  // Remove the previously loaded script if it exists.
  const existingScript = document.getElementById('dynamicScript');

  if (existingScript) {
    existingScript.remove(); // Remove the old script from the DOM.
  }

  // Create a new script element
  const script = document.createElement('script');
  script.src = src;            // Set the path to the new script.
  script.id = 'dynamicScript'; // Set a unique ID for the script so it can be found and removed later.

  script.onload = () => {
    if (callback) {
      callback(); // Execute the callback function after the script loads.
    }
  };

  // Event handler for script load errors.
  script.onerror = () => {
    console.error(`Failed to load script: ${src}`);
  };

  // Add the new script element to the document.
  document.body.appendChild(script);
}

// Function to clear the context before running a new task.
function clearContext() {
  // Clear the console for the new task.
  console.clear(); 

  // Remove custom elements that might have been added by the previous task.
  const alerts = document.querySelectorAll('.alert');

  // Remove all elements with the 'alert' class.
  alerts.forEach(alert => alert.remove());
}
