let num = 3;

switch (num) {
    case 1: console.log(`Num tiene el valor 1`);
        break;
    case 2: console.log(`Num tiene el valor 1`);
        break;

    default: console.log(`Num no vale ni 1 ni 2`);
}

switch (num) {
    case 1:
    case 3:
    case 5:
        console.log(`Num es impar`);
        break;
    case 2:
    case 4:
        console.log(`Num es par`);
}