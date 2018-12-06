import axios from "axios";

var Api = (function() {
  var _server = localStorage.getItem("api-server");
  var _user = localStorage.getItem("api-user");
  var _password = localStorage.getItem("api-password");
  var _baseUrl =
    _user && _password
      ? `https://${_user}:${_password}@${_server}`
      : `https://${_server}`;

  const registerUser = (name, password) => {
    axios.put(`${_baseUrl}/_users/org.couchdb.user:${name}`, {
      _id: `org.couchdb.user:${name}`,
      name: name,
      password: password,
      roles: [],
      type: "user"
    });
  };

  var save = (server, user, password) => {
    _server = server;
    // this._user = user;
    // this._password = password;
    localStorage.setItem("api-server", server);
    localStorage.setItem("api-user", user);
    localStorage.setItem("api-password", password);
    _baseUrl =
      _user && _password
        ? `https://${user}:${password}@${server}`
        : `https://${server}`;
  };

  var test = () => {
    axios
      .get(_baseUrl)
      .then(resp => console.log(resp.data))
      .catch(err => console.error(err));
  };

  return {
    registerUser,
    save,
    test
  };
})();

export default Api;
