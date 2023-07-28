interface Reportable {
    summary(): string;
}

interface Vehicle extends Reportable {
    name: string;
    year: Date;
    broken: boolean;
}

const oldCivic: Vehicle = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `name: ${this.name} \n name: ${this.year} \n name: ${this.broken}`
    }
};

const printVehicle = (report: Reportable): void => {
    // console.log(`name: ${vehicle.name}`)
    // console.log(`year: ${vehicle.year}`)
    // console.log(`broken: ${vehicle.broken}`)

    report.summary()
}

printVehicle(oldCivic)