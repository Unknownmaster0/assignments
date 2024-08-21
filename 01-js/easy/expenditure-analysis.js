/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];

  transactions.forEach((element) => {
    const crntCategory = element.category;
    const crntPrice = element.price;
    const obj = {
      category: crntCategory,
      totalSpent: crntPrice,
    };
    if (ans.length == 0) {
      // push the 1st object as it is.
      ans.push(obj);
    } else {
      // now check on each object of ans array, does it have category same as crnt obj.
      const isPresent = ans.some((el, idx) => {
        if (el.category === crntCategory) {
          el.totalSpent += crntPrice;
          return true;
        }
      });

      if (!isPresent) {
        ans.push(obj);
      }
    }
  });

  return ans;
}

module.exports = calculateTotalSpentByCategory;
