const api_root = "http://localhost:80/session";
export let userId = null;

export function GetState(){
    return myFetch(api_root + "/");
}

export function Login(name, fbid, access_token){
    return myFetch(api_root + '/users', { name, fbid, access_token })
            .then(x=> userId = x.id);
}

export function setWeight(w){
    return myFetch(api_root + '/currentuser/weight', { w })
}

export function addCalories(c){
    return myFetch(api_root + '/currentuser/calories', { c })
}

export function setCalGoal(g){
    return myFetch(api_root + '/currentuser/goal', { g })
}

export function setAge(a){
    return myFetch(api_root + '/currentuser/age', { a })
}

export function setHeight(h){
    return myFetch(api_root + '/currentuser/height', { h })
}

export function getUsers(){
    return myFetch(api_root + "/users")
}

export function getFriends(){
    return myFetch(api_root + "/currentuser/friends")
}

export function removeFriend(f){
    return myFetch(api_root + "/currentuser/friends", {f})
}

export function addFriend(f){
    return myFetch(api_root + "/currentuser/friends/add", {f})
}

  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                userId: userId
            }
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }