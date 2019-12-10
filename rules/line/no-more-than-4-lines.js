 

export const noMoreThan4Lines = (lineChart) => {
    const dataSize = lineChart.chart.config.data.datasets.length; 
    if(dataSize > 4){
         
        console.warn("Don't plot more than 4 lines in one chart. If you need to display more, break them out into separate charts for better comparison. Read more here https://www.data-to-viz.com/caveat/spaghetti.html");
    }
}