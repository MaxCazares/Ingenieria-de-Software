const dbconnection = require('../../config/dbconnection');

module.exports = app => {
    const connection = dbconnection();

    app.get('/', (req, res) => {
        res.render('html/index');
    });

    app.get('/registro', (req, res) => {
        res.render('html/registro');
    });

    app.post('/iniciar', (req, res) =>{
        const {email, password} = req.body;
        connection.query("select * from paciente where email ='"+email+"' and contraseña ='"+password+"';", (err, result) => {
            // console.log(result);
            if(result.length > 0)
                res.render('html/perfil', {
                    r: result
                });
            else 
                res.redirect('/registro');
        });
    });

    app.post('/registrar', (req, res) =>{
        const {nombre, SN1, SN2, email, password} = req.body;
        // connection.query("insert into paciente (Nombre, ApellidoPaterno, ApellidoMaterno, Email, Contraseña) values ('"+nombre+"', '"+SN1+"', '"+SN2+"', '"+email+"', '"+password+"');" , (err, result) => {
        // });
        connection.query("UPDATE paciente SET Nombre='"+nombre+"', ApellidoPaterno='"+SN1+"', ApellidoMaterno='"+SN2+"', Email='"+email+"', Contraseña='"+password+"' WHERE IDPaciente='"+3+"'" , (err, result) => {
        });
        connection.query("select * from paciente where email ='"+email+"' and contraseña ='"+password+"';", (err, result) =>{
            console.log(result);
            res.render('html/informacion',{
                r:result
            });
        });
    });

    app.post('/perfil', (req, res) => {
        const IDP = req.body;
        // console.log(IDP.IDP);
        connection.query("select * from paciente where IDPaciente = '"+IDP.IDP+"'", (err, result) =>{
            // console.log(result);
            res.render('html/informacion',{
                r:result
            });
        });
    });

    app.post('/qr', (req, res) => {
        const IDP = 1; 
        console.log(IDP);
        connection.query("select * from paciente where IDPaciente = '"+IDP+"' ", (err, result) =>{
            // console.log(result);
            res.render('html/codigo',{
                r:result
            });
        });
    });

    app.post('/actualizar', (req, res) => {
        const {name, surname1, surname2, age, gender, phone, email, password, weight, height, bloodType, donor, disease, allergy} = req.body;
        connection.query("UPDATE paciente SET Nombre='"+name+"', ApellidoPaterno='"+surname1+"', ApellidoMaterno='"+surname2+"', Edad='"+age+"', Genero='"+gender+"', Telefono='"+phone+"',  Email='"+email+"', Contraseña='"+password+"', Peso='"+weight+"', Talla='"+height+"', TipoSangre='"+bloodType+"', DonanteOrganos='"+donor+"', EnfermedadActiva='"+disease+"', AlergiaMedica='"+allergy+"' WHERE email='"+email+"' and contraseña='"+password+"'", (err, result) => {
        });
        connection.query("select * from paciente where email ='"+email+"' and contraseña ='"+password+"';", (err, result) =>{
            // console.log(result);
            res.render('html/perfil',{
                r:result
            });
        });
    });
};