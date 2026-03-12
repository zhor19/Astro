import { useState } from 'react';



export default function counter() {
    const [number, setNumber] = useState(0);
    const sumar = () => {
        setNumber(number + 1);
    }
    const restar = () => {
        setNumber(number - 1);
    }
    const reset = () => {
        setNumber(0);
    }

    return (
        <div className=' p-3 align-middle'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h1 >{number}</h1>
                    <div className="card-actions justify-end">
                        <div className=" p-2.5">
                            <button onClick={sumar} className=' btn btn-success'>+1</button>
                            <button onClick={restar} className=' btn btn-error'>-1</button>
                            <button onClick={reset} className=' btn btn-info'>0</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}