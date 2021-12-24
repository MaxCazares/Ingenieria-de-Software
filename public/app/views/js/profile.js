const allergies = document.querySelector('#allergies');
const addAllergy = document.querySelector('#addAllergy');
const listAlergies = document.querySelector('#listAllergies');

const prescriptions = document.querySelector('#prescriptions');
const addPrescription = document.querySelector('#addPrescription');
const listPrescriptions = document.querySelector('#listPrescriptions');

const diseases = document.querySelector('#diseases');
const addDisease = document.querySelector('#addDisease');
const listDiseases = document.querySelector('#listDiseases');

let arrayAllergies = [];
let arrayPrescriptions = [];
let arrayDiseases = [];

loadEventListeners();
function loadEventListeners(){
    addAllergy.addEventListener('click', add_Allergy);
    listAlergies.addEventListener('click', deleteAllergy);

    addPrescription.addEventListener('click', add_Presciption);
    listPrescriptions.addEventListener('click', deletePrescription);

    addDisease.addEventListener('click', add_Diasease);
    listDiseases.addEventListener('click', deleteDisease);
}

function add_Allergy(e){
    e.preventDefault();
    if(e.target.classList.contains('addAllergy')){
        const allergy = e.target.parentElement.parentElement;
        readAllergy(allergy);
    }
}

function readAllergy(allergy){
    const infoAllergy = allergy.querySelector('#allergyProfile').value;
    arrayAllergies = [...arrayAllergies, infoAllergy]
    allergyHTML();
}

function allergyHTML(){
    clearAllergies();
    arrayAllergies.forEach(allergy => {
        const newAllergy = document.createElement('div');
        newAllergy.innerHTML = `
        <label class="flex w-11/12 mx-auto bg-white rounded-lg border border-gray-300 text-md py-1 px-3 my-1 deleteAllergy">
            <label class="w-11/12">${allergy}</label>
            <a class="w-1/12 text-gray-400 pl-7"><i class="fas fa-trash"></i></a>
        </label>`;
        allergies.appendChild(newAllergy);
    });       
}

function clearAllergies(){
    while(allergies.firstChild){
        allergies.removeChild(allergies.firstChild);
    }
}

function deleteAllergy(e){
    e.preventDefault();
    a = e.target.parentElement.parentElement
    if(a.classList.contains('deleteAllergy')){
        b = a.querySelector('label').textContent
        arrayAllergies = arrayAllergies.filter(allergy => allergy !== b);
        a.remove();
        allergyHTML();
    }    
}

function add_Presciption(e){
    e.preventDefault();
    if(e.target.classList.contains('addPrescription')){
        const prescriptions = e.target.parentElement.parentElement;
        readPrescription(prescriptions);
    }
}

function readPrescription(prescription){
    const infoPrescription = prescription.querySelector('#prescriptionProfile').value;
    const datePrescription = prescription.querySelector('#datePrescriptionProfile').value;
    const completePrescription = datePrescription + ' ' + infoPrescription;
    arrayPrescriptions = [...arrayPrescriptions, completePrescription]
    prescriptionHTML();
}

function prescriptionHTML(){
    clearPrescriptions();
    arrayPrescriptions.forEach(prescription => {
        const newPrescription = document.createElement('div');
        newPrescription.innerHTML = `
        <label class="flex mx-auto bg-white rounded-lg border border-gray-300 text-md py-1 px-3 my-1 deletePrescription">
            <label class="w-11/12">${prescription}</label>
            <a class="w-1/12 text-gray-400 pl-16" id="deletePrescription"><i class="fas fa-trash"></i></a>
        </label>`;
        prescriptions.appendChild(newPrescription);
    });       
}

function clearPrescriptions(){
    while(prescriptions.firstChild){
        prescriptions.removeChild(prescriptions.firstChild);
    }
}

function deletePrescription(e){
    e.preventDefault();
    a = e.target.parentElement.parentElement
    if(a.classList.contains('deletePrescription')){
        b = a.querySelector('label').textContent
        arrayPrescriptions = arrayPrescriptions.filter(prescription => prescription !== b);
        a.remove();
        prescriptionHTML();
    }    
}

function add_Diasease(e){
    e.preventDefault();
    // console.log(e.target.classList.contains('addDisease'));
    if(e.target.classList.contains('addDisease')){
        const disease = e.target.parentElement.parentElement;
        readDisease(disease);
    }
}

function readDisease(disease){
    const infoDisease = disease.querySelector('#diseaseProfile').value;
    arrayDiseases = [...arrayDiseases, infoDisease]
    diseaseHTML();
}

function diseaseHTML(){
    clearDisease();
    arrayDiseases.forEach(disase => {
        const newDisease = document.createElement('div');
        newDisease.innerHTML = `
        <label class="flex w-11/12 mx-auto bg-white rounded-lg border border-gray-300 text-md py-1 px-3 my-1 deleteDisease">
            <label class="w-11/12">${disase}</label>
            <a class="w-1/12 text-gray-400 pl-7"><i class="fas fa-trash"></i></a>
        </label>`;
        diseases.appendChild(newDisease);
    });       
}

function clearDisease(){
    while(diseases.firstChild){
        diseases.removeChild(diseases.firstChild);
    }
}

function deleteDisease(e){
    e.preventDefault();
    a = e.target.parentElement.parentElement
    if(a.classList.contains('deleteDisease')){
        b = a.querySelector('label').textContent
        arrayDiseases = arrayDiseases.filter(disease => disease !== b);
        a.remove();
        diseaseHTML();
    }    
}