export const BasicTypes = () => {

    const name:string = 'Paola';
    const age:number = 20;
    const isActive:boolean = false;

    const projects:string[] = ['electronic arts','santander bank','favorita corp'];

    return (
        <>
            <h3>Tipos básicos:</h3>
            {name} - {age} - {isActive ? 'Active' : 'No Active'}
            <p>
                {projects.join(', ')}
            </p>
        </>
    )
}