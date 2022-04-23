function GetAllPageNames(cards) {
  const page_names = [];
  cards.forEach((card, i) => {
    if (!page_names.includes(card.page_name) && card.tab_name === "PREMIUM") {
      page_names.push(card.page_name);
    }
  });
  return page_names;
}

export { GetAllPageNames };
