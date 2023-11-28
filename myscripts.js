function button() {
    let m1, m2, m3, m4, m5, m6, m7, m8;
    m1 = parseInt(document.getElementById("marks1").value);
    m2 = parseInt(document.getElementById("marks2").value);
    m3 = parseInt(document.getElementById("marks3").value);
    m4 = parseInt(document.getElementById("marks4").value);
    m5 = parseInt(document.getElementById("marks5").value);
    m6 = parseInt(document.getElementById("marks6").value);
    m7 = parseInt(document.getElementById("marks7").value);
    m8 = parseInt(document.getElementById("marks8").value);

    let marks = [m1, m2, m3, m4, m5, m6, m7, m8];
    
    // Initialize variables array
    let variables = new Array(marks.length).fill(0);

    marks.forEach((m, index) => {
        if (m > 50 && m < 59) {
            variables[index] = 6;
        } else if (m > 60 && m < 69) {
            variables[index] = 7;
        } else if (m > 70 && m < 79) {
            variables[index] = 8;
        } else if (m > 80 && m < 89) {
            variables[index] = 9;
        } else if (m > 90 && m <= 100) {
            variables[index] = 10;
        }
    });
    console.log(variables);



    variables[0] *= 3;
    variables[1] *= 3;
    variables[2] *= 4;
    variables[3] *= 4;
    variables[4] *= 3;
    variables[5] *= 3;
    variables[6] *= 2;
    variables[7] *= 2;

    let sum=variables[0]+variables[1]+variables[2]+variables[3]+variables[4]+variables[5]+variables[6]+variables[7];

    let cgpa= sum/24;
    console.log(cgpa);
    (document.getElementById("total1").value) =cgpa;
   let percentage=((m1+m2+m3+m4+m5+m6+m7+m8)/800)*100;
   (document.getElementById("total").value) =percentage;
}
