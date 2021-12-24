use healthkeeper;

insert into paciente (Nombre, ApellidoPaterno, ApellidoMaterno, Edad, Genero, Telefono, 
Email, Contraseña, Peso, Talla, TipoSangre, DonanteOrganos, EnfermedadActiva, AlergiaMedica, urlPDF) 
values ('Adrian', 'Ramos', 'Nieves', 22, 'Fluido', 5591660128, 'Adrian@RamosNieves.com', 
'123456', 79.0, 1.84, 'A', 'Si', 'Ninguna', 'Ninguna', 
'https://drive.google.com/file/d/1ah0TRKMWs18Ie7UOpxmSS7YzR7wbURvE/view');
insert into medico (Cedula, Nombre, ApellidoPaterno, ApellidoMaterno, Email, Contraseña) 
values ('qwerty', 'José', ' Guitierrez', 'Garnica', 'jose@GG.com', 'heladodevainilla');
insert into receta (Fecha, medicamento, IDPaciente, IDMedico) values ('05/12/2021', '2 capsulas de diclofenaco', 1, 1);
insert into Alergia (Descripcion, IDPaciente) values ('Alergia al polen', 1);
insert into Alergia (Descripcion, IDPaciente) values ('Alergia al látex', 1);
insert into Alergia (Descripcion, IDPaciente) values ('Alergia a los mariscos', 1);
insert into padecimiento (Descripcion, IDPaciente) values ('Urticaria', 1);
insert into padecimiento (Descripcion, IDPaciente) values ('Migraña', 1);
insert into padecimiento (Descripcion, IDPaciente) values ('Colitis', 1);

insert into paciente (Nombre, ApellidoPaterno, ApellidoMaterno, Edad, Genero, Telefono, 
Email, Contraseña, Peso, Talla, TipoSangre, DonanteOrganos, EnfermedadActiva, AlergiaMedica, urlPDF) 
values ('Karla', 'Ortiz', 'Chavez', 23, 'Mujer', 5548189910, 'Karla@OrtizChavez.com', 
'123456', 69.0, 1.53, 'B negativo', 'No', 'Ninguna', 'Penicilina', 
'https://drive.google.com/file/d/1qWMY9E9u3yN9Fih7DWMB2c703R9jfynU/view');
insert into medico (Cedula, Nombre, ApellidoPaterno, ApellidoMaterno, Email, Contraseña) 
values ('qwerty', 'José', ' Guitierrez', 'Garnica', 'jose@GG.com', 'heladodevainilla');
insert into receta (Fecha, medicamento, IDPaciente, IDMedico) values ('05/12/2021', '2 capsulas de diclofenaco', 2, 1);
insert into Alergia (Descripcion, IDPaciente) values ('Alergia a la nuez', 2);
insert into padecimiento (Descripcion, IDPaciente) values ('Covid-19', 2);

insert into paciente (Nombre, ApellidoPaterno, ApellidoMaterno, Edad, Genero, Telefono, 
Email, Contraseña, Peso, Talla, TipoSangre, DonanteOrganos, EnfermedadActiva, AlergiaMedica, urlPDF) 
values ('Eduardo', 'Juarez', 'Olvera', 21, 'No Binario', 5689741245, 'Eduardo@JuarezOlvera.com', 
'123456', 89.0, 1.79, 'O positivo', 'No', 'Gastritis', 'Ninguna', 
'https://drive.google.com/file/d/1jCYYbi48dlVHKLsu3hQAf3Ea-lzALST4/view');

select * from paciente;
update paciente set Nombre = '', ApellidoPaterno = '', ApellidoMaterno = '', Edad = null, Genero = '', 
Telefono = null, Email = '', Contraseña = '', Peso = null, Talla = null, TipoSangre = '', DonanteOrganos = '', 
EnfermedadActiva = '', AlergiaMedica = '' where IDPaciente = 3;

select Nombre, ApellidoPaterno, ApellidoMaterno, Edad, Genero, TipoSangre, Peso, Talla, DonanteOrganos, EnfermedadActiva, AlergiaMedica,
al.Descripcion as DesAlergia, pade.Descripcion as DesPadecimiento, r.Fecha as FecReceta, r.medicamento as MedReceta
from paciente as pa, alergia as al, padecimiento as pade, receta as r
where pa.IDPaciente = r.IDPaciente and pa.IDPaciente = pade.IDPaciente and pa.IDPaciente = al.IDPaciente and pa.IDPaciente = 2;

select r.Fecha, r.Medicamento as MedReceta, a.Descripcion as AlergiaDescripcion, p.Descripcion as PadecimientoDescripcion
from receta as r, alergia as a, padecimiento as p where r.IDPaciente = 2 and a.IDPaciente = 2 and p.IDPaciente = 2;

select r.Fecha, r.Medicamento, a.Descripcion as ADes, pd.Descripcion as PDescripcion
from alergia as a, receta as r, padecimiento as pd 
where a.IDPaciente = 2 and r.IDPaciente = 2 and pd.IDPaciente = 2; 

select * from paciente;