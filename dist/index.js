var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
let currentRole = Role.User;
console.log(currentRole);
export {};
//# sourceMappingURL=index.js.map