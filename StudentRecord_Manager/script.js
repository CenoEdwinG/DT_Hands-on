// Select DOM elements for form and table body
const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

form.addEventListener('submit', (e) => { // Event listener for form submission
    e.preventDefault(); // Prevent default form submission behavior, client-side script handles DOM updates

    // Get student information inputs
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Create new row in student table
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${firstName}</td>
    <td>${middleName}</td>
    <td>${lastName}</td>
    <td>${phone}</td>
    <td>${address}</td>
    `;
    tableBody.appendChild(row);

    // Clear form inputs after clicking 'Add Student' button
    form.reset();
});