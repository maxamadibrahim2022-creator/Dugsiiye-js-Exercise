function getUserData() {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve({ id: 1, name: "cumar" });
      } else {
        reject("wax data ah lama soo helin");
      }
    },1000);
  });
}

getUserData()
    .then((data) => console.log("Use Data", data))
    .catch((err) => console.log(err));
