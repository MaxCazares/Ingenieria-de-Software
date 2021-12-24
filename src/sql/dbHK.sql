CREATE DATABASE HealthKeeper;
use HealthKeeper;

CREATE TABLE Paciente (  
    IDPaciente int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Nombre varchar(50) NOT NULL,
    ApellidoPaterno varchar(50) NOT NULL,
	ApellidoMaterno varchar(50) NOT NULL,
	Edad smallint,
	Genero varchar(10),
	Telefono bigint,
	Email varchar(50) NOT NULL,
	Contraseña varchar(100) NOT NULL,
	Peso FLOAT,
	Talla float,
	TipoSangre varchar(10),
	DonanteOrganos varchar(10),
	EnfermedadActiva VARCHAR(50),
	AlergiaMedica VARCHAR(50),
    urlPDF varchar(1000)
);
CREATE TABLE Medico(  
    IDMedico int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Cedula varchar(50) NOT NULL,
	Nombre varchar(50) NOT NULL,
    ApellidoPaterno varchar(50) NOT NULL,
	ApellidoMaterno varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	Contraseña varchar(100) NOT NULL
);
CREATE TABLE Receta(  
    IDReceta int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Fecha varchar(12),
	Medicamento varchar(100),
	IDPaciente int NOT NULL,
	IDMedico int NOT NULL,
	CONSTRAINT fk_Paciente FOREIGN KEY (IDPaciente) REFERENCES Paciente (IDPaciente),
	CONSTRAINT fk_Medico FOREIGN KEY (IDMedico) REFERENCES Medico (IDMedico)
);
CREATE TABLE Alergia(  
    IDAlergia int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Descripcion varchar(200),
	IDPaciente int NOT NULL,
	CONSTRAINT fk_PacienteAlergia FOREIGN KEY (IDPaciente) REFERENCES Paciente (IDPaciente)
);
CREATE TABLE Padecimiento(  
    IDPadecimiento int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Descripcion varchar(200),
	IDPaciente int NOT NULL,
	CONSTRAINT fk_PacientePadeciemiento FOREIGN KEY (IDPaciente) REFERENCES Paciente (IDPaciente)
);
drop database healthkeeper;