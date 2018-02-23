export const colorLine1 = "rgba(220,220,220,1)";
export const colorLine2 = "rgba(151,187,205,1)";

export const chartInitialData = () => ({
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November", "December"],
    datasets: [
        {
            label: "Monthly",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: colorLine2,
            pointColor: "#fff",
            pointStrokeColor: colorLine2,
            pointHighlightFill: "#fff",
            pointHighlightStroke: colorLine2,
            data: []
        },
        {
            label: "Cumulative",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: colorLine1,
            pointColor: "#fff",
            pointStrokeColor: colorLine1,
            pointHighlightFill: "#fff",
            pointHighlightStroke: colorLine1,
            data: []
        }
    ]
});