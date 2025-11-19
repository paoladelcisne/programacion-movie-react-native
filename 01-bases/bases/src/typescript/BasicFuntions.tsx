export const BasicFuntions = () => {

    const a: number = 7;
    const b: number = 2;
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <div>Funciones:</div>
            <span> El resultado de sumar 2 + 8 = {addTwoNumbers(a, b)} </span>
        </>
    )
}
