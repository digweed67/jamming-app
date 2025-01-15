const clientId = '44ab147a04194686b8f40eed0e7d32b0'; // Spotify unique identifier for my app
const redirectUri = 'http://localhost:3000/'; // redirect URL once logged in and authorized (matches dashboard address)
const accessTokenExpirationTime = 3600; //TYpically expire in 1h

let accessToken;

const Spotify = {
  getAccessToken() {
    if(accessToken) {
        return accessToken;
    }

    // Check if access token and expires in is in the URL using regex.
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    
    //If they match, then accessToken will be assigned the number that comes after = ie, [1]
    if (tokenMatch && expiresInMatch) {
        accessToken = tokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);//and expires in will be asignned the number that comes after =, ie, in index [1], we parse it into a number just in case 

        //setTimeOut expects a callback function and a delay. The function is clearing the access token to an emtpy string, the expires in is in seconds, and we multiply it by 1000 to turn it into miliseconds which is the unit that setTimeOut method requires. 'Window' provides access to the URL browser window
        window.setTimeout(()=> (accessToken = ''), expiresIn * 1000);

        //pushState This method modifies the browser's history stack without reloading the page. Its parameters are state, title and url. The state 'Access token' is not the actual object but a label to know what the page refers to, title is usually set to null, and '/' resets the url to the root, removing sensitive data like access token and expires in information. 
        window.history.pushState('Access Token', null, '/');
    }


  return accessToken;
    }   

};

export default Spotify;


