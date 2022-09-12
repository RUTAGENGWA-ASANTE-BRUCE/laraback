export const getStoreUrl = async (storeId) => {
  const res = await fetch(`api/admin/stores/${storeId}`, { method: "GET" });
  const data = await res.json();
  if (!data) {
    return { msg: "Store not found" };
  } else {
    const storeLink = `/coupons/${data.slug}`;
    return storeLink;
  }
};

export const getTotalMoney = (transactions) => {
  var totalMoney = 0;
  if (transaction.length == 0) {
    return totalMoney;
  } else {
    transactions.forEach((transaction) => {
      if (transaction["Commission Amount"]) {
        totalMoney += transaction["Commission Amount"];
      } else if (transaction["AMount"]) {
        totalMoney += transaction["AMount"];
      } else if (transaction["Cashback"]) {
        totalMoney += transaction["Cashback"];
      }
    });
    return totalMoney;
  }
};
