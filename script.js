document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('schedulerForm');
    const scheduleTableBody = document.getElementById('scheduleBody');

    // Event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const patientName = document.getElementById('patientName').value;
        const operationType = document.getElementById('operationType').value;
        const doctorName = document.getElementById('doctorName').value;
        const operationDate = document.getElementById('operationDate').value;
        const operationTime = document.getElementById('operationTime').value;

        // Create new row for the table
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${patientName}</td>
            <td>${operationType}</td>
            <td>${doctorName}</td>
            <td>${operationDate}</td>
            <td>${operationTime}</td>
            <td class="actions">
                <button class="deleteBtn">Delete</button>
            </td>
        `;

        // Add row to table
        scheduleTableBody.appendChild(newRow);

        // Reset form after submission
        form.reset();
    });

    // Event listener for delete buttons
    scheduleTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
