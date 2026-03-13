const BASE_URL = "https://api.freeapi.app/api/v1";

export async function api(url, method = "GET", data = null) {

  const res = await fetch(BASE_URL + url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : null
  });

  // console.log(res);

  // if (!res.ok) {
  //   throw new Error(res.message || "Request failed");
  // }

  return res.json();
}