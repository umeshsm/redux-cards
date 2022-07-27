export function getTotalBudget(cards) {
  return cards.reduce((acc, item) => acc + parseInt(item.project_budget), 0);
}

export function getNewCardDetails(length) {
  return {
    name: `Project ${length + 1}`,
    project_budget: Math.floor(Math.random() * 501),
    project_end_date: JSON.stringify(new Date()),
  };
}
