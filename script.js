let horasTrabajadas = 0;
let salarioSemanal = 0;
let horasExtras = 0;
let salarioExtra = 0;
let horasOrdinarias = 0;
let salarioOrdinario = 0;


horasTrabajadas = Number(prompt('Ingrese horas trabajadas: '));

if(horasTrabajadas == 0){
    alert('Debe ingresar un valor diferente de cero (0)');
}else{   

            if(horasTrabajadas<=40){
                salarioSemanal = Math.round(horasTrabajadas * 16);
                alert(`Su salario semanal es de: ${salarioSemanal} pesos`);
            }
            else{
                    horasExtras = Math.round(horasTrabajadas-40);
                    salarioExtra = Math.round(horasExtras*20);
                    horasOrdinarias = Math.round(horasTrabajadas-horasExtras);
                    salarioOrdinario = Math.round(horasOrdinarias*16);
                    salarioSemanal = Math.round(salarioOrdinario+salarioExtra);
                    alert(`Su salario semanal es de: ${salarioSemanal} pesos`);
                
            }
}