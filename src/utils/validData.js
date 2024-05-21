
export const checkvaliddata = (email, password, fullName) => {
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordValid =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    const fullNameValid =/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName)

 
    
    if (!emailValid) {
        return "Email is not valid"
    }
    if (!passwordValid) {
        return "Password is not valid"
    }
    if (!fullNameValid) {
        return "Name is not valid"
    }
    return null;
    }
    
    