const ond1 = document.getElementById("onderwerp-1");

fetch('/planeAccidents')
.then((myData) => myData.json())
.then((textData) => createChart1(textData));

function createChart1(textData) {
  const charts = textData;
  new Chart(ond1, {
    type: 'line',
    data: {
      labels: charts.map(row => row.year),
      datasets: [{
        backgroundColor: 'lightgreen',
        label: '# Aantal ongelukken',
        data: charts.map(row => row.accidents),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

setTimeout(() => {
  const ond2 = document.getElementById("onderwerp-2");
  
  fetch('/injuries')
  .then((myData) => myData.json())
  .then((textData2) => createChart2(textData2));
  
  function createChart2(textData2) {
    const charts2 = textData2;
    new Chart(ond2, {
      type: 'bar',
      data: {
        labels: charts2.map(row => row.year),
        datasets: [
          {
            backgroundColor: 'lightgreen',
            label: '# Aantal fatale ongelukken',
            data: charts2.map(row => row.FatalInjuries),
            borderWidth: 1
          },
          {
            backgroundColor: 'darkgreen',
            label: '# Aantal serieuze ongelukken',
            data: charts2.map(row => row.SeriousInjuries),
            borderWidth: 1
          },
          {
            backgroundColor: 'white',
            label: '# Aantal kleine ongelukken',
            data: charts2.map(row => row.MinorInjuries),
            borderWidth: 1
          }
      ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  });
}
}, 1000);