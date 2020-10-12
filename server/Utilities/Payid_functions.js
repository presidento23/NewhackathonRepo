const PayidGetUser = (email) => {
    const myHeaders = new Headers();
    myHeaders.append("PayID-API-Version", "2020-08-25 ");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // grab the payid
   const response = await fetch(
      `http://127.0.0.1/users/${email}$Mailpay.sandbox.payid.org`,
      requestOptions);
    return (
       response
    );
    
}

export default PayidGetUser;