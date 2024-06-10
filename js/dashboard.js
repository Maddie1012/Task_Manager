// dashboard.js
const deleteTaskButtons = document.querySelectorAll('.delete-task-button');

deleteTaskButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const taskItem = button.closest('.task-item');
    const taskId = taskItem.dataset.taskId;

    // Send a DELETE request to the server to delete the task
    fetch(`/api/tasks/${taskId}`, {
      method: 'DELETE',
    })
     .then(response => response.json())
     .then(data => {
        if (data.success) {
          // Remove the task item from the DOM
          taskItem.remove();
        } else {
          console.error('Error:', data.error);
        }
      })
     .catch(error => {
        console.error('Error:', error);
      });
  });
});