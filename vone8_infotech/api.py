import frappe


@frappe.whitelist(allow_guest=True)
def get_login_settings():
    settings = frappe.get_single("Vone8 UI Settings")

    return {
        "brand_name": settings.brand_name or "Vone8 Infotech",
        "login_heading": settings.login_heading or "Welcome back.",
        "login_subtitle": settings.login_subtitle
        or "Sign in to continue to your workspace.",
        "logo": settings.logo or "",
        "primary_color": settings.primary_color or "#2563EB",
        "background_color": settings.background_color or "#F6F8FC",
        "footer_text": settings.footer_text
        or "Powered by Vone8 Infotech",
        "show_features": settings.show_features,
    }