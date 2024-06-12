// Select where the chart will appear.
const ctx = document.querySelector(".onderwerp2-img1");
const ctx2 = document.querySelector(".onderwerp2-img2");

    


// Variables that will randomize the values of the chart when the the page refreshes.

  let data1 = Math.floor(Math.random() * 101) + 30
  let data2 = Math.floor(Math.random() * 101) + 30
  let data3 = Math.floor(Math.random() * 101) + 30
  let data4 = Math.floor(Math.random() * 101) + 30
  let data5 = Math.floor(Math.random() * 101) + 30
  let data6 = Math.floor(Math.random() * 101) + 30

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of auto's",
        data: [data1, data2, data3, data4, data5, data6],
        borderWidth: 1,
        
      },
    ],
  }, 
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});






new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of boats",
          data: [data1, data2, data3, data4, data5, data6],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
