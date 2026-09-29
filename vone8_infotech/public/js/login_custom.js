(function () {

    function is_login_page() {
        return window.location.pathname === "/login";
    }


    /*
     * =========================================================
     * SUPPLIER REGISTRATION
     * =========================================================
     */

    function add_supplier_registration_button() {

        if (!is_login_page()) {
            return;
        }

        if (window.location.hash !== "#login") {
            return;
        }

        if (document.getElementById("supplier-registration-button")) {
            return;
        }

        const login_container =
            document.querySelector(".for-login");

        if (!login_container) {
            return;
        }

        const actions =
            login_container.querySelector(".page-card-actions");

        if (!actions) {
            return;
        }

        const button = document.createElement("a");

        button.id = "supplier-registration-button";

        button.href = "/supplier-registration";

        button.className =
            "btn btn-default btn-block supplier-registration-btn";

        button.innerText = "Supplier Registration";

        button.style.marginTop = "12px";

        actions.appendChild(button);
    }


    /*
     * =========================================================
     * LOGIN PAGE INITIALIZATION
     * =========================================================
     */

    function initialize_login_page() {

        if (!is_login_page()) {
            return;
        }

        document.body.classList.add("vone8-login-page");

        add_supplier_registration_button();

    }


    /*
     * =========================================================
     * PAGE LOAD
     * =========================================================
     */

    add_supplier_registration_button();

    window.addEventListener("load", function () {

        initialize_login_page();

        add_supplier_registration_button();

    });


    /*
     * =========================================================
     * HASH ROUTING
     * =========================================================
     */

    window.addEventListener("hashchange", function () {

        setTimeout(function () {
            initialize_login_page();
            add_supplier_registration_button();
        }, 100);

        setTimeout(function () {
            add_supplier_registration_button();
        }, 500);

    });


    /*
     * =========================================================
     * FRAPPE DYNAMIC DOM
     * =========================================================
     */

    const observer = new MutationObserver(function () {

        add_supplier_registration_button();

    });


    if (document.body) {

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    }


})();