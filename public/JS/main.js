
// Select where the chart will appear.
const ctx = document.querySelector(".onderwerp1-img1");
const ctx2 = document.querySelector(".onderwerp1-img2");

    


// Variables that will randomize the values of the chart when the the page refreshes.

  let data1 = Math.floor(Math.random() * 101) + 30
  let data2 = Math.floor(Math.random() * 101) + 30
  let data3 = Math.floor(Math.random() * 101) + 30
  let data4 = Math.floor(Math.random() * 101) + 30
  let data5 = Math.floor(Math.random() * 101) + 30
  let data6 = Math.floor(Math.random() * 101) + 30

// The whole chart script process.
new Chart(ctx, {
  // What chart type it is.
  type: "bar",
  // All the data resides here.
  data: {
    // Names that will appear beneath the graph.
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // Name of the chart.
        label: "# of boats",
        // What numbers will be shown on the graph.
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





// the whole chart script process
new Chart(ctx2, {
  // what chart type it is
    type: "pie",
      // all the data resides here
    data: {
      // Names that will appear above chart and in the chart
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
           // Name of the whole chart
          label: "# of boats",
          // What amount of data will it show on graphs here
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
