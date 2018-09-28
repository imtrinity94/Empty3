/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.stuff {
    export function sum(a?: number, b?: VC.VirtualMachine): number {

        var mult = nl.itq.stuff.multiply(a, 8);

        return a + b[0] + mult;
    }
}
