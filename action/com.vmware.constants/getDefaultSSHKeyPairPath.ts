/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.constants {
export function getDefaultSSHKeyPairPath(): Path {// Store in server conf directory
if (new File("../conf").exists) {
    // vCO 5.5
    return "../conf/vco_key";
} else {
    // vCO 5.1
    return "../server/vmo/conf/vco_key";
}














}
}
