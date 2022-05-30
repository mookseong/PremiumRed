import {iModel} from "../Module/DataModel.js";
import {ProductPerformance} from "../Module/DataModel.js";

const iPhone13_Performance =
    new ProductPerformance().setCPU('A15').setRAM('G6').setScreenSize(6.1).setStorage(128)
const iPhone13 =
    new iModel('iPhone13')
        .setModel('A2378')
        .setColor('Space Gray')
        .setPerformance(new ProductPerformance().setCPU('M1').setRAM('8G').setScreenSize(12.9).setStorage(128))
        .setGeneration(5)
        .build()

console.log(iPhone13)