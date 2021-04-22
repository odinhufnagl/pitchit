


var user = (function () {
    var user = "";

    var getUser= function() {
        return user
    }
    var setUser = function(userinfo) {
        user = userinfo;

    }

    return {
        getUser: getUser,
        setUser: setUser,
    }
})();

export default user;