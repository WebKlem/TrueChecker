console.log("TrueChecker is working!");

const products = [
    {
        code: "ABC12345",
        name: "CREAMIO Yogurt",
        status: "genuine"
    },
    {
        code: "XYZ67890",
        name: "Sample Product",
        status: "genuine"
    },
    {
        code: "TEST2026",
        name: "Another Product",
        status: "genuine"
    }
];

const verifyButton = document.getElementById("verifyButton");
const productCodeInput = document.getElementById("productCode");
const result = document.getElementById("result");

verifyButton.addEventListener("click", function() {
    const product = products.find(function(item) {
        return item.code === productCodeInput.value;
    });

    if (product) {
        result.innerHTML =
    "<strong>✓ PRODUCT VERIFIED</strong><br>" +
    "Name: " + product.name + "<br>" +
    "Code: " + product.code + "<br>" +
    "Status: " + product.status;
    }
    else {
        result.textContent = "product not found!";
    }
});