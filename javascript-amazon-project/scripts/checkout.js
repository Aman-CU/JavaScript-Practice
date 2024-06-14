import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import "../data/cart-class.js";
//import "../data/backend-practice.js";

//async is shortcut for promise
async function loadPage() {
  //loadProductsFetch().then(() => {});
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
function loadPage() {
  return new Promise((resolve) => {
    console.log("load Page");
    resolve();
  });
} */

/*

//Promise.all() helps us to run multiple Promises at the same time and it makes more efficient.
Promise.all([
  loadProductsFetch(),
  //   new Promise((resolve) => {
  //     console.log("start promise");
  //     loadProducts(() => {
  //       console.log("finished loading");
  //       resolve("value1");
  //     });
  //   }),

  new Promise((resolve) => {
    loadCart(() => {
      resolve("value2");
    });
  }),
]).then((value) => {
  console.log("next step");
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});

*/

/*
new Promise((resolve) => {
  console.log("start promise");
  loadProducts(() => {
    console.log("finished loading");
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      console.log("next step");
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

  */

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
