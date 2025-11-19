interface Address {
    country: string,
    city: string,
    houseNumber: string,
}
interface Person {
    age: number,
    firstName: string,
    lastName?: string,
    address: Address,
}

interface Student extends Person {
    course: string,
}
export const ObjectLiterals = () => {

    const person: Person = {
        age: 20,
        firstName: 'Paola',
        lastName: 'Criollo',
        address: {
            country: 'Ecuador',
            city: 'Cuenca',
            houseNumber: '1-23'
        }
    }

    const student: Student = {
        course: '7B',
        ...person
    }

    return (
        <>
            <div>Objetos Literales:</div>
            <pre>
                {JSON.stringify(student, null, 2)}
            </pre>
        </>
    )
}
