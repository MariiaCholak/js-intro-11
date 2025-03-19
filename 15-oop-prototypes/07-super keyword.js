class Enginner {
    constructor (fullname, major){
        console.log( 'Thisfdjf')
        this.fullname = fullname;
        this.major = major
    }
build(){
    console.log('Enginner builds')
}

}

class SoftwareEnginner extends Enginner {
    constructor (fullname, major, companyName){
        super(fullname, major);
        console.log('Thisfdjf   gyg')
        this.companyName = companyName
    }
}

const eng1 = new SoftwareEnginner( 'jdjjg', 'sdjfs',  'misdcs')
