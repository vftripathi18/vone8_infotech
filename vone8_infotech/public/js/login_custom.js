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
     * BRSNR DASHBOARD BUTTON
     * =========================================================
     */

    function add_brsnr_dashboard_button() {

        if (!is_login_page()) {
            return;
        }

        if (window.location.hash !== "#login") {
            return;
        }

        if (document.getElementById("brsnr-dashboard-button")) {
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

        const button = document.createElement("button");

        button.id = "brsnr-dashboard-button";

        button.type = "button";

        button.className =
            "btn btn-default btn-block brsnr-dashboard-btn";

        button.innerHTML =
            "📊 Check BRSNR Dashboard";

        button.style.marginTop = "12px";

        button.addEventListener("click", function () {

            window.location.href = "/brsnr-login";

        });

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

        add_brsnr_dashboard_button();

    }


    /*
     * =========================================================
     * PAGE LOAD
     * =========================================================
     */

    add_supplier_registration_button();
    add_brsnr_dashboard_button();

    window.addEventListener("load", function () {

        initialize_login_page();

        add_supplier_registration_button();

        add_brsnr_dashboard_button();

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

            add_brsnr_dashboard_button();

        }, 100);

        setTimeout(function () {

            add_supplier_registration_button();

            add_brsnr_dashboard_button();

        }, 500);

    });


    /*
     * =========================================================
     * FRAPPE DYNAMIC DOM
     * =========================================================
     */

    const observer = new MutationObserver(function () {

        add_supplier_registration_button();

        add_brsnr_dashboard_button();

    });


    if (document.body) {

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    }


})();