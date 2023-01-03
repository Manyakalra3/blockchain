import Config from "config/config.json"

// sets base uri to use in all requests.
const BaseUri = Config["BACKEND_URI"];
// const BaseUri = "http://localhost:5000";
export default BaseUri;