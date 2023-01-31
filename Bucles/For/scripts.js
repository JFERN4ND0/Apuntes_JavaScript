for (let i = 0; i >= 10; i++) {
    console.log(i);
}

let names = ['Paco','José','Paula','Maria']
for (const name of names) {
    console.log(name);
}

/* Fon in esta pensado para recorrer objetos */
for (const index in names) {
    if (names[index === 'Paula']) {
        continue;
    }
    console.log(index);
}