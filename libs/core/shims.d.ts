// Auto-generated. Do not edit.



    //% color=#5C2D91 weight=97 icon="\uf205"
declare namespace led {

    /**
     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.
     * @param x the horizontal coordinate of the LED starting at 0
     * @param y the vertical coordinate of the LED starting at 0
     */
    //% help=led/plot weight=78
    //% blockId=device_plot block="plot|x %x|y %y" blockGap=8
    //% parts="ledmatrix"
    //% x.min=0 x.max=4 y.min=0 y.max=4 shim=led::plot
    function plot(x: int32, y: int32): void;
}

// Auto-generated. Do not edit. Really.
