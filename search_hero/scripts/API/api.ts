export function apiResponse(request: string) {
  getRequest(request);
}

async function getRequest(search: string) {
  try {
    let obj = await fetch(
      `https://superheroapi.com/api/1850101211839199/search/${search}`,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      }})
    console.log(obj);

    let result = await obj.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
