window.onload = function () {
    const validate = new window.JustValidate("#contact-from");
    validate
        .addField("#name", [
            {
                rule: "required"
            },
            {
                rule: "minLength",
                value: 3
            },
            {
                rule: "maxLength",
                value: 30
            }
        ])
        .addField("#email", [
            {
                rule: "required"
            },
            {
                rule: "required"
            },
            {
                rule: "email"
            }
        ])
        .addField("#phone", [
            {
                rule: "required"
            },
            {
                rule: "minLength",
                value: 7
            },
            {
                rule: "maxLength",
                value: 12
            },
            {
                rule: "integer"
            }
        ])
        .addField("#inquiryType", [
            {
                rule: "required"
            }
        ])
        .addField("#message", [
            {
                rule: "required"
            }
        ])
    ;
};

function formSubmit() {
    alert("Form Submitted!");
    location.reload(true);
}
