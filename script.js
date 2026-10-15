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
    result.classList.remove("warning");
    const product = products.find(function(item) {
        return item.code === productCodeInput.value;
    });

    if (product) {
    result.innerHTML =
        "<strong>PRODUCT VERIFIED <span style='font-weight: bold;'>&#10003;</span></strong><br><br>" +
        "<strong>Product name:</strong> " + product.name + "<br>" +
        "<strong>Product code:</strong> " + product.code + "<br>" +
        "<strong>Status:</strong> <span class='status-genuine'>" + product.status + "</span>";
}
else {
    result.classList.add("warning");
    
    result.innerHTML =
       "<strong>PRODUCT NOT FOUND <span class='warning-icon'>&#9888;</span></strong><br><br>" +
        "We couldn't find this product code in our records.<br>" +
        "Please check the code and try again.<br><br>" +
        "<strong>Important:</strong> This does not automatically mean the product is fake.";
}
});