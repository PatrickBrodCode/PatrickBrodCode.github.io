"use strict";
((function () {
    // added task-list to protected routes
    let protected_routes = [
        "contact-list",
        "task-list"
    ];
    if (protected_routes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
}))();
//# sourceMappingURL=authguard.js.map