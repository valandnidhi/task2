const name1 = prompt("Enter your Name");
document.getElementById("userName").innerText = name1;


function filterTable() {
    const query = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#table tbody tr");
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
    });
}

const chart1= document.getElementById("chart");
new Chart(chart1, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Monthly Active Users",
            data: [100, 200, 300, 400, 500],
            borderColor: "red",
            borderWidth: 5
        }]
    },
    options: {
        responsive: true,
    }
});




