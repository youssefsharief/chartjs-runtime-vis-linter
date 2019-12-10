 

export const consistentColors = (barChart) => {
    const bar = barChart.chart.data.datasets[0];
    function countColor(bar) {
        let cacheColor = "";
        let count = 0;
        for (let index = 0; index < bar.backgroundColor.length; index++) {
            const element = bar.backgroundColor[index];
            if (element !== cacheColor) {
                cacheColor = element;
                count++;
            }
        }
        return count;
    }
    if(countColor(bar)>3){
         
        console.warn("Use consistent colors. Use one color for bar charts. You may use an accent color to highlight a significant data point.")
    }
}
