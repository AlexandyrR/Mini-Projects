document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            openAppointmentForm(info.dateStr);
        }
    });
    calendar.render();

    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentList = document.getElementById('appointmentList');
    const dailyIncomeDisplay = document.getElementById('dailyIncome');

    let appointments = [];

    function openAppointmentForm(date) {
        document.getElementById('date').value = date;
        appointmentForm.style.display = 'block';
    }

    function addAppointment(date, time, name, phone, price) {
        const appointment = {
            id: Date.now(),
            date,
            time,
            name,
            phone,
            price: parseFloat(price)
        };

        appointments.push(appointment);
        updateUI();
    }

    function updateUI() {
        appointmentList.innerHTML = '';
        appointments.forEach(appointment => {
            const appointmentItem = document.createElement('div');
            appointmentItem.classList.add('appointment');
            appointmentItem.innerHTML = `
                <p><strong>Date:</strong> ${appointment.date}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                <p><strong>Name:</strong> ${appointment.name}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Price:</strong> $${appointment.price.toFixed(2)}</p>
                <button onclick="deleteAppointment(${appointment.id})">Delete</button>
            `;
            appointmentList.appendChild(appointmentItem);
        });

        calculateDailyIncome();
    }

    function deleteAppointment(id) {
        appointments = appointments.filter(appointment => appointment.id !== id);
        updateUI();
    }

    function calculateDailyIncome() {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const dailyAppointments = appointments.filter(appointment => appointment.date === formattedDate);
        const totalIncome = dailyAppointments.reduce((acc, appointment) => acc + appointment.price, 0);
        dailyIncomeDisplay.textContent = `Total income for today: $${totalIncome.toFixed(2)}`;
    }

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const price = document.getElementById('price').value;
        if (date && time && name && phone && price) {
            addAppointment(date, time, name, phone, price);
            appointmentForm.style.display = 'none';
            appointmentForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
