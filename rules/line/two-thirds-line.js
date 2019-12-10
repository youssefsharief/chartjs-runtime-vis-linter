 

export const twoThirdsLine = (lineChart) => {
    const yRange = lineChart.scales["y-axis-0"].end;
    const lines = lineChart.chart.config.data.datasets;
    let yMax;
    for (let index = 0; index < lines.length; index++) {
        const data = lines[index].data;
        yMax = data[0];
        for (let j = 0; j < data.length; j++) {
            const element = data[j];
            if(yMax<element){
                yMax = element;
            }
        }
    }
    if(yMax>(2/3*yRange)){
         
        console.warn("Set the height of a line chart such that the data in the line chart takes up approximately two-thirds of the y-axis’ maximum scale.");
    }
}