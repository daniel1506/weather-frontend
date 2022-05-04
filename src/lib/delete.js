//This function accepts api and data to send delete request, and return the response object from server. Moreover, the status code is added to the response object for further use.
function deleteReq(url) {
  let status;
  const token = localStorage.getItem("token") || "";
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  })
    .then((response) => {
      console.log(response.json());
      status = response.status;
      try {
        return response.json();
      } catch (error) {
        return response;
      }
    })
    .then((result) => {
      result.status = status;
      return result;
    });
}
export default deleteReq;
