"use strict";
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdemin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
const roles = {
    user: 0,
    admin: 1,
    superAdmin: 2
};
console.log(Roles.User);
console.log(roles.user);
