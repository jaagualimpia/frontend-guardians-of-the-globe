export const AgeCalculationService = (dateOfBirth: Date) => {
    const otherDate: Date = new Date();

    let years = (otherDate.getFullYear() - dateOfBirth.getFullYear());

    if (otherDate.getMonth() < dateOfBirth.getMonth() || 
        otherDate.getMonth() == dateOfBirth.getMonth() && otherDate.getDate() < dateOfBirth.getDate()) {
        years--;
    }

    return years
}