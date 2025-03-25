export const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
        return ('Please enter a valid email')
       
    }
    else {
        return('')
    }

}