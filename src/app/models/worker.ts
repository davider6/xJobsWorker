export class Worker {
    id: number;
    fullName: string;
    birthDate: Date;
    gender: string;
    nationalityId: number;
    idType: number;
    idNumber: string;
    address: string;
    email: string;
    telephoneNumber: string;
    itinNumber: string;
    hasVehicle: boolean;
    profileImage: string;
    latitude: string;
    longitude: string;
    zipCode: string;
    englishLevel: string;
    likes: string;
    reviews: number;
    status: boolean;
    workerPassword: string;
    type: string; 
    externalId: string;
    changePassword: boolean;
    firstLogin: boolean;

    constructor(
        id: number,
        fullName: string,
        birthDate: Date,
        gender: string,
        nationalityId: number,
        idType: number,
        idNumber: string,
        address: string,
        email: string,
        telephoneNumber: string,
        itinNumber: string,
        hasVehicle: boolean,
        profileImage: string,
        latitude: string,
        longitude: string,
        zipCode: string,
        englishLevel: string,
        likes: string,
        reviews: number,
        status: boolean,
        workerPassword: string,
        type: string,
        externalId: string,
        changePassword: boolean,
        firstLogin: boolean)
        {
            this.id = id;
            this.fullName = fullName;
            this.birthDate = birthDate;
            this.gender = gender;
            this.nationalityId = nationalityId;
            this.idType = idType;
            this.idNumber = idNumber;
            this.address = address;
            this.email = email;
            this.telephoneNumber = telephoneNumber;
            this.itinNumber = itinNumber;
            this.hasVehicle = hasVehicle;
            this.profileImage = profileImage;
            this.latitude = latitude;
            this.longitude = longitude;
            this.zipCode = zipCode;
            this.englishLevel = englishLevel;
            this.likes = likes;
            this.reviews = reviews;
            this.status = status;
            this.workerPassword = workerPassword;
            this.type = type;
            this.externalId = externalId;
            this.changePassword = changePassword;
            this.firstLogin = firstLogin;
    }
}