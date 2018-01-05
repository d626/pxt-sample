 loops.forever(() => {
    let i = 0;
    while (i < 10) {
        turtle.forward(1);
        loops.pause(100);
        i = i + 1;
    }
    turtle.toOrigin();
 })