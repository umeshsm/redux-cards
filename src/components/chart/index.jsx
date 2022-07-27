import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

function Chart({ cards }) {
  const labels = cards.map((item) => item.name);
  const projectBudget = cards.map((item) => item.project_budget);
  const averageProjectBudget = cards.map((item, i) => {
    if (i !== 0) {
      return (item.project_budget + cards[i - 1].project_budget) / 2;
    }
    return null;
  });

  const dataset = {
    labels,
    datasets: [
      {
        id: 1,
        label: "Project Budget",
        data: projectBudget,
        borderWidth: 3,
        backgroundColor: "#3188D1",
        borderColor: "#3188D1",
      },
      {
        id: 2,
        label: "Average Project Budget",
        data: averageProjectBudget,
        borderWidth: 1,
        backgroundColor: "#FFBF00",
        borderColor: "#FFBF00",
        borderDash: [5, 5],
      },
    ],
  };
  return <Line datasetIdKey="id" data={dataset} />;
}

export default Chart;
