// Simulated bank account data
const bankAccounts = {
    "12345": 1000,
    "67890": 500,
    "11223": 2000,
    "44556": 1500,
};

// Function to display the balance
function showBalance() {
    const accountNumber = document.getElementById("accountNumber").value.trim();

    // Check if the account exists
    if (bankAccounts[accountNumber] !== undefined) {
        document.getElementById("accountDisplay").innerText = accountNumber;
        document.getElementById("balance").innerText = bankAccounts[accountNumber];
        document.getElementById("balanceDisplay").style.display = "block";

        // Enable deposit and withdraw sections
        document.getElementById("depositSection").style.display = "block";
        document.getElementById("withdrawSection").style.display = "block";
    } else {
        alert("Account not found. Please enter a valid account number.");
        document.getElementById("balanceDisplay").style.display = "none";
        document.getElementById("depositSection").style.display = "none";
        document.getElementById("withdrawSection").style.display = "none";
    }
}

// Function for depositing money
function deposit() {
    const accountNumber = document.getElementById("accountDisplay").innerText;
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);

    if (depositAmount > 0) {
        bankAccounts[accountNumber] += depositAmount;
        document.getElementById("balance").innerText = bankAccounts[accountNumber];
        alert(`Deposited $${depositAmount}. New balance: $${bankAccounts[accountNumber]}`);
        document.getElementById("depositAmount").value = ""; // Clear input field
    } else {
        alert("Please enter a valid deposit amount.");
    }
}

// Function for withdrawing money
function withdraw() {
    const accountNumber = document.getElementById("accountDisplay").innerText;
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

    if (withdrawAmount > 0) {
        if (withdrawAmount <= bankAccounts[accountNumber]) {
            bankAccounts[accountNumber] -= withdrawAmount;
            document.getElementById("balance").innerText = bankAccounts[accountNumber];
            alert(`Withdrew $${withdrawAmount}. New balance: $${bankAccounts[accountNumber]}`);
            document.getElementById("withdrawAmount").value = ""; // Clear input field
        } else {
            alert("Insufficient funds.");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
}
