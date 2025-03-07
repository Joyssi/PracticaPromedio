    import { useState } from "react";

    export function useGrades() {
    const [grades, setGrades] = useState({ grade1: "", grade2: "", grade3: "" });
    const [average, setAverage] = useState(null);

    const handleChange = (e) => {
        setGrades({ ...grades, [e.target.name]: e.target.value });
    };

    const calculateAverage = () => {
        const { grade1, grade2, grade3 } = grades;
        const avg = (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) / 3;
        setAverage(avg.toFixed(2)); // Redondear a 2 decimales
    };

    return { grades, average, handleChange, calculateAverage };
    }
