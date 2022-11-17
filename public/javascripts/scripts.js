// client-side scripts for user interaction

//delete confirmation
function confirmDelete() {
    return confirm('Are you sure you want to delete this item?')
}

// pw check
function comparePasswords() {
    let password = document.getElementById('password').value
    let confirm = document.getElementById('confirm').value
    let pwMsg = document.getElementById('pwMsg')

    if (password != confirm) {
        pwMsg.innerText = "Passwords do not match"
        pwMsg.className = "text-danger"
        return false
    }
    else {
        pwMsg.innerText = ""
        pwMsg.className = ""
        return true
    }
}