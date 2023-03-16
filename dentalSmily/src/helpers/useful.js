export const validate = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
        case "nombre":
        case "apellido":
        case "fullName":
        case "fullname":
        case "nombrecompleto":    
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[a-z]/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            } return {message: "", validated: true};

        case "email":
        case "correo":
        case "e-mail":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return {message: "Invalid e-mail format", validated: false};
            } return {message: "", validated: true};

        case "password":
        case "contraseña":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if ((!/[\d()+-]/g.test(data)))  {
                return {message: "Invalid password format and too short", validated: false};
            } return {message: "", validated: true};
        case "phone":
        case "tfno":
        case "tlfno":
        case "telefono":
        case "phonenumber":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[\d()+-]/g.test(data)) {
                return {message: "Invalid phone format", validated: false};
            } return {message: "", validated: true};
        default:
            console.log("Field not recognized");
    };
};