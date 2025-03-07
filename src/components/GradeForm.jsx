    import React from "react";
    import { useGrades } from "./useGrades";

    export function GradeForm() {
    const { grades, average, handleChange, calculateAverage } = useGrades();

    return (
        <div>
        <input
            type="number"
            name="grade1"
            placeholder="Calificación 1"
            value={grades.grade1}
            onChange={handleChange}
        />
        <input
            type="number"
            name="grade2"
            placeholder="Calificación 2"
            value={grades.grade2}
            onChange={handleChange}
        />
        <input
            type="number"
            name="grade3"
            placeholder="Calificación 3"
            value={grades.grade3}
            onChange={handleChange}
        />
        <button onClick={calculateAverage}>Calcular</button>
        {average !== null && <p>Promedio: {average}</p>}
        </div>
    );
    }
