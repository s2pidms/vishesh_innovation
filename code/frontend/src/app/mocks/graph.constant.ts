export const GRAPH_CONSTANT = {
  barChartOptions: (borderColor: string, backgroundColor: string , display : boolean = false) => {
    return {
      responsive: true,
      layout: {
        padding: {
          left: 5,
          right: 15,
          top: 30,
          bottom: 15,
        },
      },
      scales: {
        x: {
          // stacked : true
        },
        y: {
          // min: 0,
          //  stacked : true
        },
      },
      plugins: {
        legend: {
          display: display,
          position: 'bottom',
        },
        datalabels: {
          display: function (context: any) {
            return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
          },
          color: '#000000',
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 10,
              },
            },
          },
          anchor: 'end',
          align: 'top',
        },
      },
      font: {
        size: 6,
      },
      datasets: {
        bar: {
          maxBarThickness: 32,
        },
      },
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    };
  },
  GRAPH_DATA: { labels: [], datasets: [{ data: [] }] },
};
