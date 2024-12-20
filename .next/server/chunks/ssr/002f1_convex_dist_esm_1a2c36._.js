module.exports = {

"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "byteLength": (()=>byteLength),
    "fromByteArray": (()=>fromByteArray),
    "toByteArray": (()=>toByteArray)
});
"use strict";
var lookup = [];
var revLookup = [];
var Arr = Uint8Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(_b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
} //# sourceMappingURL=base64.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isSimpleObject": (()=>isSimpleObject),
    "parseArgs": (()=>parseArgs),
    "validateDeploymentUrl": (()=>validateDeploymentUrl)
});
"use strict";
function parseArgs(args) {
    if (args === void 0) {
        return {};
    }
    if (!isSimpleObject(args)) {
        throw new Error(`The arguments to a Convex function must be an object. Received: ${args}`);
    }
    return args;
}
function validateDeploymentUrl(deploymentUrl) {
    if (typeof deploymentUrl === "undefined") {
        throw new Error(`Client created with undefined deployment address. If you used an environment variable, check that it's set.`);
    }
    if (typeof deploymentUrl !== "string") {
        throw new Error(`Invalid deployment address: found ${deploymentUrl}".`);
    }
    if (!(deploymentUrl.startsWith("http:") || deploymentUrl.startsWith("https:"))) {
        throw new Error(`Invalid deployment address: Must start with "https://" or "http://". Found "${deploymentUrl}".`);
    }
    try {
        new URL(deploymentUrl);
    } catch  {
        throw new Error(`Invalid deployment address: "${deploymentUrl}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`);
    }
    if (deploymentUrl.endsWith(".convex.site")) {
        throw new Error(`Invalid deployment address: "${deploymentUrl}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`);
    }
}
function isSimpleObject(value) {
    const isObject = typeof value === "object";
    const prototype = Object.getPrototypeOf(value);
    const isSimple = prototype === null || prototype === Object.prototype || // Objects generated from other contexts (e.g. across Node.js `vm` modules) will not satisfy the previous
    // conditions but are still simple objects.
    prototype?.constructor?.name === "Object";
    return isObject && isSimple;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "base64ToBigInt": (()=>base64ToBigInt),
    "bigIntToBase64": (()=>bigIntToBase64),
    "convexOrUndefinedToJson": (()=>convexOrUndefinedToJson),
    "convexToJson": (()=>convexToJson),
    "jsonToConvex": (()=>jsonToConvex),
    "modernBase64ToBigInt": (()=>modernBase64ToBigInt),
    "modernBigIntToBase64": (()=>modernBigIntToBase64),
    "patchValueToJson": (()=>patchValueToJson),
    "slowBase64ToBigInt": (()=>slowBase64ToBigInt),
    "slowBigIntToBase64": (()=>slowBigIntToBase64),
    "stringifyValueForError": (()=>stringifyValueForError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
"use strict";
;
;
const LITTLE_ENDIAN = true;
const MIN_INT64 = BigInt("-9223372036854775808");
const MAX_INT64 = BigInt("9223372036854775807");
const ZERO = BigInt("0");
const EIGHT = BigInt("8");
const TWOFIFTYSIX = BigInt("256");
function isSpecial(n) {
    return Number.isNaN(n) || !Number.isFinite(n) || Object.is(n, -0);
}
function slowBigIntToBase64(value) {
    if (value < ZERO) {
        value -= MIN_INT64 + MIN_INT64;
    }
    let hex = value.toString(16);
    if (hex.length % 2 === 1) hex = "0" + hex;
    const bytes = new Uint8Array(new ArrayBuffer(8));
    let i = 0;
    for (const hexByte of hex.match(/.{2}/g).reverse()){
        bytes.set([
            parseInt(hexByte, 16)
        ], i++);
        value >>= EIGHT;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromByteArray(bytes);
}
function slowBase64ToBigInt(encoded) {
    const integerBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toByteArray(encoded);
    if (integerBytes.byteLength !== 8) {
        throw new Error(`Received ${integerBytes.byteLength} bytes, expected 8 for $integer`);
    }
    let value = ZERO;
    let power = ZERO;
    for (const byte of integerBytes){
        value += BigInt(byte) * TWOFIFTYSIX ** power;
        power++;
    }
    if (value > MAX_INT64) {
        value += MIN_INT64 + MIN_INT64;
    }
    return value;
}
function modernBigIntToBase64(value) {
    if (value < MIN_INT64 || MAX_INT64 < value) {
        throw new Error(`BigInt ${value} does not fit into a 64-bit signed integer.`);
    }
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setBigInt64(0, value, true);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromByteArray(new Uint8Array(buffer));
}
function modernBase64ToBigInt(encoded) {
    const integerBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toByteArray(encoded);
    if (integerBytes.byteLength !== 8) {
        throw new Error(`Received ${integerBytes.byteLength} bytes, expected 8 for $integer`);
    }
    const intBytesView = new DataView(integerBytes.buffer);
    return intBytesView.getBigInt64(0, true);
}
const bigIntToBase64 = DataView.prototype.setBigInt64 ? modernBigIntToBase64 : slowBigIntToBase64;
const base64ToBigInt = DataView.prototype.getBigInt64 ? modernBase64ToBigInt : slowBase64ToBigInt;
const MAX_IDENTIFIER_LEN = 1024;
function validateObjectField(k) {
    if (k.length > MAX_IDENTIFIER_LEN) {
        throw new Error(`Field name ${k} exceeds maximum field name length ${MAX_IDENTIFIER_LEN}.`);
    }
    if (k.startsWith("$")) {
        throw new Error(`Field name ${k} starts with a '$', which is reserved.`);
    }
    for(let i = 0; i < k.length; i += 1){
        const charCode = k.charCodeAt(i);
        if (charCode < 32 || charCode >= 127) {
            throw new Error(`Field name ${k} has invalid character '${k[i]}': Field names can only contain non-control ASCII characters`);
        }
    }
}
function jsonToConvex(value) {
    if (value === null) {
        return value;
    }
    if (typeof value === "boolean") {
        return value;
    }
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((value2)=>jsonToConvex(value2));
    }
    if (typeof value !== "object") {
        throw new Error(`Unexpected type of ${value}`);
    }
    const entries = Object.entries(value);
    if (entries.length === 1) {
        const key = entries[0][0];
        if (key === "$bytes") {
            if (typeof value.$bytes !== "string") {
                throw new Error(`Malformed $bytes field on ${value}`);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toByteArray(value.$bytes).buffer;
        }
        if (key === "$integer") {
            if (typeof value.$integer !== "string") {
                throw new Error(`Malformed $integer field on ${value}`);
            }
            return base64ToBigInt(value.$integer);
        }
        if (key === "$float") {
            if (typeof value.$float !== "string") {
                throw new Error(`Malformed $float field on ${value}`);
            }
            const floatBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toByteArray(value.$float);
            if (floatBytes.byteLength !== 8) {
                throw new Error(`Received ${floatBytes.byteLength} bytes, expected 8 for $float`);
            }
            const floatBytesView = new DataView(floatBytes.buffer);
            const float = floatBytesView.getFloat64(0, LITTLE_ENDIAN);
            if (!isSpecial(float)) {
                throw new Error(`Float ${float} should be encoded as a number`);
            }
            return float;
        }
        if (key === "$set") {
            throw new Error(`Received a Set which is no longer supported as a Convex type.`);
        }
        if (key === "$map") {
            throw new Error(`Received a Map which is no longer supported as a Convex type.`);
        }
    }
    const out = {};
    for (const [k, v] of Object.entries(value)){
        validateObjectField(k);
        out[k] = jsonToConvex(v);
    }
    return out;
}
function stringifyValueForError(value) {
    return JSON.stringify(value, (_key, value2)=>{
        if (value2 === void 0) {
            return "undefined";
        }
        if (typeof value2 === "bigint") {
            return `${value2.toString()}n`;
        }
        return value2;
    });
}
function convexToJsonInternal(value, originalValue, context, includeTopLevelUndefined) {
    if (value === void 0) {
        const contextText = context && ` (present at path ${context} in original object ${stringifyValueForError(originalValue)})`;
        throw new Error(`undefined is not a valid Convex value${contextText}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`);
    }
    if (value === null) {
        return value;
    }
    if (typeof value === "bigint") {
        if (value < MIN_INT64 || MAX_INT64 < value) {
            throw new Error(`BigInt ${value} does not fit into a 64-bit signed integer.`);
        }
        return {
            $integer: bigIntToBase64(value)
        };
    }
    if (typeof value === "number") {
        if (isSpecial(value)) {
            const buffer = new ArrayBuffer(8);
            new DataView(buffer).setFloat64(0, value, LITTLE_ENDIAN);
            return {
                $float: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromByteArray(new Uint8Array(buffer))
            };
        } else {
            return value;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    if (typeof value === "string") {
        return value;
    }
    if (value instanceof ArrayBuffer) {
        return {
            $bytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromByteArray(new Uint8Array(value))
        };
    }
    if (Array.isArray(value)) {
        return value.map((value2, i)=>convexToJsonInternal(value2, originalValue, context + `[${i}]`, false));
    }
    if (value instanceof Set) {
        throw new Error(errorMessageForUnsupportedType(context, "Set", [
            ...value
        ], originalValue));
    }
    if (value instanceof Map) {
        throw new Error(errorMessageForUnsupportedType(context, "Map", [
            ...value
        ], originalValue));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSimpleObject"])(value)) {
        const theType = value?.constructor?.name;
        const typeName = theType ? `${theType} ` : "";
        throw new Error(errorMessageForUnsupportedType(context, typeName, value, originalValue));
    }
    const out = {};
    const entries = Object.entries(value);
    entries.sort(([k1, _v1], [k2, _v2])=>k1 === k2 ? 0 : k1 < k2 ? -1 : 1);
    for (const [k, v] of entries){
        if (v !== void 0) {
            validateObjectField(k);
            out[k] = convexToJsonInternal(v, originalValue, context + `.${k}`, false);
        } else if (includeTopLevelUndefined) {
            validateObjectField(k);
            out[k] = convexOrUndefinedToJsonInternal(v, originalValue, context + `.${k}`);
        }
    }
    return out;
}
function errorMessageForUnsupportedType(context, typeName, value, originalValue) {
    if (context) {
        return `${typeName}${stringifyValueForError(value)} is not a supported Convex type (present at path ${context} in original object ${stringifyValueForError(originalValue)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`;
    } else {
        return `${typeName}${stringifyValueForError(value)} is not a supported Convex type.`;
    }
}
function convexOrUndefinedToJsonInternal(value, originalValue, context) {
    if (value === void 0) {
        return {
            $undefined: null
        };
    } else {
        if (originalValue === void 0) {
            throw new Error(`Programming error. Current value is ${stringifyValueForError(value)} but original value is undefined`);
        }
        return convexToJsonInternal(value, originalValue, context, false);
    }
}
function convexToJson(value) {
    return convexToJsonInternal(value, value, "", false);
}
function convexOrUndefinedToJson(value) {
    return convexOrUndefinedToJsonInternal(value, value, "");
}
function patchValueToJson(value) {
    return convexToJsonInternal(value, value, "", true);
} //# sourceMappingURL=value.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validators.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "VAny": (()=>VAny),
    "VArray": (()=>VArray),
    "VBoolean": (()=>VBoolean),
    "VBytes": (()=>VBytes),
    "VFloat64": (()=>VFloat64),
    "VId": (()=>VId),
    "VInt64": (()=>VInt64),
    "VLiteral": (()=>VLiteral),
    "VNull": (()=>VNull),
    "VObject": (()=>VObject),
    "VRecord": (()=>VRecord),
    "VString": (()=>VString),
    "VUnion": (()=>VUnion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
class BaseValidator {
    constructor({ isOptional }){
        /**
     * Only for TypeScript, the TS type of the JS values validated
     * by this validator.
     */ __publicField(this, "type");
        /**
     * Only for TypeScript, if this an Object validator, then
     * this is the TS type of its property names.
     */ __publicField(this, "fieldPaths");
        /**
     * Whether this is an optional Object property value validator.
     */ __publicField(this, "isOptional");
        /**
     * Always `"true"`.
     */ __publicField(this, "isConvexValidator");
        this.isOptional = isOptional;
        this.isConvexValidator = true;
    }
    /** @deprecated - use isOptional instead */ get optional() {
        return this.isOptional === "optional" ? true : false;
    }
}
class VId extends BaseValidator {
    /**
   * Usually you'd use `v.id(tableName)` instead.
   */ constructor({ isOptional, tableName }){
        super({
            isOptional
        });
        /**
     * The name of the table that the validated IDs must belong to.
     */ __publicField(this, "tableName");
        /**
     * The kind of validator, `"id"`.
     */ __publicField(this, "kind", "id");
        this.tableName = tableName;
    }
    /** @internal */ get json() {
        return {
            type: "id",
            tableName: this.tableName
        };
    }
    /** @internal */ asOptional() {
        return new VId({
            isOptional: "optional",
            tableName: this.tableName
        });
    }
}
class VFloat64 extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"float64"`.
     */ __publicField(this, "kind", "float64");
    }
    /** @internal */ get json() {
        return {
            type: "number"
        };
    }
    /** @internal */ asOptional() {
        return new VFloat64({
            isOptional: "optional"
        });
    }
}
class VInt64 extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"int64"`.
     */ __publicField(this, "kind", "int64");
    }
    /** @internal */ get json() {
        return {
            type: "bigint"
        };
    }
    /** @internal */ asOptional() {
        return new VInt64({
            isOptional: "optional"
        });
    }
}
class VBoolean extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"boolean"`.
     */ __publicField(this, "kind", "boolean");
    }
    /** @internal */ get json() {
        return {
            type: this.kind
        };
    }
    /** @internal */ asOptional() {
        return new VBoolean({
            isOptional: "optional"
        });
    }
}
class VBytes extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"bytes"`.
     */ __publicField(this, "kind", "bytes");
    }
    /** @internal */ get json() {
        return {
            type: this.kind
        };
    }
    /** @internal */ asOptional() {
        return new VBytes({
            isOptional: "optional"
        });
    }
}
class VString extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"string"`.
     */ __publicField(this, "kind", "string");
    }
    /** @internal */ get json() {
        return {
            type: this.kind
        };
    }
    /** @internal */ asOptional() {
        return new VString({
            isOptional: "optional"
        });
    }
}
class VNull extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"null"`.
     */ __publicField(this, "kind", "null");
    }
    /** @internal */ get json() {
        return {
            type: this.kind
        };
    }
    /** @internal */ asOptional() {
        return new VNull({
            isOptional: "optional"
        });
    }
}
class VAny extends BaseValidator {
    constructor(){
        super(...arguments);
        /**
     * The kind of validator, `"any"`.
     */ __publicField(this, "kind", "any");
    }
    /** @internal */ get json() {
        return {
            type: this.kind
        };
    }
    /** @internal */ asOptional() {
        return new VAny({
            isOptional: "optional"
        });
    }
}
class VObject extends BaseValidator {
    /**
   * Usually you'd use `v.object({ ... })` instead.
   */ constructor({ isOptional, fields }){
        super({
            isOptional
        });
        /**
     * An object with the validator for each property.
     */ __publicField(this, "fields");
        /**
     * The kind of validator, `"object"`.
     */ __publicField(this, "kind", "object");
        this.fields = fields;
    }
    /** @internal */ get json() {
        return {
            type: this.kind,
            value: globalThis.Object.fromEntries(globalThis.Object.entries(this.fields).map(([k, v])=>[
                    k,
                    {
                        fieldType: v.json,
                        optional: v.isOptional === "optional" ? true : false
                    }
                ]))
        };
    }
    /** @internal */ asOptional() {
        return new VObject({
            isOptional: "optional",
            fields: this.fields
        });
    }
}
class VLiteral extends BaseValidator {
    /**
   * Usually you'd use `v.literal(value)` instead.
   */ constructor({ isOptional, value }){
        super({
            isOptional
        });
        /**
     * The value that the validated values must be equal to.
     */ __publicField(this, "value");
        /**
     * The kind of validator, `"literal"`.
     */ __publicField(this, "kind", "literal");
        this.value = value;
    }
    /** @internal */ get json() {
        return {
            type: this.kind,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(this.value)
        };
    }
    /** @internal */ asOptional() {
        return new VLiteral({
            isOptional: "optional",
            value: this.value
        });
    }
}
class VArray extends BaseValidator {
    /**
   * Usually you'd use `v.array(element)` instead.
   */ constructor({ isOptional, element }){
        super({
            isOptional
        });
        /**
     * The validator for the elements of the array.
     */ __publicField(this, "element");
        /**
     * The kind of validator, `"array"`.
     */ __publicField(this, "kind", "array");
        this.element = element;
    }
    /** @internal */ get json() {
        return {
            type: this.kind,
            value: this.element.json
        };
    }
    /** @internal */ asOptional() {
        return new VArray({
            isOptional: "optional",
            element: this.element
        });
    }
}
class VRecord extends BaseValidator {
    /**
   * Usually you'd use `v.record(key, value)` instead.
   */ constructor({ isOptional, key, value }){
        super({
            isOptional
        });
        /**
     * The validator for the keys of the record.
     */ __publicField(this, "key");
        /**
     * The validator for the values of the record.
     */ __publicField(this, "value");
        /**
     * The kind of validator, `"record"`.
     */ __publicField(this, "kind", "record");
        if (key.isOptional === "optional") {
            throw new Error("Record validator cannot have optional keys");
        }
        if (value.isOptional === "optional") {
            throw new Error("Record validator cannot have optional values");
        }
        this.key = key;
        this.value = value;
    }
    /** @internal */ get json() {
        return {
            type: this.kind,
            // This cast is needed because TypeScript thinks the key type is too wide
            keys: this.key.json,
            values: {
                fieldType: this.value.json,
                optional: false
            }
        };
    }
    /** @internal */ asOptional() {
        return new VRecord({
            isOptional: "optional",
            key: this.key,
            value: this.value
        });
    }
}
class VUnion extends BaseValidator {
    /**
   * Usually you'd use `v.union(...members)` instead.
   */ constructor({ isOptional, members }){
        super({
            isOptional
        });
        /**
     * The array of validators, one of which must match the value.
     */ __publicField(this, "members");
        /**
     * The kind of validator, `"union"`.
     */ __publicField(this, "kind", "union");
        this.members = members;
    }
    /** @internal */ get json() {
        return {
            type: this.kind,
            value: this.members.map((v)=>v.json)
        };
    }
    /** @internal */ asOptional() {
        return new VUnion({
            isOptional: "optional",
            members: this.members
        });
    }
} //# sourceMappingURL=validators.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "asObjectValidator": (()=>asObjectValidator),
    "isValidator": (()=>isValidator),
    "v": (()=>v)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validators.js [app-ssr] (ecmascript)");
"use strict";
;
function isValidator(v2) {
    return !!v2.isConvexValidator;
}
function asObjectValidator(obj) {
    if (isValidator(obj)) {
        return obj;
    } else {
        return v.object(obj);
    }
}
const v = {
    /**
   * Validates that the value corresponds to an ID of a document in given table.
   * @param tableName The name of the table.
   */ id: (tableName)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VId"]({
            isOptional: "required",
            tableName
        });
    },
    /**
   * Validates that the value is of type Null.
   */ null: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VNull"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of Convex type Float64 (Number in JS).
   *
   * Alias for `v.float64()`
   */ number: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFloat64"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of Convex type Float64 (Number in JS).
   */ float64: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFloat64"]({
            isOptional: "required"
        });
    },
    /**
   * @deprecated Use `v.int64()` instead
   */ bigint: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VInt64"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of Convex type Int64 (BigInt in JS).
   */ int64: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VInt64"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of type Boolean.
   */ boolean: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VBoolean"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of type String.
   */ string: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VString"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is of Convex type Bytes (constructed in JS via `ArrayBuffer`).
   */ bytes: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VBytes"]({
            isOptional: "required"
        });
    },
    /**
   * Validates that the value is equal to the given literal value.
   * @param literal The literal value to compare against.
   */ literal: (literal)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VLiteral"]({
            isOptional: "required",
            value: literal
        });
    },
    /**
   * Validates that the value is an Array of the given element type.
   * @param element The validator for the elements of the array.
   */ array: (element)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VArray"]({
            isOptional: "required",
            element
        });
    },
    /**
   * Validates that the value is an Object with the given properties.
   * @param fields An object specifying the validator for each property.
   */ object: (fields)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VObject"]({
            isOptional: "required",
            fields
        });
    },
    /**
   * Validates that the value is a Record with keys and values that match the given types.
   * @param keys The validator for the keys of the record. This cannot contain string literals.
   * @param values The validator for the values of the record.
   */ record: (keys, values)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VRecord"]({
            isOptional: "required",
            key: keys,
            value: values
        });
    },
    /**
   * Validates that the value matches one of the given validators.
   * @param members The validators to match against.
   */ union: (...members)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VUnion"]({
            isOptional: "required",
            members
        });
    },
    /**
   * Does not validate the value.
   */ any: ()=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAny"]({
            isOptional: "required"
        });
    },
    /**
   * Allows not specifying a value for a property in an Object.
   * @param value The property value validator to make optional.
   *
   * ```typescript
   * const objectWithOptionalFields = v.object({
   *   requiredField: v.string(),
   *   optionalField: v.optional(v.string()),
   * });
   * ```
   */ optional: (value)=>{
        return value.asOptional();
    }
}; //# sourceMappingURL=validator.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexError": (()=>ConvexError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
;
const IDENTIFYING_FIELD = Symbol.for("ConvexError");
class ConvexError extends (_b = Error, _a = IDENTIFYING_FIELD, _b) {
    constructor(data){
        super(typeof data === "string" ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyValueForError"])(data));
        __publicField(this, "name", "ConvexError");
        __publicField(this, "data");
        __publicField(this, _a, true);
        this.data = data;
    }
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict";
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
"use strict";
const version = "1.17.0"; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Logger": (()=>Logger),
    "createHybridErrorStacktrace": (()=>createHybridErrorStacktrace),
    "forwardData": (()=>forwardData),
    "instantiateDefaultLogger": (()=>instantiateDefaultLogger),
    "logFatalError": (()=>logFatalError),
    "logForFunction": (()=>logForFunction)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const INFO_COLOR = "color:rgb(0, 145, 255)";
function prefix_for_source(source) {
    switch(source){
        case "query":
            return "Q";
        case "mutation":
            return "M";
        case "action":
            return "A";
        case "any":
            return "?";
    }
}
class Logger {
    constructor(options){
        __publicField(this, "_onLogLineFuncs");
        __publicField(this, "_verbose");
        this._onLogLineFuncs = {};
        this._verbose = options.verbose;
    }
    addLogLineListener(func) {
        let id = Math.random().toString(36).substring(2, 15);
        for(let i = 0; i < 10; i++){
            if (this._onLogLineFuncs[id] === void 0) {
                break;
            }
            id = Math.random().toString(36).substring(2, 15);
        }
        this._onLogLineFuncs[id] = func;
        return ()=>{
            delete this._onLogLineFuncs[id];
        };
    }
    logVerbose(...args) {
        if (this._verbose) {
            for (const func of Object.values(this._onLogLineFuncs)){
                func("debug", `${/* @__PURE__ */ new Date().toISOString()}`, ...args);
            }
        }
    }
    log(...args) {
        for (const func of Object.values(this._onLogLineFuncs)){
            func("info", ...args);
        }
    }
    warn(...args) {
        for (const func of Object.values(this._onLogLineFuncs)){
            func("warn", ...args);
        }
    }
    error(...args) {
        for (const func of Object.values(this._onLogLineFuncs)){
            func("error", ...args);
        }
    }
}
function instantiateDefaultLogger(options) {
    const logger = new Logger(options);
    logger.addLogLineListener((level, ...args)=>{
        switch(level){
            case "debug":
                console.debug(...args);
                break;
            case "info":
                console.log(...args);
                break;
            case "warn":
                console.warn(...args);
                break;
            case "error":
                console.error(...args);
                break;
            default:
                {
                    const _typecheck = level;
                    console.log(...args);
                }
        }
    });
    return logger;
}
function logForFunction(logger, type, source, udfPath, message) {
    const prefix = prefix_for_source(source);
    if (typeof message === "object") {
        message = `ConvexError ${JSON.stringify(message.errorData, null, 2)}`;
    }
    if (type === "info") {
        const match = message.match(/^\[.*?\] /);
        if (match === null) {
            logger.error(`[CONVEX ${prefix}(${udfPath})] Could not parse console.log`);
            return;
        }
        const level = message.slice(1, match[0].length - 2);
        const args = message.slice(match[0].length);
        logger.log(`%c[CONVEX ${prefix}(${udfPath})] [${level}]`, INFO_COLOR, args);
    } else {
        logger.error(`[CONVEX ${prefix}(${udfPath})] ${message}`);
    }
}
function logFatalError(logger, message) {
    const errorMessage = `[CONVEX FATAL ERROR] ${message}`;
    logger.error(errorMessage);
    return new Error(errorMessage);
}
function createHybridErrorStacktrace(source, udfPath, result) {
    const prefix = prefix_for_source(source);
    return `[CONVEX ${prefix}(${udfPath})] ${result.errorMessage}
  Called by client`;
}
function forwardData(result, error) {
    error.data = result.errorData;
    return error;
} //# sourceMappingURL=logging.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/udf_path_utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "canonicalizeUdfPath": (()=>canonicalizeUdfPath),
    "serializePathAndArgs": (()=>serializePathAndArgs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
function canonicalizeUdfPath(udfPath) {
    const pieces = udfPath.split(":");
    let moduleName;
    let functionName;
    if (pieces.length === 1) {
        moduleName = pieces[0];
        functionName = "default";
    } else {
        moduleName = pieces.slice(0, pieces.length - 1).join(":");
        functionName = pieces[pieces.length - 1];
    }
    if (moduleName.endsWith(".js")) {
        moduleName = moduleName.slice(0, -3);
    }
    return `${moduleName}:${functionName}`;
}
function serializePathAndArgs(udfPath, args) {
    return JSON.stringify({
        udfPath: canonicalizeUdfPath(udfPath),
        args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(args)
    });
} //# sourceMappingURL=udf_path_utils.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/local_state.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LocalSyncState": (()=>LocalSyncState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/udf_path_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
class LocalSyncState {
    constructor(){
        __publicField(this, "nextQueryId");
        __publicField(this, "querySetVersion");
        __publicField(this, "querySet");
        __publicField(this, "queryIdToToken");
        __publicField(this, "identityVersion");
        __publicField(this, "auth");
        __publicField(this, "outstandingQueriesOlderThanRestart");
        __publicField(this, "outstandingAuthOlderThanRestart");
        __publicField(this, "paused");
        __publicField(this, "pendingQuerySetModifications");
        this.nextQueryId = 0;
        this.querySetVersion = 0;
        this.identityVersion = 0;
        this.querySet = /* @__PURE__ */ new Map();
        this.queryIdToToken = /* @__PURE__ */ new Map();
        this.outstandingQueriesOlderThanRestart = /* @__PURE__ */ new Set();
        this.outstandingAuthOlderThanRestart = false;
        this.paused = false;
        this.pendingQuerySetModifications = /* @__PURE__ */ new Map();
    }
    hasSyncedPastLastReconnect() {
        return this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart;
    }
    markAuthCompletion() {
        this.outstandingAuthOlderThanRestart = false;
    }
    subscribe(udfPath, args, journal, componentPath) {
        const canonicalizedUdfPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalizeUdfPath"])(udfPath);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(canonicalizedUdfPath, args);
        const existingEntry = this.querySet.get(queryToken);
        if (existingEntry !== void 0) {
            existingEntry.numSubscribers += 1;
            return {
                queryToken,
                modification: null,
                unsubscribe: ()=>this.removeSubscriber(queryToken)
            };
        } else {
            const queryId = this.nextQueryId++;
            const query = {
                id: queryId,
                canonicalizedUdfPath,
                args,
                numSubscribers: 1,
                journal,
                componentPath
            };
            this.querySet.set(queryToken, query);
            this.queryIdToToken.set(queryId, queryToken);
            const baseVersion = this.querySetVersion;
            const newVersion = this.querySetVersion + 1;
            const add = {
                type: "Add",
                queryId,
                udfPath: canonicalizedUdfPath,
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(args)
                ],
                journal,
                componentPath
            };
            if (this.paused) {
                this.pendingQuerySetModifications.set(queryId, add);
            } else {
                this.querySetVersion = newVersion;
            }
            const modification = {
                type: "ModifyQuerySet",
                baseVersion,
                newVersion,
                modifications: [
                    add
                ]
            };
            return {
                queryToken,
                modification,
                unsubscribe: ()=>this.removeSubscriber(queryToken)
            };
        }
    }
    transition(transition) {
        for (const modification of transition.modifications){
            switch(modification.type){
                case "QueryUpdated":
                case "QueryFailed":
                    {
                        this.outstandingQueriesOlderThanRestart.delete(modification.queryId);
                        const journal = modification.journal;
                        if (journal !== void 0) {
                            const queryToken = this.queryIdToToken.get(modification.queryId);
                            if (queryToken !== void 0) {
                                this.querySet.get(queryToken).journal = journal;
                            }
                        }
                        break;
                    }
                case "QueryRemoved":
                    {
                        this.outstandingQueriesOlderThanRestart.delete(modification.queryId);
                        break;
                    }
                default:
                    {
                        const _ = modification;
                        throw new Error(`Invalid modification ${modification.type}`);
                    }
            }
        }
    }
    queryId(udfPath, args) {
        const canonicalizedUdfPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalizeUdfPath"])(udfPath);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(canonicalizedUdfPath, args);
        const existingEntry = this.querySet.get(queryToken);
        if (existingEntry !== void 0) {
            return existingEntry.id;
        }
        return null;
    }
    isCurrentOrNewerAuthVersion(version) {
        return version >= this.identityVersion;
    }
    setAuth(value) {
        this.auth = {
            tokenType: "User",
            value
        };
        const baseVersion = this.identityVersion;
        if (!this.paused) {
            this.identityVersion = baseVersion + 1;
        }
        return {
            type: "Authenticate",
            baseVersion,
            ...this.auth
        };
    }
    setAdminAuth(value, actingAs) {
        const auth = {
            tokenType: "Admin",
            value,
            impersonating: actingAs
        };
        this.auth = auth;
        const baseVersion = this.identityVersion;
        if (!this.paused) {
            this.identityVersion = baseVersion + 1;
        }
        return {
            type: "Authenticate",
            baseVersion,
            ...auth
        };
    }
    clearAuth() {
        this.auth = void 0;
        this.markAuthCompletion();
        const baseVersion = this.identityVersion;
        if (!this.paused) {
            this.identityVersion = baseVersion + 1;
        }
        return {
            type: "Authenticate",
            tokenType: "None",
            baseVersion
        };
    }
    hasAuth() {
        return !!this.auth;
    }
    isNewAuth(value) {
        return this.auth?.value !== value;
    }
    queryPath(queryId) {
        const pathAndArgs = this.queryIdToToken.get(queryId);
        if (pathAndArgs) {
            return this.querySet.get(pathAndArgs).canonicalizedUdfPath;
        }
        return null;
    }
    queryArgs(queryId) {
        const pathAndArgs = this.queryIdToToken.get(queryId);
        if (pathAndArgs) {
            return this.querySet.get(pathAndArgs).args;
        }
        return null;
    }
    queryToken(queryId) {
        return this.queryIdToToken.get(queryId) ?? null;
    }
    queryJournal(queryToken) {
        return this.querySet.get(queryToken)?.journal;
    }
    restart(oldRemoteQueryResults) {
        this.unpause();
        this.outstandingQueriesOlderThanRestart.clear();
        const modifications = [];
        for (const localQuery of this.querySet.values()){
            const add = {
                type: "Add",
                queryId: localQuery.id,
                udfPath: localQuery.canonicalizedUdfPath,
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(localQuery.args)
                ],
                journal: localQuery.journal,
                componentPath: localQuery.componentPath
            };
            modifications.push(add);
            if (!oldRemoteQueryResults.has(localQuery.id)) {
                this.outstandingQueriesOlderThanRestart.add(localQuery.id);
            }
        }
        this.querySetVersion = 1;
        const querySet = {
            type: "ModifyQuerySet",
            baseVersion: 0,
            newVersion: 1,
            modifications
        };
        if (!this.auth) {
            this.identityVersion = 0;
            return [
                querySet,
                void 0
            ];
        }
        this.outstandingAuthOlderThanRestart = true;
        const authenticate = {
            type: "Authenticate",
            baseVersion: 0,
            ...this.auth
        };
        this.identityVersion = 1;
        return [
            querySet,
            authenticate
        ];
    }
    pause() {
        this.paused = true;
    }
    resume() {
        const querySet = this.pendingQuerySetModifications.size > 0 ? {
            type: "ModifyQuerySet",
            baseVersion: this.querySetVersion,
            newVersion: ++this.querySetVersion,
            modifications: Array.from(this.pendingQuerySetModifications.values())
        } : void 0;
        const authenticate = this.auth !== void 0 ? {
            type: "Authenticate",
            baseVersion: this.identityVersion++,
            ...this.auth
        } : void 0;
        this.unpause();
        return [
            querySet,
            authenticate
        ];
    }
    unpause() {
        this.paused = false;
        this.pendingQuerySetModifications.clear();
    }
    removeSubscriber(queryToken) {
        const localQuery = this.querySet.get(queryToken);
        if (localQuery.numSubscribers > 1) {
            localQuery.numSubscribers -= 1;
            return null;
        } else {
            this.querySet.delete(queryToken);
            this.queryIdToToken.delete(localQuery.id);
            this.outstandingQueriesOlderThanRestart.delete(localQuery.id);
            const baseVersion = this.querySetVersion;
            const newVersion = this.querySetVersion + 1;
            const remove = {
                type: "Remove",
                queryId: localQuery.id
            };
            if (this.paused) {
                if (this.pendingQuerySetModifications.has(localQuery.id)) {
                    this.pendingQuerySetModifications.delete(localQuery.id);
                } else {
                    this.pendingQuerySetModifications.set(localQuery.id, remove);
                }
            } else {
                this.querySetVersion = newVersion;
            }
            return {
                type: "ModifyQuerySet",
                baseVersion,
                newVersion,
                modifications: [
                    remove
                ]
            };
        }
    }
} //# sourceMappingURL=local_state.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/request_manager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RequestManager": (()=>RequestManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
class RequestManager {
    constructor(logger){
        this.logger = logger;
        __publicField(this, "inflightRequests");
        __publicField(this, "requestsOlderThanRestart");
        this.inflightRequests = /* @__PURE__ */ new Map();
        this.requestsOlderThanRestart = /* @__PURE__ */ new Set();
    }
    request(message, sent) {
        const result = new Promise((resolve)=>{
            const status = sent ? "Requested" : "NotSent";
            this.inflightRequests.set(message.requestId, {
                message,
                status: {
                    status,
                    requestedAt: /* @__PURE__ */ new Date(),
                    onResult: resolve
                }
            });
        });
        return result;
    }
    /**
   * Update the state after receiving a response.
   *
   * @returns A RequestId if the request is complete and its optimistic update
   * can be dropped, null otherwise.
   */ onResponse(response) {
        const requestInfo = this.inflightRequests.get(response.requestId);
        if (requestInfo === void 0) {
            return null;
        }
        if (requestInfo.status.status === "Completed") {
            return null;
        }
        const udfType = requestInfo.message.type === "Mutation" ? "mutation" : "action";
        const udfPath = requestInfo.message.udfPath;
        for (const line of response.logLines){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", udfType, udfPath, line);
        }
        const status = requestInfo.status;
        let onResolve;
        if (response.success) {
            onResolve = ()=>status.onResult({
                    success: true,
                    logLines: response.logLines,
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(response.result)
                });
        } else {
            const errorMessage = response.result;
            const { errorData } = response;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "error", udfType, udfPath, errorMessage);
            onResolve = ()=>status.onResult({
                    success: false,
                    errorMessage,
                    errorData: errorData !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(errorData) : void 0,
                    logLines: response.logLines
                });
        }
        if (response.type === "ActionResponse" || !response.success) {
            onResolve();
            this.inflightRequests.delete(response.requestId);
            this.requestsOlderThanRestart.delete(response.requestId);
            return response.requestId;
        }
        requestInfo.status = {
            status: "Completed",
            ts: response.ts,
            onResolve
        };
        return null;
    }
    // Remove and returns completed requests.
    removeCompleted(ts) {
        const completeRequests = /* @__PURE__ */ new Set();
        for (const [requestId, requestInfo] of this.inflightRequests.entries()){
            const status = requestInfo.status;
            if (status.status === "Completed" && status.ts.lessThanOrEqual(ts)) {
                status.onResolve();
                completeRequests.add(requestId);
                this.inflightRequests.delete(requestId);
                this.requestsOlderThanRestart.delete(requestId);
            }
        }
        return completeRequests;
    }
    restart() {
        this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
        const allMessages = [];
        for (const [requestId, value] of this.inflightRequests){
            if (value.status.status === "NotSent") {
                value.status.status = "Requested";
                allMessages.push(value.message);
                continue;
            }
            if (value.message.type === "Mutation") {
                allMessages.push(value.message);
            } else {
                this.inflightRequests.delete(requestId);
                this.requestsOlderThanRestart.delete(requestId);
                if (value.status.status === "Completed") {
                    throw new Error("Action should never be in 'Completed' state");
                }
                value.status.onResult({
                    success: false,
                    errorMessage: "Connection lost while action was in flight",
                    logLines: []
                });
            }
        }
        return allMessages;
    }
    resume() {
        const allMessages = [];
        for (const [, value] of this.inflightRequests){
            if (value.status.status === "NotSent") {
                value.status.status = "Requested";
                allMessages.push(value.message);
                continue;
            }
        }
        return allMessages;
    }
    /**
   * @returns true if there are any requests that have been requested but have
   * not be completed yet.
   */ hasIncompleteRequests() {
        for (const requestInfo of this.inflightRequests.values()){
            if (requestInfo.status.status === "Requested") {
                return true;
            }
        }
        return false;
    }
    /**
   * @returns true if there are any inflight requests, including ones that have
   * completed on the server, but have not been applied.
   */ hasInflightRequests() {
        return this.inflightRequests.size > 0;
    }
    /**
   * @returns true if there are any inflight requests, that have been hanging around
   * since prior to the most recent restart.
   */ hasSyncedPastLastReconnect() {
        return this.requestsOlderThanRestart.size === 0;
    }
    timeOfOldestInflightRequest() {
        if (this.inflightRequests.size === 0) {
            return null;
        }
        let oldestInflightRequest = Date.now();
        for (const request of this.inflightRequests.values()){
            if (request.status.status !== "Completed") {
                if (request.status.requestedAt.getTime() < oldestInflightRequest) {
                    oldestInflightRequest = request.status.requestedAt.getTime();
                }
            }
        }
        return new Date(oldestInflightRequest);
    }
} //# sourceMappingURL=request_manager.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/functionName.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "functionName": (()=>functionName)
});
"use strict";
const functionName = Symbol.for("functionName"); //# sourceMappingURL=functionName.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "extractReferencePath": (()=>extractReferencePath),
    "getFunctionAddress": (()=>getFunctionAddress),
    "isFunctionHandle": (()=>isFunctionHandle),
    "setReferencePath": (()=>setReferencePath),
    "toReferencePath": (()=>toReferencePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/functionName.js [app-ssr] (ecmascript)");
"use strict";
;
const toReferencePath = Symbol.for("toReferencePath");
function setReferencePath(obj, value) {
    obj[toReferencePath] = value;
}
function extractReferencePath(reference) {
    return reference[toReferencePath] ?? null;
}
function isFunctionHandle(s) {
    return s.startsWith("function://");
}
function getFunctionAddress(functionReference) {
    let functionAddress;
    if (typeof functionReference === "string") {
        if (isFunctionHandle(functionReference)) {
            functionAddress = {
                functionHandle: functionReference
            };
        } else {
            functionAddress = {
                name: functionReference
            };
        }
    } else if (functionReference[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionName"]]) {
        functionAddress = {
            name: functionReference[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionName"]]
        };
    } else {
        const referencePath = extractReferencePath(functionReference);
        if (!referencePath) {
            throw new Error(`${functionReference} is not a functionReference`);
        }
        functionAddress = {
            reference: referencePath
        };
    }
    return functionAddress;
} //# sourceMappingURL=paths.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "anyApi": (()=>anyApi),
    "filterApi": (()=>filterApi),
    "getFunctionName": (()=>getFunctionName),
    "justActions": (()=>justActions),
    "justInternal": (()=>justInternal),
    "justMutations": (()=>justMutations),
    "justPaginatedQueries": (()=>justPaginatedQueries),
    "justPublic": (()=>justPublic),
    "justQueries": (()=>justQueries),
    "justSchedulable": (()=>justSchedulable),
    "makeFunctionReference": (()=>makeFunctionReference)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/functionName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
"use strict";
;
;
function getFunctionName(functionReference) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(functionReference);
    if (address.name === void 0) {
        if (address.functionHandle !== void 0) {
            throw new Error(`Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${address.functionHandle}`);
        } else if (address.reference !== void 0) {
            throw new Error(`Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${address.reference}`);
        }
        throw new Error(`Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(address)}`);
    }
    if (typeof functionReference === "string") return functionReference;
    const name = functionReference[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionName"]];
    if (!name) {
        throw new Error(`${functionReference} is not a functionReference`);
    }
    return name;
}
function makeFunctionReference(name) {
    return {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionName"]]: name
    };
}
function createApi(pathParts = []) {
    const handler = {
        get (_, prop) {
            if (typeof prop === "string") {
                const newParts = [
                    ...pathParts,
                    prop
                ];
                return createApi(newParts);
            } else if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$functionName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionName"]) {
                if (pathParts.length < 2) {
                    const found = [
                        "api",
                        ...pathParts
                    ].join(".");
                    throw new Error(`API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${found}\``);
                }
                const path = pathParts.slice(0, -1).join("/");
                const exportName = pathParts[pathParts.length - 1];
                if (exportName === "default") {
                    return path;
                } else {
                    return path + ":" + exportName;
                }
            } else if (prop === Symbol.toStringTag) {
                return "FunctionReference";
            } else {
                return void 0;
            }
        }
    };
    return new Proxy({}, handler);
}
function filterApi(api) {
    return api;
}
function justInternal(api) {
    return api;
}
function justPublic(api) {
    return api;
}
function justQueries(api) {
    return api;
}
function justMutations(api) {
    return api;
}
function justActions(api) {
    return api;
}
function justPaginatedQueries(api) {
    return api;
}
function justSchedulable(api) {
    return api;
}
const anyApi = createApi(); //# sourceMappingURL=api.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/optimistic_updates_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "OptimisticQueryResults": (()=>OptimisticQueryResults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/udf_path_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
class OptimisticLocalStoreImpl {
    constructor(queryResults){
        // A references of the query results in OptimisticQueryResults
        __publicField(this, "queryResults");
        // All of the queries modified by this class
        __publicField(this, "modifiedQueries");
        this.queryResults = queryResults;
        this.modifiedQueries = [];
    }
    getQuery(query, ...args) {
        const queryArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
        const queryResult = this.queryResults.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(name, queryArgs));
        if (queryResult === void 0) {
            return void 0;
        }
        return OptimisticLocalStoreImpl.queryValue(queryResult.result);
    }
    getAllQueries(query) {
        const queriesWithName = [];
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
        for (const queryResult of this.queryResults.values()){
            if (queryResult.udfPath === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalizeUdfPath"])(name)) {
                queriesWithName.push({
                    args: queryResult.args,
                    value: OptimisticLocalStoreImpl.queryValue(queryResult.result)
                });
            }
        }
        return queriesWithName;
    }
    setQuery(queryReference, args, value) {
        const queryArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(queryReference);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(name, queryArgs);
        let result;
        if (value === void 0) {
            result = void 0;
        } else {
            result = {
                success: true,
                value,
                // It's an optimistic update, so there are no function logs to show.
                logLines: []
            };
        }
        const query = {
            udfPath: name,
            args: queryArgs,
            result
        };
        this.queryResults.set(queryToken, query);
        this.modifiedQueries.push(queryToken);
    }
    static queryValue(result) {
        if (result === void 0) {
            return void 0;
        } else if (result.success) {
            return result.value;
        } else {
            return void 0;
        }
    }
}
class OptimisticQueryResults {
    constructor(){
        __publicField(this, "queryResults");
        __publicField(this, "optimisticUpdates");
        this.queryResults = /* @__PURE__ */ new Map();
        this.optimisticUpdates = [];
    }
    ingestQueryResultsFromServer(serverQueryResults, optimisticUpdatesToDrop) {
        this.optimisticUpdates = this.optimisticUpdates.filter((updateAndId)=>{
            return !optimisticUpdatesToDrop.has(updateAndId.mutationId);
        });
        const oldQueryResults = this.queryResults;
        this.queryResults = new Map(serverQueryResults);
        const localStore = new OptimisticLocalStoreImpl(this.queryResults);
        for (const updateAndId of this.optimisticUpdates){
            updateAndId.update(localStore);
        }
        const changedQueries = [];
        for (const [queryToken, query] of this.queryResults){
            const oldQuery = oldQueryResults.get(queryToken);
            if (oldQuery === void 0 || oldQuery.result !== query.result) {
                changedQueries.push(queryToken);
            }
        }
        return changedQueries;
    }
    applyOptimisticUpdate(update, mutationId) {
        this.optimisticUpdates.push({
            update,
            mutationId
        });
        const localStore = new OptimisticLocalStoreImpl(this.queryResults);
        update(localStore);
        return localStore.modifiedQueries;
    }
    queryResult(queryToken) {
        const query = this.queryResults.get(queryToken);
        if (query === void 0) {
            return void 0;
        }
        const result = query.result;
        if (result === void 0) {
            return void 0;
        } else if (result.success) {
            return result.value;
        } else {
            if (result.errorData !== void 0) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardData"])(result, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("query", query.udfPath, result)));
            }
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("query", query.udfPath, result));
        }
    }
    hasQueryResult(queryToken) {
        return this.queryResults.get(queryToken) !== void 0;
    }
    /**
   * @internal
   */ queryLogs(queryToken) {
        const query = this.queryResults.get(queryToken);
        return query?.result?.logLines;
    }
} //# sourceMappingURL=optimistic_updates_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/long.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Long": (()=>Long)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class Long {
    constructor(low, high){
        __publicField(this, "low");
        __publicField(this, "high");
        __publicField(this, "__isUnsignedLong__");
        this.low = low | 0;
        this.high = high | 0;
        this.__isUnsignedLong__ = true;
    }
    static isLong(obj) {
        return (obj && obj.__isUnsignedLong__) === true;
    }
    // prettier-ignore
    static fromBytesLE(bytes) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24);
    }
    // prettier-ignore
    toBytesLE() {
        const hi = this.high;
        const lo = this.low;
        return [
            lo & 255,
            lo >>> 8 & 255,
            lo >>> 16 & 255,
            lo >>> 24,
            hi & 255,
            hi >>> 8 & 255,
            hi >>> 16 & 255,
            hi >>> 24
        ];
    }
    static fromNumber(value) {
        if (isNaN(value)) return UZERO;
        if (value < 0) return UZERO;
        if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        return new Long(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0);
    }
    toString() {
        return (BigInt(this.high) * BigInt(TWO_PWR_32_DBL) + BigInt(this.low)).toString();
    }
    equals(other) {
        if (!Long.isLong(other)) other = Long.fromValue(other);
        if (this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    }
    notEquals(other) {
        return !this.equals(other);
    }
    comp(other) {
        if (!Long.isLong(other)) other = Long.fromValue(other);
        if (this.equals(other)) return 0;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    }
    lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    }
    static fromValue(val) {
        if (typeof val === "number") return Long.fromNumber(val);
        return new Long(val.low, val.high);
    }
}
const UZERO = new Long(0, 0);
const TWO_PWR_16_DBL = 1 << 16;
const TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
const TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
const MAX_UNSIGNED_VALUE = new Long(4294967295 | 0, 4294967295 | 0); //# sourceMappingURL=long.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/remote_query_set.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RemoteQuerySet": (()=>RemoteQuerySet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/long.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
class RemoteQuerySet {
    constructor(queryPath, logger){
        __publicField(this, "version");
        __publicField(this, "remoteQuerySet");
        __publicField(this, "queryPath");
        __publicField(this, "logger");
        this.version = {
            querySet: 0,
            ts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Long"].fromNumber(0),
            identity: 0
        };
        this.remoteQuerySet = /* @__PURE__ */ new Map();
        this.queryPath = queryPath;
        this.logger = logger;
    }
    transition(transition) {
        const start = transition.startVersion;
        if (this.version.querySet !== start.querySet || this.version.ts.notEquals(start.ts) || this.version.identity !== start.identity) {
            throw new Error(`Invalid start version: ${start.ts.toString()}:${start.querySet}`);
        }
        for (const modification of transition.modifications){
            switch(modification.type){
                case "QueryUpdated":
                    {
                        const queryPath = this.queryPath(modification.queryId);
                        if (queryPath) {
                            for (const line of modification.logLines){
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "query", queryPath, line);
                            }
                        }
                        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(modification.value ?? null);
                        this.remoteQuerySet.set(modification.queryId, {
                            success: true,
                            value,
                            logLines: modification.logLines
                        });
                        break;
                    }
                case "QueryFailed":
                    {
                        const queryPath = this.queryPath(modification.queryId);
                        if (queryPath) {
                            for (const line of modification.logLines){
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "query", queryPath, line);
                            }
                        }
                        const { errorData } = modification;
                        this.remoteQuerySet.set(modification.queryId, {
                            success: false,
                            errorMessage: modification.errorMessage,
                            errorData: errorData !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(errorData) : void 0,
                            logLines: modification.logLines
                        });
                        break;
                    }
                case "QueryRemoved":
                    {
                        this.remoteQuerySet.delete(modification.queryId);
                        break;
                    }
                default:
                    {
                        const _ = modification;
                        throw new Error(`Invalid modification ${modification.type}`);
                    }
            }
        }
        this.version = transition.endVersion;
    }
    remoteQueryResults() {
        return this.remoteQuerySet;
    }
    timestamp() {
        return this.version.ts;
    }
} //# sourceMappingURL=remote_query_set.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript) <export * as Base64>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Base64": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/protocol.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "encodeClientMessage": (()=>encodeClientMessage),
    "longToU64": (()=>longToU64),
    "parseServerMessage": (()=>parseServerMessage),
    "u64ToLong": (()=>u64ToLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/long.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Base64$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/base64.js [app-ssr] (ecmascript) <export * as Base64>");
"use strict";
;
;
function u64ToLong(encoded) {
    const integerBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Base64$3e$__["Base64"].toByteArray(encoded);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Long"].fromBytesLE(Array.from(integerBytes));
}
function longToU64(raw) {
    const integerBytes = new Uint8Array(raw.toBytesLE());
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Base64$3e$__["Base64"].fromByteArray(integerBytes);
}
function parseServerMessage(encoded) {
    switch(encoded.type){
        case "FatalError":
        case "AuthError":
        case "ActionResponse":
        case "Ping":
            {
                return {
                    ...encoded
                };
            }
        case "MutationResponse":
            {
                if (encoded.success) {
                    return {
                        ...encoded,
                        ts: u64ToLong(encoded.ts)
                    };
                } else {
                    return {
                        ...encoded
                    };
                }
            }
        case "Transition":
            {
                return {
                    ...encoded,
                    startVersion: {
                        ...encoded.startVersion,
                        ts: u64ToLong(encoded.startVersion.ts)
                    },
                    endVersion: {
                        ...encoded.endVersion,
                        ts: u64ToLong(encoded.endVersion.ts)
                    }
                };
            }
        default:
            {
                const _exhaustivenessCheck = encoded;
            }
    }
    return void 0;
}
function encodeClientMessage(message) {
    switch(message.type){
        case "Authenticate":
        case "ModifyQuerySet":
        case "Mutation":
        case "Action":
        case "Event":
            {
                return {
                    ...message
                };
            }
        case "Connect":
            {
                if (message.maxObservedTimestamp !== void 0) {
                    return {
                        ...message,
                        maxObservedTimestamp: longToU64(message.maxObservedTimestamp)
                    };
                } else {
                    return {
                        ...message,
                        maxObservedTimestamp: void 0
                    };
                }
            }
        default:
            {
                const _exhaustivenessCheck = message;
            }
    }
    return void 0;
} //# sourceMappingURL=protocol.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/web_socket_manager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "WebSocketManager": (()=>WebSocketManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$protocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/protocol.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
const CLOSE_NORMAL = 1e3;
const CLOSE_GOING_AWAY = 1001;
const CLOSE_NO_STATUS = 1005;
const CLOSE_NOT_FOUND = 4040;
class WebSocketManager {
    constructor(uri, callbacks, webSocketConstructor, logger){
        __publicField(this, "socket");
        __publicField(this, "connectionCount");
        __publicField(this, "lastCloseReason");
        /** Upon HTTPS/WSS failure, the first jittered backoff duration, in ms. */ __publicField(this, "initialBackoff");
        /** We backoff exponentially, but we need to cap that--this is the jittered max. */ __publicField(this, "maxBackoff");
        /** How many times have we failed consecutively? */ __publicField(this, "retries");
        /** How long before lack of server response causes us to initiate a reconnect,
     * in ms */ __publicField(this, "serverInactivityThreshold");
        __publicField(this, "reconnectDueToServerInactivityTimeout");
        __publicField(this, "uri");
        __publicField(this, "onOpen");
        __publicField(this, "onResume");
        __publicField(this, "onMessage");
        __publicField(this, "webSocketConstructor");
        __publicField(this, "logger");
        this.webSocketConstructor = webSocketConstructor;
        this.socket = {
            state: "disconnected"
        };
        this.connectionCount = 0;
        this.lastCloseReason = "InitialConnect";
        this.initialBackoff = 100;
        this.maxBackoff = 16e3;
        this.retries = 0;
        this.serverInactivityThreshold = 3e4;
        this.reconnectDueToServerInactivityTimeout = null;
        this.uri = uri;
        this.onOpen = callbacks.onOpen;
        this.onResume = callbacks.onResume;
        this.onMessage = callbacks.onMessage;
        this.logger = logger;
        this.connect();
    }
    connect() {
        if (this.socket.state === "terminated") {
            return;
        }
        if (this.socket.state !== "disconnected" && this.socket.state !== "stopped") {
            throw new Error("Didn't start connection from disconnected state: " + this.socket.state);
        }
        const ws = new this.webSocketConstructor(this.uri);
        this._logVerbose("constructed WebSocket");
        this.socket = {
            state: "connecting",
            ws,
            paused: "no"
        };
        this.resetServerInactivityTimeout();
        ws.onopen = ()=>{
            this.logger.logVerbose("begin ws.onopen");
            if (this.socket.state !== "connecting") {
                throw new Error("onopen called with socket not in connecting state");
            }
            this.socket = {
                state: "ready",
                ws,
                paused: this.socket.paused === "yes" ? "uninitialized" : "no"
            };
            this.resetServerInactivityTimeout();
            if (this.socket.paused === "no") {
                this.onOpen({
                    connectionCount: this.connectionCount,
                    lastCloseReason: this.lastCloseReason
                });
            }
            if (this.lastCloseReason !== "InitialConnect") {
                this.logger.log("WebSocket reconnected");
            }
            this.connectionCount += 1;
            this.lastCloseReason = null;
        };
        ws.onerror = (error)=>{
            const message = error.message;
            this.logger.log(`WebSocket error: ${message}`);
        };
        ws.onmessage = (message)=>{
            this.resetServerInactivityTimeout();
            const serverMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$protocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseServerMessage"])(JSON.parse(message.data));
            this._logVerbose(`received ws message with type ${serverMessage.type}`);
            const response = this.onMessage(serverMessage);
            if (response.hasSyncedPastLastReconnect) {
                this.retries = 0;
            }
        };
        ws.onclose = (event)=>{
            this._logVerbose("begin ws.onclose");
            if (this.lastCloseReason === null) {
                this.lastCloseReason = event.reason ?? "OnCloseInvoked";
            }
            if (event.code !== CLOSE_NORMAL && event.code !== CLOSE_GOING_AWAY && // This commonly gets fired on mobile apps when the app is backgrounded
            event.code !== CLOSE_NO_STATUS && event.code !== CLOSE_NOT_FOUND) {
                let msg = `WebSocket closed with code ${event.code}`;
                if (event.reason) {
                    msg += `: ${event.reason}`;
                }
                this.logger.log(msg);
            }
            this.scheduleReconnect();
            return;
        };
    }
    /**
   * @returns The state of the {@link Socket}.
   */ socketState() {
        return this.socket.state;
    }
    /**
   * @param message - A ClientMessage to send.
   * @returns Whether the message (might have been) sent.
   */ sendMessage(message) {
        this._logVerbose(`sending message with type ${message.type}`);
        if (this.socket.state === "ready" && this.socket.paused === "no") {
            const encodedMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$protocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeClientMessage"])(message);
            const request = JSON.stringify(encodedMessage);
            try {
                this.socket.ws.send(request);
            } catch (error) {
                this.logger.log(`Failed to send message on WebSocket, reconnecting: ${error}`);
                this.closeAndReconnect("FailedToSendMessage");
            }
            return true;
        }
        return false;
    }
    resetServerInactivityTimeout() {
        if (this.socket.state === "terminated") {
            return;
        }
        if (this.reconnectDueToServerInactivityTimeout !== null) {
            clearTimeout(this.reconnectDueToServerInactivityTimeout);
            this.reconnectDueToServerInactivityTimeout = null;
        }
        this.reconnectDueToServerInactivityTimeout = setTimeout(()=>{
            this.closeAndReconnect("InactiveServer");
        }, this.serverInactivityThreshold);
    }
    scheduleReconnect() {
        this.socket = {
            state: "disconnected"
        };
        const backoff = this.nextBackoff();
        this.logger.log(`Attempting reconnect in ${backoff}ms`);
        setTimeout(()=>this.connect(), backoff);
    }
    /**
   * Close the WebSocket and schedule a reconnect.
   *
   * This should be used when we hit an error and would like to restart the session.
   */ closeAndReconnect(closeReason) {
        this._logVerbose(`begin closeAndReconnect with reason ${closeReason}`);
        switch(this.socket.state){
            case "disconnected":
            case "terminated":
            case "stopped":
                return;
            case "connecting":
            case "ready":
                {
                    this.lastCloseReason = closeReason;
                    void this.close();
                    this.scheduleReconnect();
                    return;
                }
            default:
                {
                    const _ = this.socket;
                }
        }
    }
    /**
   * Close the WebSocket, being careful to clear the onclose handler to avoid re-entrant
   * calls. Use this instead of directly calling `ws.close()`
   *
   * It is the callers responsibility to update the state after this method is called so that the
   * closed socket is not accessible or used again after this method is called
   */ close() {
        switch(this.socket.state){
            case "disconnected":
            case "terminated":
            case "stopped":
                return Promise.resolve();
            case "connecting":
                {
                    const ws = this.socket.ws;
                    return new Promise((r)=>{
                        ws.onclose = ()=>{
                            this._logVerbose("Closed after connecting");
                            r();
                        };
                        ws.onopen = ()=>{
                            this._logVerbose("Opened after connecting");
                            ws.close();
                        };
                    });
                }
            case "ready":
                {
                    this._logVerbose("ws.close called");
                    const ws = this.socket.ws;
                    const result = new Promise((r)=>{
                        ws.onclose = ()=>{
                            r();
                        };
                    });
                    ws.close();
                    return result;
                }
            default:
                {
                    const _ = this.socket;
                    return Promise.resolve();
                }
        }
    }
    /**
   * Close the WebSocket and do not reconnect.
   * @returns A Promise that resolves when the WebSocket `onClose` callback is called.
   */ terminate() {
        if (this.reconnectDueToServerInactivityTimeout) {
            clearTimeout(this.reconnectDueToServerInactivityTimeout);
        }
        switch(this.socket.state){
            case "terminated":
            case "stopped":
            case "disconnected":
            case "connecting":
            case "ready":
                {
                    const result = this.close();
                    this.socket = {
                        state: "terminated"
                    };
                    return result;
                }
            default:
                {
                    const _ = this.socket;
                    throw new Error(`Invalid websocket state: ${this.socket.state}`);
                }
        }
    }
    stop() {
        switch(this.socket.state){
            case "terminated":
                return Promise.resolve();
            case "connecting":
            case "stopped":
            case "disconnected":
            case "ready":
                {
                    const result = this.close();
                    this.socket = {
                        state: "stopped"
                    };
                    return result;
                }
            default:
                {
                    const _ = this.socket;
                    return Promise.resolve();
                }
        }
    }
    /**
   * Create a new WebSocket after a previous `stop()`, unless `terminate()` was
   * called before.
   */ restart() {
        switch(this.socket.state){
            case "stopped":
                break;
            case "terminated":
                return;
            case "connecting":
            case "ready":
            case "disconnected":
                throw new Error("`restart()` is only valid after `stop()`");
            default:
                {
                    const _ = this.socket;
                }
        }
        this.connect();
    }
    pause() {
        switch(this.socket.state){
            case "disconnected":
            case "stopped":
            case "terminated":
                return;
            case "connecting":
            case "ready":
                {
                    this.socket = {
                        ...this.socket,
                        paused: "yes"
                    };
                    return;
                }
            default:
                {
                    const _ = this.socket;
                    return;
                }
        }
    }
    /**
   * Resume the state machine if previously paused.
   */ resume() {
        switch(this.socket.state){
            case "connecting":
                this.socket = {
                    ...this.socket,
                    paused: "no"
                };
                return;
            case "ready":
                if (this.socket.paused === "uninitialized") {
                    this.socket = {
                        ...this.socket,
                        paused: "no"
                    };
                    this.onOpen({
                        connectionCount: this.connectionCount,
                        lastCloseReason: this.lastCloseReason
                    });
                } else if (this.socket.paused === "yes") {
                    this.socket = {
                        ...this.socket,
                        paused: "no"
                    };
                    this.onResume();
                }
                return;
            case "terminated":
            case "stopped":
            case "disconnected":
                return;
            default:
                {
                    const _ = this.socket;
                }
        }
        this.connect();
    }
    _logVerbose(message) {
        this.logger.logVerbose(message);
    }
    nextBackoff() {
        const baseBackoff = this.initialBackoff * Math.pow(2, this.retries);
        this.retries += 1;
        const actualBackoff = Math.min(baseBackoff, this.maxBackoff);
        const jitter = actualBackoff * (Math.random() - 0.5);
        return actualBackoff + jitter;
    }
} //# sourceMappingURL=web_socket_manager.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/session.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "newSessionId": (()=>newSessionId)
});
"use strict";
function newSessionId() {
    return uuidv4();
}
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
    });
} //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/authentication_manager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthenticationManager": (()=>AuthenticationManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$3$2e$1$2e$2$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$jwt$2d$decode$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jwt-decode@3.1.2/node_modules/jwt-decode/build/jwt-decode.esm.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
const MAXIMUM_REFRESH_DELAY = 20 * 24 * 60 * 60 * 1e3;
class AuthenticationManager {
    constructor(syncState, callbacks, config){
        __publicField(this, "authState", {
            state: "noAuth"
        });
        // Used to detect races involving `setConfig` calls
        // while a token is being fetched.
        __publicField(this, "configVersion", 0);
        // Shared by the BaseClient so that the auth manager can easily inspect it
        __publicField(this, "syncState");
        // Passed down by BaseClient, sends a message to the server
        __publicField(this, "authenticate");
        __publicField(this, "stopSocket");
        __publicField(this, "restartSocket");
        __publicField(this, "pauseSocket");
        __publicField(this, "resumeSocket");
        // Passed down by BaseClient, sends a message to the server
        __publicField(this, "clearAuth");
        __publicField(this, "logger");
        __publicField(this, "refreshTokenLeewaySeconds");
        this.syncState = syncState;
        this.authenticate = callbacks.authenticate;
        this.stopSocket = callbacks.stopSocket;
        this.restartSocket = callbacks.restartSocket;
        this.pauseSocket = callbacks.pauseSocket;
        this.resumeSocket = callbacks.resumeSocket;
        this.clearAuth = callbacks.clearAuth;
        this.logger = config.logger;
        this.refreshTokenLeewaySeconds = config.refreshTokenLeewaySeconds;
    }
    async setConfig(fetchToken, onChange) {
        this.resetAuthState();
        this._logVerbose("pausing WS for auth token fetch");
        this.pauseSocket();
        const token = await this.fetchTokenAndGuardAgainstRace(fetchToken, {
            forceRefreshToken: false
        });
        if (token.isFromOutdatedConfig) {
            return;
        }
        if (token.value) {
            this.setAuthState({
                state: "waitingForServerConfirmationOfCachedToken",
                config: {
                    fetchToken,
                    onAuthChange: onChange
                },
                hasRetried: false
            });
            this.authenticate(token.value);
            this._logVerbose("resuming WS after auth token fetch");
            this.resumeSocket();
        } else {
            this.setAuthState({
                state: "initialRefetch",
                config: {
                    fetchToken,
                    onAuthChange: onChange
                }
            });
            await this.refetchToken();
        }
    }
    onTransition(serverMessage) {
        if (!this.syncState.isCurrentOrNewerAuthVersion(serverMessage.endVersion.identity)) {
            return;
        }
        if (serverMessage.endVersion.identity <= serverMessage.startVersion.identity) {
            return;
        }
        if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
            this._logVerbose("server confirmed auth token is valid");
            void this.refetchToken();
            this.authState.config.onAuthChange(true);
            return;
        }
        if (this.authState.state === "waitingForServerConfirmationOfFreshToken") {
            this._logVerbose("server confirmed new auth token is valid");
            this.scheduleTokenRefetch(this.authState.token);
            if (!this.authState.hadAuth) {
                this.authState.config.onAuthChange(true);
            }
        }
    }
    onAuthError(serverMessage) {
        const { baseVersion } = serverMessage;
        if (baseVersion !== null && baseVersion !== void 0) {
            if (!this.syncState.isCurrentOrNewerAuthVersion(baseVersion + 1)) {
                this._logVerbose("ignoring auth error for previous auth attempt");
                return;
            }
            void this.tryToReauthenticate(serverMessage);
            return;
        }
        void this.tryToReauthenticate(serverMessage);
    }
    // This is similar to `refetchToken` defined below, in fact we
    // don't represent them as different states, but it is different
    // in that we pause the WebSocket so that mutations
    // don't retry with bad auth.
    async tryToReauthenticate(serverMessage) {
        if (// No way to fetch another token, kaboom
        this.authState.state === "noAuth" || // We failed on a fresh token, trying another one won't help
        this.authState.state === "waitingForServerConfirmationOfFreshToken") {
            this.logger.error(`Failed to authenticate: "${serverMessage.error}", check your server auth config`);
            if (this.syncState.hasAuth()) {
                this.syncState.clearAuth();
            }
            if (this.authState.state !== "noAuth") {
                this.setAndReportAuthFailed(this.authState.config.onAuthChange);
            }
            return;
        }
        this._logVerbose("attempting to reauthenticate");
        await this.stopSocket();
        const token = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
            forceRefreshToken: true
        });
        if (token.isFromOutdatedConfig) {
            return;
        }
        if (token.value && this.syncState.isNewAuth(token.value)) {
            this.authenticate(token.value);
            this.setAuthState({
                state: "waitingForServerConfirmationOfFreshToken",
                config: this.authState.config,
                token: token.value,
                hadAuth: this.authState.state === "notRefetching" || this.authState.state === "waitingForScheduledRefetch"
            });
        } else {
            this._logVerbose("reauthentication failed, could not fetch a new token");
            if (this.syncState.hasAuth()) {
                this.syncState.clearAuth();
            }
            this.setAndReportAuthFailed(this.authState.config.onAuthChange);
        }
        this.restartSocket();
    }
    // Force refetch the token and schedule another refetch
    // before the token expires - an active client should never
    // need to reauthenticate.
    async refetchToken() {
        if (this.authState.state === "noAuth") {
            return;
        }
        this._logVerbose("refetching auth token");
        const token = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
            forceRefreshToken: true
        });
        if (token.isFromOutdatedConfig) {
            return;
        }
        if (token.value) {
            if (this.syncState.isNewAuth(token.value)) {
                this.setAuthState({
                    state: "waitingForServerConfirmationOfFreshToken",
                    hadAuth: this.syncState.hasAuth(),
                    token: token.value,
                    config: this.authState.config
                });
                this.authenticate(token.value);
            } else {
                this.setAuthState({
                    state: "notRefetching",
                    config: this.authState.config
                });
            }
        } else {
            this._logVerbose("refetching token failed");
            if (this.syncState.hasAuth()) {
                this.clearAuth();
            }
            this.setAndReportAuthFailed(this.authState.config.onAuthChange);
        }
        this._logVerbose("resuming WS after auth token fetch (if currently paused)");
        this.resumeSocket();
    }
    scheduleTokenRefetch(token) {
        if (this.authState.state === "noAuth") {
            return;
        }
        const decodedToken = this.decodeToken(token);
        if (!decodedToken) {
            this.logger.error("Auth token is not a valid JWT, cannot refetch the token");
            return;
        }
        const { iat, exp } = decodedToken;
        if (!iat || !exp) {
            this.logger.error("Auth token does not have required fields, cannot refetch the token");
            return;
        }
        const tokenValiditySeconds = exp - iat;
        if (tokenValiditySeconds <= 2) {
            this.logger.error("Auth token does not live long enough, cannot refetch the token");
            return;
        }
        let delay = Math.min(MAXIMUM_REFRESH_DELAY, (tokenValiditySeconds - this.refreshTokenLeewaySeconds) * 1e3);
        if (delay <= 0) {
            this.logger.warn(`Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${tokenValiditySeconds}s`);
            delay = 0;
        }
        const refetchTokenTimeoutId = setTimeout(()=>{
            void this.refetchToken();
        }, delay);
        this.setAuthState({
            state: "waitingForScheduledRefetch",
            refetchTokenTimeoutId,
            config: this.authState.config
        });
        this._logVerbose(`scheduled preemptive auth token refetching in ${delay}ms`);
    }
    // Protects against simultaneous calls to `setConfig`
    // while we're fetching a token
    async fetchTokenAndGuardAgainstRace(fetchToken, fetchArgs) {
        const originalConfigVersion = ++this.configVersion;
        const token = await fetchToken(fetchArgs);
        if (this.configVersion !== originalConfigVersion) {
            return {
                isFromOutdatedConfig: true
            };
        }
        return {
            isFromOutdatedConfig: false,
            value: token
        };
    }
    stop() {
        this.resetAuthState();
        this.configVersion++;
    }
    setAndReportAuthFailed(onAuthChange) {
        onAuthChange(false);
        this.resetAuthState();
    }
    resetAuthState() {
        this.setAuthState({
            state: "noAuth"
        });
    }
    setAuthState(newAuth) {
        if (this.authState.state === "waitingForScheduledRefetch") {
            clearTimeout(this.authState.refetchTokenTimeoutId);
            this.syncState.markAuthCompletion();
        }
        this.authState = newAuth;
    }
    decodeToken(token) {
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$3$2e$1$2e$2$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$jwt$2d$decode$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token);
        } catch (e) {
            this._logVerbose(`Error decoding token: ${e instanceof Error ? e.message : "Unknown error"}`);
            return null;
        }
    }
    _logVerbose(message) {
        this.logger.logVerbose(`${message} [v${this.configVersion}]`);
    }
} //# sourceMappingURL=authentication_manager.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/metrics.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getMarksReport": (()=>getMarksReport),
    "mark": (()=>mark)
});
"use strict";
const markNames = [
    "convexClientConstructed",
    "convexWebSocketOpen",
    "convexFirstMessageReceived"
];
function mark(name, sessionId) {
    const detail = {
        sessionId
    };
    if (typeof performance === "undefined" || !performance.mark) return;
    performance.mark(name, {
        detail
    });
}
function performanceMarkToJson(mark2) {
    let name = mark2.name.slice("convex".length);
    name = name.charAt(0).toLowerCase() + name.slice(1);
    return {
        name,
        startTime: mark2.startTime
    };
}
function getMarksReport(sessionId) {
    if (typeof performance === "undefined" || !performance.getEntriesByName) {
        return [];
    }
    const allMarks = [];
    for (const name of markNames){
        const marks = performance.getEntriesByName(name).filter((entry)=>entry.entryType === "mark").filter((mark2)=>mark2.detail.sessionId === sessionId);
        allMarks.push(...marks);
    }
    return allMarks.map(performanceMarkToJson);
} //# sourceMappingURL=metrics.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/client.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseConvexClient": (()=>BaseConvexClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$local_state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/local_state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/request_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$optimistic_updates_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/optimistic_updates_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$remote_query_set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/remote_query_set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/udf_path_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$web_socket_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/web_socket_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/session.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$authentication_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/authentication_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/metrics.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class BaseConvexClient {
    /**
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param onTransition - A callback receiving an array of query tokens
   * corresponding to query results that have changed.
   * @param options - See {@link BaseConvexClientOptions} for a full description.
   */ constructor(address, onTransition, options){
        __publicField(this, "address");
        __publicField(this, "state");
        __publicField(this, "requestManager");
        __publicField(this, "webSocketManager");
        __publicField(this, "authenticationManager");
        __publicField(this, "remoteQuerySet");
        __publicField(this, "optimisticQueryResults");
        __publicField(this, "onTransition");
        __publicField(this, "_nextRequestId");
        __publicField(this, "_sessionId");
        __publicField(this, "firstMessageReceived", false);
        __publicField(this, "debug");
        __publicField(this, "logger");
        __publicField(this, "maxObservedTimestamp");
        // Instance property so that `mark()` doesn't need to be called as a method.
        __publicField(this, "mark", (name)=>{
            if (this.debug) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mark"])(name, this.sessionId);
            }
        });
        if (typeof address === "object") {
            throw new Error("Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.");
        }
        if (options?.skipConvexDeploymentUrlCheck !== true) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDeploymentUrl"])(address);
        }
        options = {
            ...options
        };
        const authRefreshTokenLeewaySeconds = options.authRefreshTokenLeewaySeconds ?? 2;
        let webSocketConstructor = options.webSocketConstructor;
        if (!webSocketConstructor && typeof WebSocket === "undefined") {
            throw new Error("No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient");
        }
        webSocketConstructor = webSocketConstructor || WebSocket;
        this.debug = options.reportDebugInfoToConvex ?? false;
        this.address = address;
        this.logger = options.logger ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["instantiateDefaultLogger"])({
            verbose: options.verbose ?? false
        });
        const i = address.search("://");
        if (i === -1) {
            throw new Error("Provided address was not an absolute URL.");
        }
        const origin = address.substring(i + 3);
        const protocol = address.substring(0, i);
        let wsProtocol;
        if (protocol === "http") {
            wsProtocol = "ws";
        } else if (protocol === "https") {
            wsProtocol = "wss";
        } else {
            throw new Error(`Unknown parent protocol ${protocol}`);
        }
        const wsUri = `${wsProtocol}://${origin}/api/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}/sync`;
        this.state = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$local_state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalSyncState"]();
        this.remoteQuerySet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$remote_query_set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoteQuerySet"]((queryId)=>this.state.queryPath(queryId), this.logger);
        this.requestManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestManager"](this.logger);
        this.authenticationManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$authentication_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticationManager"](this.state, {
            authenticate: (token)=>{
                const message = this.state.setAuth(token);
                this.webSocketManager.sendMessage(message);
            },
            stopSocket: ()=>this.webSocketManager.stop(),
            restartSocket: ()=>this.webSocketManager.restart(),
            pauseSocket: ()=>{
                this.webSocketManager.pause();
                this.state.pause();
            },
            resumeSocket: ()=>this.webSocketManager.resume(),
            clearAuth: ()=>{
                this.clearAuth();
            }
        }, {
            logger: this.logger,
            refreshTokenLeewaySeconds: authRefreshTokenLeewaySeconds
        });
        this.optimisticQueryResults = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$optimistic_updates_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptimisticQueryResults"]();
        this.onTransition = onTransition;
        this._nextRequestId = 0;
        this._sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newSessionId"])();
        const { unsavedChangesWarning } = options;
        if (typeof window === "undefined" || typeof window.addEventListener === "undefined") {
            if (unsavedChangesWarning === true) {
                throw new Error("unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.");
            }
        } else if (unsavedChangesWarning !== false) {
            window.addEventListener("beforeunload", (e)=>{
                if (this.requestManager.hasIncompleteRequests()) {
                    e.preventDefault();
                    const confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";
                    (e || window.event).returnValue = confirmationMessage;
                    return confirmationMessage;
                }
            });
        }
        this.webSocketManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$web_socket_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebSocketManager"](wsUri, {
            onOpen: (reconnectMetadata)=>{
                this.mark("convexWebSocketOpen");
                this.webSocketManager.sendMessage({
                    ...reconnectMetadata,
                    type: "Connect",
                    sessionId: this._sessionId,
                    maxObservedTimestamp: this.maxObservedTimestamp
                });
                const oldRemoteQueryResults = new Set(this.remoteQuerySet.remoteQueryResults().keys());
                this.remoteQuerySet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$remote_query_set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoteQuerySet"]((queryId)=>this.state.queryPath(queryId), this.logger);
                const [querySetModification, authModification] = this.state.restart(oldRemoteQueryResults);
                if (authModification) {
                    this.webSocketManager.sendMessage(authModification);
                }
                this.webSocketManager.sendMessage(querySetModification);
                for (const message of this.requestManager.restart()){
                    this.webSocketManager.sendMessage(message);
                }
            },
            onResume: ()=>{
                const [querySetModification, authModification] = this.state.resume();
                if (authModification) {
                    this.webSocketManager.sendMessage(authModification);
                }
                if (querySetModification) {
                    this.webSocketManager.sendMessage(querySetModification);
                }
                for (const message of this.requestManager.resume()){
                    this.webSocketManager.sendMessage(message);
                }
            },
            onMessage: (serverMessage)=>{
                if (!this.firstMessageReceived) {
                    this.firstMessageReceived = true;
                    this.mark("convexFirstMessageReceived");
                    this.reportMarks();
                }
                switch(serverMessage.type){
                    case "Transition":
                        {
                            this.observedTimestamp(serverMessage.endVersion.ts);
                            this.authenticationManager.onTransition(serverMessage);
                            this.remoteQuerySet.transition(serverMessage);
                            this.state.transition(serverMessage);
                            const completedRequests = this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());
                            this.notifyOnQueryResultChanges(completedRequests);
                            break;
                        }
                    case "MutationResponse":
                        {
                            if (serverMessage.success) {
                                this.observedTimestamp(serverMessage.ts);
                            }
                            const completedMutationId = this.requestManager.onResponse(serverMessage);
                            if (completedMutationId !== null) {
                                this.notifyOnQueryResultChanges(/* @__PURE__ */ new Set([
                                    completedMutationId
                                ]));
                            }
                            break;
                        }
                    case "ActionResponse":
                        {
                            this.requestManager.onResponse(serverMessage);
                            break;
                        }
                    case "AuthError":
                        {
                            this.authenticationManager.onAuthError(serverMessage);
                            break;
                        }
                    case "FatalError":
                        {
                            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logFatalError"])(this.logger, serverMessage.error);
                            void this.webSocketManager.terminate();
                            throw error;
                        }
                    case "Ping":
                        break;
                    default:
                        {
                            const _typeCheck = serverMessage;
                        }
                }
                return {
                    hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect()
                };
            }
        }, webSocketConstructor, this.logger);
        this.mark("convexClientConstructed");
    }
    /**
   * Return true if there is outstanding work from prior to the time of the most recent restart.
   * This indicates that the client has not proven itself to have gotten past the issue that
   * potentially led to the restart. Use this to influence when to reset backoff after a failure.
   */ hasSyncedPastLastReconnect() {
        const hasSyncedPastLastReconnect = this.requestManager.hasSyncedPastLastReconnect() || this.state.hasSyncedPastLastReconnect();
        return hasSyncedPastLastReconnect;
    }
    observedTimestamp(observedTs) {
        if (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(observedTs)) {
            this.maxObservedTimestamp = observedTs;
        }
    }
    getMaxObservedTimestamp() {
        return this.maxObservedTimestamp;
    }
    /**
   * Compute the current query results based on the remoteQuerySet and the
   * current optimistic updates and call `onTransition` for all the changed
   * queries.
   *
   * @param completedMutations - A set of mutation IDs whose optimistic updates
   * are no longer needed.
   */ notifyOnQueryResultChanges(completedRequest) {
        const remoteQueryResults = this.remoteQuerySet.remoteQueryResults();
        const queryTokenToValue = /* @__PURE__ */ new Map();
        for (const [queryId, result] of remoteQueryResults){
            const queryToken = this.state.queryToken(queryId);
            if (queryToken !== null) {
                const query = {
                    result,
                    udfPath: this.state.queryPath(queryId),
                    args: this.state.queryArgs(queryId)
                };
                queryTokenToValue.set(queryToken, query);
            }
        }
        this.onTransition(this.optimisticQueryResults.ingestQueryResultsFromServer(queryTokenToValue, completedRequest));
    }
    /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */ setAuth(fetchToken, onChange) {
        void this.authenticationManager.setConfig(fetchToken, onChange);
    }
    hasAuth() {
        return this.state.hasAuth();
    }
    /** @internal */ setAdminAuth(value, fakeUserIdentity) {
        const message = this.state.setAdminAuth(value, fakeUserIdentity);
        this.webSocketManager.sendMessage(message);
    }
    clearAuth() {
        const message = this.state.clearAuth();
        this.webSocketManager.sendMessage(message);
    }
    /**
     * Subscribe to a query function.
     *
     * Whenever this query's result changes, the `onTransition` callback
     * passed into the constructor will be called.
     *
     * @param name - The name of the query.
     * @param args - An arguments object for the query. If this is omitted, the
     * arguments will be `{}`.
     * @param options - A {@link SubscribeOptions} options object for this query.
  
     * @returns An object containing a {@link QueryToken} corresponding to this
     * query and an `unsubscribe` callback.
     */ subscribe(name, args, options) {
        const argsObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const { modification, queryToken, unsubscribe } = this.state.subscribe(name, argsObject, options?.journal, options?.componentPath);
        if (modification !== null) {
            this.webSocketManager.sendMessage(modification);
        }
        return {
            queryToken,
            unsubscribe: ()=>{
                const modification2 = unsubscribe();
                if (modification2) {
                    this.webSocketManager.sendMessage(modification2);
                }
            }
        };
    }
    /**
   * A query result based only on the current, local state.
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   */ localQueryResult(udfPath, args) {
        const argsObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(udfPath, argsObject);
        return this.optimisticQueryResults.queryResult(queryToken);
    }
    /**
   * Get query result by query token based on current, local state
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   *
   * @internal
   */ localQueryResultByToken(queryToken) {
        return this.optimisticQueryResults.queryResult(queryToken);
    }
    /**
   * Whether local query result is available for a toke.
   *
   * This method does not throw if the result is an error.
   *
   * @internal
   */ hasLocalQueryResultByToken(queryToken) {
        return this.optimisticQueryResults.hasQueryResult(queryToken);
    }
    /**
   * @internal
   */ localQueryLogs(udfPath, args) {
        const argsObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(udfPath, argsObject);
        return this.optimisticQueryResults.queryLogs(queryToken);
    }
    /**
   * Retrieve the current {@link QueryJournal} for this query function.
   *
   * If we have not yet received a result for this query, this will be `undefined`.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for this query.
   * @returns The query's {@link QueryJournal} or `undefined`.
   */ queryJournal(name, args) {
        const argsObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const queryToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$udf_path_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializePathAndArgs"])(name, argsObject);
        return this.state.queryJournal(queryToken);
    }
    /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */ connectionState() {
        return {
            hasInflightRequests: this.requestManager.hasInflightRequests(),
            isWebSocketConnected: this.webSocketManager.socketState() === "ready",
            timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest()
        };
    }
    /**
     * Execute a mutation function.
     *
     * @param name - The name of the mutation.
     * @param args - An arguments object for the mutation. If this is omitted,
     * the arguments will be `{}`.
     * @param options - A {@link MutationOptions} options object for this mutation.
  
     * @returns - A promise of the mutation's result.
     */ async mutation(name, args, options) {
        const result = await this.mutationInternal(name, args, options);
        if (!result.success) {
            if (result.errorData !== void 0) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardData"])(result, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("mutation", name, result)));
            }
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("mutation", name, result));
        }
        return result.value;
    }
    /**
   * @internal
   */ async mutationInternal(udfPath, args, options, componentPath) {
        const mutationArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        this.tryReportLongDisconnect();
        const requestId = this.nextRequestId;
        this._nextRequestId++;
        if (options !== void 0) {
            const optimisticUpdate = options.optimisticUpdate;
            if (optimisticUpdate !== void 0) {
                const wrappedUpdate = (localQueryStore)=>{
                    optimisticUpdate(localQueryStore, mutationArgs);
                };
                const changedQueries = this.optimisticQueryResults.applyOptimisticUpdate(wrappedUpdate, requestId);
                this.onTransition(changedQueries);
            }
        }
        const message = {
            type: "Mutation",
            requestId,
            udfPath,
            componentPath,
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(mutationArgs)
            ]
        };
        const mightBeSent = this.webSocketManager.sendMessage(message);
        return this.requestManager.request(message, mightBeSent);
    }
    /**
   * Execute an action function.
   *
   * @param name - The name of the action.
   * @param args - An arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */ async action(name, args) {
        const result = await this.actionInternal(name, args);
        if (!result.success) {
            if (result.errorData !== void 0) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardData"])(result, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("action", name, result)));
            }
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHybridErrorStacktrace"])("action", name, result));
        }
        return result.value;
    }
    /**
   * @internal
   */ async actionInternal(udfPath, args, componentPath) {
        const actionArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        const requestId = this.nextRequestId;
        this._nextRequestId++;
        this.tryReportLongDisconnect();
        const message = {
            type: "Action",
            requestId,
            udfPath,
            componentPath,
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(actionArgs)
            ]
        };
        const mightBeSent = this.webSocketManager.sendMessage(message);
        return this.requestManager.request(message, mightBeSent);
    }
    /**
   * Close any network handles associated with this client and stop all subscriptions.
   *
   * Call this method when you're done with an {@link BaseConvexClient} to
   * dispose of its sockets and resources.
   *
   * @returns A `Promise` fulfilled when the connection has been completely closed.
   */ async close() {
        this.authenticationManager.stop();
        return this.webSocketManager.terminate();
    }
    /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */ get url() {
        return this.address;
    }
    /**
   * @internal
   */ get nextRequestId() {
        return this._nextRequestId;
    }
    /**
   * @internal
   */ get sessionId() {
        return this._sessionId;
    }
    /**
   * Reports performance marks to the server. This should only be called when
   * we have a functional websocket.
   */ reportMarks() {
        if (this.debug) {
            const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMarksReport"])(this.sessionId);
            this.webSocketManager.sendMessage({
                type: "Event",
                eventType: "ClientConnect",
                event: report
            });
        }
    }
    tryReportLongDisconnect() {
        if (!this.debug) {
            return;
        }
        const timeOfOldestRequest = this.connectionState().timeOfOldestInflightRequest;
        if (timeOfOldestRequest === null || Date.now() - timeOfOldestRequest.getTime() <= 60 * 1e3) {
            return;
        }
        const endpoint = `${this.address}/api/debug_event`;
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
            },
            body: JSON.stringify({
                event: "LongWebsocketDisconnect"
            })
        }).then((response)=>{
            if (!response.ok) {
                this.logger.warn("Analytics request failed with response:", response.body);
            }
        }).catch((error)=>{
            this.logger.warn("Analytics response failed with error:", error);
        });
    }
} //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/simple_client.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexClient": (()=>ConvexClient),
    "setDefaultWebSocketConstructor": (()=>setDefaultWebSocketConstructor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/client.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
let defaultWebSocketConstructor;
function setDefaultWebSocketConstructor(ws) {
    defaultWebSocketConstructor = ws;
}
class ConvexClient {
    /**
   * Construct a client and immediately initiate a WebSocket connection to the passed address.
   *
   * @public
   */ constructor(address, options = {}){
        __publicField(this, "listeners");
        __publicField(this, "_client");
        // A synthetic server event to run callbacks the first time
        __publicField(this, "callNewListenersWithCurrentValuesTimer");
        __publicField(this, "_closed");
        __publicField(this, "disabled");
        if (options.skipConvexDeploymentUrlCheck !== true) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDeploymentUrl"])(address);
        }
        const { disabled, ...baseOptions } = options;
        this._closed = false;
        this.disabled = !!disabled;
        if (defaultWebSocketConstructor && !("webSocketConstructor" in baseOptions) && typeof WebSocket === "undefined") {
            baseOptions.webSocketConstructor = defaultWebSocketConstructor;
        }
        if (typeof window === "undefined" && !("unsavedChangesWarning" in baseOptions)) {
            baseOptions.unsavedChangesWarning = false;
        }
        if (!this.disabled) {
            this._client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseConvexClient"](address, (updatedQueries)=>this._transition(updatedQueries), baseOptions);
        }
        this.listeners = /* @__PURE__ */ new Set();
    }
    /**
   * Once closed no registered callbacks will fire again.
   */ get closed() {
        return this._closed;
    }
    get client() {
        if (this._client) return this._client;
        throw new Error("ConvexClient is disabled");
    }
    /**
   * Call a callback whenever a new result for a query is received. The callback
   * will run soon after being registered if a result for the query is already
   * in memory.
   *
   * The return value is an {@link Unsubscribe} object which is both a function
   * an an object with properties. Both of the patterns below work with this object:
   *
   *```ts
   * // call the return value as a function
   * const unsubscribe = client.onUpdate(api.messages.list, {}, (messages) => {
   *   console.log(messages);
   * });
   * unsubscribe();
   *
   * // unpack the return value into its properties
   * const {
   *   getCurrentValue,
   *   unsubscribe,
   * } = client.onUpdate(api.messages.list, {}, (messages) => {
   *   console.log(messages);
   * });
   *```
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - The arguments to run the query with.
   * @param callback - Function to call when the query result updates.
   * @param onError - Function to call when the query result updates with an error.
   * If not provided, errors will be thrown instead of calling the callback.
   *
   * @return an {@link Unsubscribe} function to stop calling the onUpdate function.
   */ onUpdate(query, args, callback, onError) {
        if (this.disabled) {
            const disabledUnsubscribe = ()=>{};
            const unsubscribeProps2 = {
                unsubscribe: disabledUnsubscribe,
                getCurrentValue: ()=>void 0,
                getQueryLogs: ()=>void 0
            };
            Object.assign(disabledUnsubscribe, unsubscribeProps2);
            return disabledUnsubscribe;
        }
        const { queryToken, unsubscribe } = this.client.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query), args);
        const queryInfo = {
            queryToken,
            callback,
            onError,
            unsubscribe,
            hasEverRun: false,
            query,
            args
        };
        this.listeners.add(queryInfo);
        if (this.queryResultReady(queryToken) && this.callNewListenersWithCurrentValuesTimer === void 0) {
            this.callNewListenersWithCurrentValuesTimer = setTimeout(()=>this.callNewListenersWithCurrentValues(), 0);
        }
        const unsubscribeProps = {
            unsubscribe: ()=>{
                if (this.closed) {
                    return;
                }
                this.listeners.delete(queryInfo);
                unsubscribe();
            },
            getCurrentValue: ()=>this.client.localQueryResultByToken(queryToken),
            getQueryLogs: ()=>this.client.localQueryLogs(queryToken)
        };
        const ret = unsubscribeProps.unsubscribe;
        Object.assign(ret, unsubscribeProps);
        return ret;
    }
    // Run all callbacks that have never been run before if they have a query
    // result available now.
    callNewListenersWithCurrentValues() {
        this.callNewListenersWithCurrentValuesTimer = void 0;
        this._transition([], true);
    }
    queryResultReady(queryToken) {
        return this.client.hasLocalQueryResultByToken(queryToken);
    }
    async close() {
        if (this.disabled) return;
        this.listeners.clear();
        this._closed = true;
        return this.client.close();
    }
    /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */ setAuth(fetchToken, onChange) {
        this.client.setAuth(fetchToken, onChange ?? (()=>{}));
    }
    /**
   * @internal
   */ setAdminAuth(token, identity) {
        if (this.closed) {
            throw new Error("ConvexClient has already been closed.");
        }
        if (this.disabled) return;
        this.client.setAdminAuth(token, identity);
    }
    /**
   * @internal
   */ _transition(updatedQueries, callNewListeners = false) {
        for (const queryInfo of this.listeners){
            const { callback, queryToken, onError, hasEverRun } = queryInfo;
            if (updatedQueries.includes(queryToken) || callNewListeners && !hasEverRun && this.client.hasLocalQueryResultByToken(queryToken)) {
                queryInfo.hasEverRun = true;
                let newValue;
                try {
                    newValue = this.client.localQueryResultByToken(queryToken);
                } catch (error) {
                    if (!(error instanceof Error)) throw error;
                    if (onError) {
                        onError(error, "Second argument to onUpdate onError is reserved for later use");
                    } else {
                        void Promise.reject(error);
                    }
                    continue;
                }
                callback(newValue, "Second argument to onUpdate callback is reserved for later use");
            }
        }
    }
    /**
   * Execute a mutation function.
   *
   * @param mutation - A {@link server.FunctionReference} for the public mutation
   * to run.
   * @param args - An arguments object for the mutation.
   * @param options - A {@link MutationOptions} options object for the mutation.
   * @returns A promise of the mutation's result.
   */ async mutation(mutation, args) {
        if (this.disabled) throw new Error("ConvexClient is disabled");
        return await this.client.mutation((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(mutation), args);
    }
    /**
   * Execute an action function.
   *
   * @param action - A {@link server.FunctionReference} for the public action
   * to run.
   * @param args - An arguments object for the action.
   * @returns A promise of the action's result.
   */ async action(action, args) {
        if (this.disabled) throw new Error("ConvexClient is disabled");
        return await this.client.action((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(action), args);
    }
    /**
   * Fetch a query result once.
   *
   * @param query - A {@link server.FunctionReference} for the public query
   * to run.
   * @param args - An arguments object for the query.
   * @returns A promise of the query's result.
   */ async query(query, args) {
        if (this.disabled) throw new Error("ConvexClient is disabled");
        const value = this.client.localQueryResult((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query), args);
        if (value !== void 0) return Promise.resolve(value);
        return new Promise((resolve, reject)=>{
            const { unsubscribe } = this.onUpdate(query, args, (value2)=>{
                unsubscribe();
                resolve(value2);
            }, (e)=>{
                unsubscribe();
                reject(e);
            });
        });
    }
} //# sourceMappingURL=simple_client.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/http_client.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexHttpClient": (()=>ConvexHttpClient),
    "STATUS_CODE_BAD_REQUEST": (()=>STATUS_CODE_BAD_REQUEST),
    "STATUS_CODE_OK": (()=>STATUS_CODE_OK),
    "STATUS_CODE_UDF_FAILED": (()=>STATUS_CODE_UDF_FAILED),
    "setFetch": (()=>setFetch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UDF_FAILED = 560;
let specifiedFetch = void 0;
function setFetch(f) {
    specifiedFetch = f;
}
class ConvexHttpClient {
    /**
   * Create a new {@link ConvexHttpClient}.
   *
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param options - An object of options.
   * - `skipConvexDeploymentUrlCheck` - Skip validating that the Convex deployment URL looks like
   * `https://happy-animal-123.convex.cloud` or localhost. This can be useful if running a self-hosted
   * Convex backend that uses a different URL.
   * - `logger` - A logger. If not provided, logs to the console.
   * You can construct your own logger to customize logging to log elsewhere
   * or not log at all.
   */ constructor(address, options){
        __publicField(this, "address");
        __publicField(this, "auth");
        __publicField(this, "adminAuth");
        __publicField(this, "encodedTsPromise");
        __publicField(this, "debug");
        __publicField(this, "fetchOptions");
        __publicField(this, "logger");
        if (typeof options === "boolean") {
            throw new Error("skipConvexDeploymentUrlCheck as the second argument is no longer supported. Please pass an options object, `{ skipConvexDeploymentUrlCheck: true }`.");
        }
        const opts = options ?? {};
        if (opts.skipConvexDeploymentUrlCheck !== true) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDeploymentUrl"])(address);
        }
        this.logger = opts.logger ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["instantiateDefaultLogger"])({
            verbose: false
        });
        this.address = address;
        this.debug = true;
    }
    /**
   * Obtain the {@link ConvexHttpClient}'s URL to its backend.
   * @deprecated Use url, which returns the url without /api at the end.
   *
   * @returns The URL to the Convex backend, including the client's API version.
   */ backendUrl() {
        return `${this.address}/api`;
    }
    /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */ get url() {
        return this.address;
    }
    /**
   * Set the authentication token to be used for subsequent queries and mutations.
   *
   * Should be called whenever the token changes (i.e. due to expiration and refresh).
   *
   * @param value - JWT-encoded OpenID Connect identity token.
   */ setAuth(value) {
        this.clearAuth();
        this.auth = value;
    }
    /**
   * @internal
   */ setAdminAuth(token, actingAsIdentity) {
        this.clearAuth();
        if (actingAsIdentity !== void 0) {
            const bytes = new TextEncoder().encode(JSON.stringify(actingAsIdentity));
            const actingAsIdentityEncoded = btoa(String.fromCodePoint(...bytes));
            this.adminAuth = `${token}:${actingAsIdentityEncoded}`;
        } else {
            this.adminAuth = token;
        }
    }
    /**
   * Clear the current authentication token if set.
   */ clearAuth() {
        this.auth = void 0;
        this.adminAuth = void 0;
    }
    /**
   * Sets whether the result log lines should be printed on the console or not.
   *
   * @internal
   */ setDebug(debug) {
        this.debug = debug;
    }
    /**
   * Used to customize the fetch behavior in some runtimes.
   *
   * @internal
   */ setFetchOptions(fetchOptions) {
        this.fetchOptions = fetchOptions;
    }
    /**
   * This API is experimental: it may change or disappear.
   *
   * Execute a Convex query function at the same timestamp as every other
   * consistent query execution run by this HTTP client.
   *
   * This doesn't make sense for long-lived ConvexHttpClients as Convex
   * backends can read a limited amount into the past: beyond 30 seconds
   * in the past may not be available.
   *
   * Create a new client to use a consistent time.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   *
   * @deprecated This API is experimental: it may change or disappear.
   */ async consistentQuery(query, ...args) {
        const queryArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        const timestampPromise = this.getTimestamp();
        return await this.queryInner(query, queryArgs, {
            timestampPromise
        });
    }
    async getTimestamp() {
        if (this.encodedTsPromise) {
            return this.encodedTsPromise;
        }
        return this.encodedTsPromise = this.getTimestampInner();
    }
    async getTimestampInner() {
        const localFetch = specifiedFetch || fetch;
        const headers = {
            "Content-Type": "application/json",
            "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        };
        const response = await localFetch(`${this.address}/api/query_ts`, {
            ...this.fetchOptions,
            method: "POST",
            headers,
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const { ts } = await response.json();
        return ts;
    }
    /**
   * Execute a Convex query function.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   */ async query(query, ...args) {
        const queryArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        return await this.queryInner(query, queryArgs, {});
    }
    async queryInner(query, queryArgs, options) {
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
        const args = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(queryArgs)
        ];
        const headers = {
            "Content-Type": "application/json",
            "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        };
        if (this.adminAuth) {
            headers["Authorization"] = `Convex ${this.adminAuth}`;
        } else if (this.auth) {
            headers["Authorization"] = `Bearer ${this.auth}`;
        }
        const localFetch = specifiedFetch || fetch;
        const timestamp = options.timestampPromise ? await options.timestampPromise : void 0;
        const body = JSON.stringify({
            path: name,
            format: "convex_encoded_json",
            args,
            ...timestamp ? {
                ts: timestamp
            } : {}
        });
        const endpoint = timestamp ? `${this.address}/api/query_at_ts` : `${this.address}/api/query`;
        const response = await localFetch(endpoint, {
            ...this.fetchOptions,
            body,
            method: "POST",
            headers,
            credentials: "include"
        });
        if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
            throw new Error(await response.text());
        }
        const respJSON = await response.json();
        if (this.debug) {
            for (const line of respJSON.logLines ?? []){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "query", name, line);
            }
        }
        switch(respJSON.status){
            case "success":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(respJSON.value);
            case "error":
                if (respJSON.errorData !== void 0) {
                    throw forwardErrorData(respJSON.errorData, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"](respJSON.errorMessage));
                }
                throw new Error(respJSON.errorMessage);
            default:
                throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
        }
    }
    /**
   * Execute a Convex mutation function.
   *
   * @param name - The name of the mutation.
   * @param args - The arguments object for the mutation. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the mutation's result.
   */ async mutation(mutation, ...args) {
        const mutationArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(mutation);
        const body = JSON.stringify({
            path: name,
            format: "convex_encoded_json",
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(mutationArgs)
            ]
        });
        const headers = {
            "Content-Type": "application/json",
            "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        };
        if (this.adminAuth) {
            headers["Authorization"] = `Convex ${this.adminAuth}`;
        } else if (this.auth) {
            headers["Authorization"] = `Bearer ${this.auth}`;
        }
        const localFetch = specifiedFetch || fetch;
        const response = await localFetch(`${this.address}/api/mutation`, {
            ...this.fetchOptions,
            body,
            method: "POST",
            headers,
            credentials: "include"
        });
        if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
            throw new Error(await response.text());
        }
        const respJSON = await response.json();
        if (this.debug) {
            for (const line of respJSON.logLines ?? []){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "mutation", name, line);
            }
        }
        switch(respJSON.status){
            case "success":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(respJSON.value);
            case "error":
                if (respJSON.errorData !== void 0) {
                    throw forwardErrorData(respJSON.errorData, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"](respJSON.errorMessage));
                }
                throw new Error(respJSON.errorMessage);
            default:
                throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
        }
    }
    /**
   * Execute a Convex action function.
   *
   * @param name - The name of the action.
   * @param args - The arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */ async action(action, ...args) {
        const actionArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(action);
        const body = JSON.stringify({
            path: name,
            format: "convex_encoded_json",
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(actionArgs)
            ]
        });
        const headers = {
            "Content-Type": "application/json",
            "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        };
        if (this.adminAuth) {
            headers["Authorization"] = `Convex ${this.adminAuth}`;
        } else if (this.auth) {
            headers["Authorization"] = `Bearer ${this.auth}`;
        }
        const localFetch = specifiedFetch || fetch;
        const response = await localFetch(`${this.address}/api/action`, {
            ...this.fetchOptions,
            body,
            method: "POST",
            headers,
            credentials: "include"
        });
        if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
            throw new Error(await response.text());
        }
        const respJSON = await response.json();
        if (this.debug) {
            for (const line of respJSON.logLines ?? []){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "action", name, line);
            }
        }
        switch(respJSON.status){
            case "success":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(respJSON.value);
            case "error":
                if (respJSON.errorData !== void 0) {
                    throw forwardErrorData(respJSON.errorData, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"](respJSON.errorMessage));
                }
                throw new Error(respJSON.errorMessage);
            default:
                throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
        }
    }
    /**
   * Execute a Convex function of an unknown type.
   *
   * @param name - The name of the function.
   * @param args - The arguments object for the function. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the function's result.
   *
   * @internal
   */ async function(anyFunction, componentPath, ...args) {
        const functionArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
        const name = typeof anyFunction === "string" ? anyFunction : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(anyFunction);
        const body = JSON.stringify({
            componentPath,
            path: name,
            format: "convex_encoded_json",
            args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(functionArgs)
        });
        const headers = {
            "Content-Type": "application/json",
            "Convex-Client": `npm-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        };
        if (this.adminAuth) {
            headers["Authorization"] = `Convex ${this.adminAuth}`;
        } else if (this.auth) {
            headers["Authorization"] = `Bearer ${this.auth}`;
        }
        const localFetch = specifiedFetch || fetch;
        const response = await localFetch(`${this.address}/api/function`, {
            ...this.fetchOptions,
            body,
            method: "POST",
            headers,
            credentials: "include"
        });
        if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
            throw new Error(await response.text());
        }
        const respJSON = await response.json();
        if (this.debug) {
            for (const line of respJSON.logLines ?? []){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logForFunction"])(this.logger, "info", "any", name, line);
            }
        }
        switch(respJSON.status){
            case "success":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(respJSON.value);
            case "error":
                if (respJSON.errorData !== void 0) {
                    throw forwardErrorData(respJSON.errorData, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"](respJSON.errorMessage));
                }
                throw new Error(respJSON.errorMessage);
            default:
                throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
        }
    }
}
function forwardErrorData(errorData, error) {
    error.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(errorData);
    return error;
} //# sourceMappingURL=http_client.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict";
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$simple_client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/simple_client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$http_client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/http_client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexProvider": (()=>ConvexProvider),
    "ConvexReactClient": (()=>ConvexReactClient),
    "createMutation": (()=>createMutation),
    "useAction": (()=>useAction),
    "useConvex": (()=>useConvex),
    "useMutation": (()=>useMutation),
    "useQuery": (()=>useQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_queries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_queries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/logging.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/browser/sync/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
;
;
;
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] === "undefined") {
    throw new Error("Required dependency 'react' not found");
}
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] === "undefined") {
    throw new Error("Required dependency 'react-dom' not found");
}
function createMutation(mutationReference, client, update) {
    function mutation(args) {
        assertNotAccidentalArgument(args);
        return client.mutation(mutationReference, args, {
            optimisticUpdate: update
        });
    }
    mutation.withOptimisticUpdate = function withOptimisticUpdate(optimisticUpdate) {
        if (update !== void 0) {
            throw new Error(`Already specified optimistic update for mutation ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(mutationReference)}`);
        }
        return createMutation(mutationReference, client, optimisticUpdate);
    };
    return mutation;
}
function createAction(actionReference, client) {
    return function(args) {
        return client.action(actionReference, args);
    };
}
class ConvexReactClient {
    /**
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param options - See {@link ConvexReactClientOptions} for a full description.
   */ constructor(address, options){
        __publicField(this, "address");
        __publicField(this, "cachedSync");
        __publicField(this, "listeners");
        __publicField(this, "options");
        __publicField(this, "closed", false);
        __publicField(this, "_logger");
        __publicField(this, "adminAuth");
        __publicField(this, "fakeUserIdentity");
        if (address === void 0) {
            throw new Error("No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated.");
        }
        if (typeof address !== "string") {
            throw new Error(`ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof address} instead.`);
        }
        if (!address.includes("://")) {
            throw new Error("Provided address was not an absolute URL.");
        }
        this.address = address;
        this.listeners = /* @__PURE__ */ new Map();
        this._logger = options?.logger ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$logging$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["instantiateDefaultLogger"])({
            verbose: options?.verbose ?? false
        });
        this.options = {
            ...options,
            logger: this._logger
        };
    }
    /**
   * Lazily instantiate the `BaseConvexClient` so we don't create the WebSocket
   * when server-side rendering.
   *
   * @internal
   */ get sync() {
        if (this.closed) {
            throw new Error("ConvexReactClient has already been closed.");
        }
        if (this.cachedSync) {
            return this.cachedSync;
        }
        this.cachedSync = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$browser$2f$sync$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseConvexClient"](this.address, (updatedQueries)=>this.transition(updatedQueries), this.options);
        if (this.adminAuth) {
            this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity);
        }
        return this.cachedSync;
    }
    /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */ setAuth(fetchToken, onChange) {
        if (typeof fetchToken === "string") {
            throw new Error("Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.");
        }
        this.sync.setAuth(fetchToken, onChange ?? (()=>{}));
    }
    /**
   * Clear the current authentication token if set.
   */ clearAuth() {
        this.sync.clearAuth();
    }
    /**
   * @internal
   */ setAdminAuth(token, identity) {
        this.adminAuth = token;
        this.fakeUserIdentity = identity;
        if (this.closed) {
            throw new Error("ConvexReactClient has already been closed.");
        }
        if (this.cachedSync) {
            this.sync.setAdminAuth(token, identity);
        }
    }
    /**
   * Construct a new {@link Watch} on a Convex query function.
   *
   * **Most application code should not call this method directly. Instead use
   * the {@link useQuery} hook.**
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - An arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @param options - A {@link WatchQueryOptions} options object for this query.
   *
   * @returns The {@link Watch} object.
   */ watchQuery(query, ...argsAndOptions) {
        const [args, options] = argsAndOptions;
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
        return {
            onUpdate: (callback)=>{
                const { queryToken, unsubscribe } = this.sync.subscribe(name, args, options);
                const currentListeners = this.listeners.get(queryToken);
                if (currentListeners !== void 0) {
                    currentListeners.add(callback);
                } else {
                    this.listeners.set(queryToken, /* @__PURE__ */ new Set([
                        callback
                    ]));
                }
                return ()=>{
                    if (this.closed) {
                        return;
                    }
                    const currentListeners2 = this.listeners.get(queryToken);
                    currentListeners2.delete(callback);
                    if (currentListeners2.size === 0) {
                        this.listeners.delete(queryToken);
                    }
                    unsubscribe();
                };
            },
            localQueryResult: ()=>{
                if (this.cachedSync) {
                    return this.cachedSync.localQueryResult(name, args);
                }
                return void 0;
            },
            localQueryLogs: ()=>{
                if (this.cachedSync) {
                    return this.cachedSync.localQueryLogs(name, args);
                }
                return void 0;
            },
            journal: ()=>{
                if (this.cachedSync) {
                    return this.cachedSync.queryJournal(name, args);
                }
                return void 0;
            }
        };
    }
    /**
   * Execute a mutation function.
   *
   * @param mutation - A {@link server.FunctionReference} for the public mutation
   * to run.
   * @param args - An arguments object for the mutation. If this is omitted,
   * the arguments will be `{}`.
   * @param options - A {@link MutationOptions} options object for the mutation.
   * @returns A promise of the mutation's result.
   */ mutation(mutation, ...argsAndOptions) {
        const [args, options] = argsAndOptions;
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(mutation);
        return this.sync.mutation(name, args, options);
    }
    /**
   * Execute an action function.
   *
   * @param action - A {@link server.FunctionReference} for the public action
   * to run.
   * @param args - An arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */ action(action, ...args) {
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(action);
        return this.sync.action(name, ...args);
    }
    /**
   * Fetch a query result once.
   *
   * **Most application code should subscribe to queries instead, using
   * the {@link useQuery} hook.**
   *
   * @param query - A {@link server.FunctionReference} for the public query
   * to run.
   * @param args - An arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   */ query(query, ...args) {
        const watch = this.watchQuery(query, ...args);
        const existingResult = watch.localQueryResult();
        if (existingResult !== void 0) {
            return Promise.resolve(existingResult);
        }
        return new Promise((resolve, reject)=>{
            const unsubscribe = watch.onUpdate(()=>{
                unsubscribe();
                try {
                    resolve(watch.localQueryResult());
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */ connectionState() {
        return this.sync.connectionState();
    }
    /**
   * Get the logger for this client.
   *
   * @returns The {@link Logger} for this client.
   */ get logger() {
        return this._logger;
    }
    /**
   * Close any network handles associated with this client and stop all subscriptions.
   *
   * Call this method when you're done with a {@link ConvexReactClient} to
   * dispose of its sockets and resources.
   *
   * @returns A `Promise` fulfilled when the connection has been completely closed.
   */ async close() {
        this.closed = true;
        this.listeners = /* @__PURE__ */ new Map();
        if (this.cachedSync) {
            const sync = this.cachedSync;
            this.cachedSync = void 0;
            await sync.close();
        }
    }
    transition(updatedQueries) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].unstable_batchedUpdates(()=>{
            for (const queryToken of updatedQueries){
                const callbacks = this.listeners.get(queryToken);
                if (callbacks) {
                    for (const callback of callbacks){
                        callback();
                    }
                }
            }
        });
    }
}
const ConvexContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
function useConvex() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConvexContext);
}
const ConvexProvider = ({ client, children })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ConvexContext.Provider, {
        value: client
    }, children);
};
function useQuery(query, ...args) {
    const skip = args[0] === "skip";
    const argsObject = args[0] === "skip" ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args[0]);
    const queryReference = typeof query === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeFunctionReference"])(query) : query;
    const queryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(queryReference);
    const queries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>skip ? {} : {
            query: {
                query: queryReference,
                args: argsObject
            }
        }, // Stringify args so args that are semantically the same don't trigger a
    // rerender. Saves developers from adding `useMemo` on every args usage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(argsObject)),
        queryName,
        skip
    ]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_queries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueries"])(queries);
    const result = results["query"];
    if (result instanceof Error) {
        throw result;
    }
    return result;
}
function useMutation(mutation) {
    const mutationReference = typeof mutation === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeFunctionReference"])(mutation) : mutation;
    const convex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConvexContext);
    if (convex === void 0) {
        throw new Error("Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>createMutation(mutationReference, convex), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        convex,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(mutationReference)
    ]);
}
function useAction(action) {
    const convex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConvexContext);
    const actionReference = typeof action === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeFunctionReference"])(action) : action;
    if (convex === void 0) {
        throw new Error("Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>createAction(actionReference, convex), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        convex,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(actionReference)
    ]);
}
function assertNotAccidentalArgument(value) {
    if (typeof value === "object" && value !== null && "bubbles" in value && "persist" in value && "isDefaultPrevented" in value) {
        throw new Error(`Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like \`const handler = () => myMutation();\` and using \`handler\` in the event handler.`);
    }
} //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/queries_observer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "QueriesObserver": (()=>QueriesObserver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
class QueriesObserver {
    constructor(createWatch){
        __publicField(this, "createWatch");
        __publicField(this, "queries");
        __publicField(this, "listeners");
        this.createWatch = createWatch;
        this.queries = {};
        this.listeners = /* @__PURE__ */ new Set();
    }
    setQueries(newQueries) {
        for (const identifier of Object.keys(newQueries)){
            const { query, args } = newQueries[identifier];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
            if (this.queries[identifier] === void 0) {
                this.addQuery(identifier, query, args);
            } else {
                const existingInfo = this.queries[identifier];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(existingInfo.query) || JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(args)) !== JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(existingInfo.args))) {
                    this.removeQuery(identifier);
                    this.addQuery(identifier, query, args);
                }
            }
        }
        for (const identifier of Object.keys(this.queries)){
            if (newQueries[identifier] === void 0) {
                this.removeQuery(identifier);
            }
        }
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    getLocalResults(queries) {
        const result = {};
        for (const identifier of Object.keys(queries)){
            const { query, args } = queries[identifier];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
            const watch = this.createWatch(query, args);
            let value;
            try {
                value = watch.localQueryResult();
            } catch (e) {
                if (e instanceof Error) {
                    value = e;
                } else {
                    throw e;
                }
            }
            result[identifier] = value;
        }
        return result;
    }
    setCreateWatch(createWatch) {
        this.createWatch = createWatch;
        for (const identifier of Object.keys(this.queries)){
            const { query, args, watch } = this.queries[identifier];
            const journal = watch.journal();
            this.removeQuery(identifier);
            this.addQuery(identifier, query, args, journal);
        }
    }
    destroy() {
        for (const identifier of Object.keys(this.queries)){
            this.removeQuery(identifier);
        }
        this.listeners = /* @__PURE__ */ new Set();
    }
    addQuery(identifier, query, args, journal) {
        if (this.queries[identifier] !== void 0) {
            throw new Error(`Tried to add a new query with identifier ${identifier} when it already exists.`);
        }
        const watch = this.createWatch(query, args, journal);
        const unsubscribe = watch.onUpdate(()=>this.notifyListeners());
        this.queries[identifier] = {
            query,
            args,
            watch,
            unsubscribe
        };
    }
    removeQuery(identifier) {
        const info = this.queries[identifier];
        if (info === void 0) {
            throw new Error(`No query found with identifier ${identifier}.`);
        }
        info.unsubscribe();
        delete this.queries[identifier];
    }
    notifyListeners() {
        for (const listener of this.listeners){
            listener();
        }
    }
} //# sourceMappingURL=queries_observer.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_subscription.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useSubscription": (()=>useSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use strict";
;
function useSubscription({ // (Synchronously) returns the current value of our subscription.
getCurrentValue, // This function is passed an event handler to attach to the subscription.
// It should return an unsubscribe function that removes the handler.
subscribe }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            getCurrentValue,
            subscribe,
            value: getCurrentValue()
        }));
    let valueToReturn = state.value;
    if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
        valueToReturn = getCurrentValue();
        setState({
            getCurrentValue,
            subscribe,
            value: valueToReturn
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let didUnsubscribe = false;
        const checkForUpdates = ()=>{
            if (didUnsubscribe) {
                return;
            }
            setState((prevState)=>{
                if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
                    return prevState;
                }
                const value = getCurrentValue();
                if (prevState.value === value) {
                    return prevState;
                }
                return {
                    ...prevState,
                    value
                };
            });
        };
        const unsubscribe = subscribe(checkForUpdates);
        checkForUpdates();
        return ()=>{
            didUnsubscribe = true;
            unsubscribe();
        };
    }, [
        getCurrentValue,
        subscribe
    ]);
    return valueToReturn;
} //# sourceMappingURL=use_subscription.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_queries.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useQueries": (()=>useQueries),
    "useQueriesHelper": (()=>useQueriesHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$queries_observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/queries_observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_subscription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_subscription.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
function useQueries(queries) {
    const convex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConvex"])();
    if (convex === void 0) {
        throw new Error("Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app");
    }
    const createWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (query, args, journal)=>{
            return convex.watchQuery(query, args, {
                journal
            });
        };
    }, [
        convex
    ]);
    return useQueriesHelper(queries, createWatch);
}
function useQueriesHelper(queries, createWatch) {
    const [observer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$queries_observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueriesObserver"](createWatch));
    if (observer.createWatch !== createWatch) {
        observer.setCreateWatch(createWatch);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>observer.destroy(), [
        observer
    ]);
    const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            getCurrentValue: ()=>{
                return observer.getLocalResults(queries);
            },
            subscribe: (callback)=>{
                observer.setQueries(queries);
                return observer.subscribe(callback);
            }
        }), [
        observer,
        queries
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_subscription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubscription"])(subscription);
} //# sourceMappingURL=use_queries.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_paginated_query.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "optimisticallyUpdateValueInPaginatedQuery": (()=>optimisticallyUpdateValueInPaginatedQuery),
    "resetPaginationId": (()=>resetPaginationId),
    "usePaginatedQuery": (()=>usePaginatedQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_queries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_queries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
;
const splitQuery = (key, splitCursor, continueCursor)=>(prevState)=>{
        const queries = {
            ...prevState.queries
        };
        const splitKey1 = prevState.nextPageKey;
        const splitKey2 = prevState.nextPageKey + 1;
        const nextPageKey = prevState.nextPageKey + 2;
        queries[splitKey1] = {
            query: prevState.query,
            args: {
                ...prevState.args,
                paginationOpts: {
                    ...prevState.queries[key].args.paginationOpts,
                    endCursor: splitCursor
                }
            }
        };
        queries[splitKey2] = {
            query: prevState.query,
            args: {
                ...prevState.args,
                paginationOpts: {
                    ...prevState.queries[key].args.paginationOpts,
                    cursor: splitCursor,
                    endCursor: continueCursor
                }
            }
        };
        const ongoingSplits = {
            ...prevState.ongoingSplits
        };
        ongoingSplits[key] = [
            splitKey1,
            splitKey2
        ];
        return {
            ...prevState,
            nextPageKey,
            queries,
            ongoingSplits
        };
    };
const completeSplitQuery = (key)=>(prevState)=>{
        const completedSplit = prevState.ongoingSplits[key];
        if (completedSplit === void 0) {
            return prevState;
        }
        const queries = {
            ...prevState.queries
        };
        delete queries[key];
        const ongoingSplits = {
            ...prevState.ongoingSplits
        };
        delete ongoingSplits[key];
        let pageKeys = prevState.pageKeys.slice();
        const pageIndex = prevState.pageKeys.findIndex((v)=>v === key);
        if (pageIndex >= 0) {
            pageKeys = [
                ...prevState.pageKeys.slice(0, pageIndex),
                ...completedSplit,
                ...prevState.pageKeys.slice(pageIndex + 1)
            ];
        }
        return {
            ...prevState,
            queries,
            pageKeys,
            ongoingSplits
        };
    };
function usePaginatedQuery(query, args, options) {
    if (typeof options?.initialNumItems !== "number" || options.initialNumItems < 0) {
        throw new Error(`\`options.initialNumItems\` must be a positive number. Received \`${options?.initialNumItems}\`.`);
    }
    const skip = args === "skip";
    const argsObject = skip ? {} : args;
    const queryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query);
    const createInitialState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return ()=>{
            const id = nextPaginationId();
            return {
                query,
                args: argsObject,
                id,
                nextPageKey: 1,
                pageKeys: skip ? [] : [
                    0
                ],
                queries: skip ? {} : {
                    0: {
                        query,
                        args: {
                            ...argsObject,
                            paginationOpts: {
                                numItems: options.initialNumItems,
                                cursor: null,
                                id
                            }
                        }
                    }
                },
                ongoingSplits: {},
                skip
            };
        };
    }, [
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(argsObject)),
        queryName,
        options.initialNumItems,
        skip
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(createInitialState);
    let currState = state;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(query) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(state.query) || JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(argsObject)) !== JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(state.args)) || skip !== state.skip) {
        currState = createInitialState();
        setState(currState);
    }
    const convexClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConvex"])();
    const logger = convexClient.logger;
    const resultsObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_queries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueries"])(currState.queries);
    const [results, maybeLastResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let currResult = void 0;
        const allItems = [];
        for (const pageKey of currState.pageKeys){
            currResult = resultsObject[pageKey];
            if (currResult === void 0) {
                break;
            }
            if (currResult instanceof Error) {
                if (currResult.message.includes("InvalidCursor")) {
                    logger.warn("usePaginatedQuery hit error, resetting pagination state: " + currResult.message);
                    setState(createInitialState);
                    return [
                        [],
                        void 0
                    ];
                } else {
                    throw currResult;
                }
            }
            const ongoingSplit = currState.ongoingSplits[pageKey];
            if (ongoingSplit !== void 0) {
                if (resultsObject[ongoingSplit[0]] !== void 0 && resultsObject[ongoingSplit[1]] !== void 0) {
                    setState(completeSplitQuery(pageKey));
                }
            } else if (currResult.splitCursor && (currResult.pageStatus === "SplitRecommended" || currResult.pageStatus === "SplitRequired" || currResult.page.length > options.initialNumItems * 2)) {
                setState(splitQuery(pageKey, currResult.splitCursor, currResult.continueCursor));
            }
            if (currResult.pageStatus === "SplitRequired") {
                return [
                    allItems,
                    void 0
                ];
            }
            allItems.push(...currResult.page);
        }
        return [
            allItems,
            currResult
        ];
    }, [
        resultsObject,
        currState.pageKeys,
        currState.ongoingSplits,
        options.initialNumItems,
        createInitialState,
        logger
    ]);
    const statusObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (maybeLastResult === void 0) {
            if (currState.nextPageKey === 1) {
                return {
                    status: "LoadingFirstPage",
                    isLoading: true,
                    loadMore: (_numItems)=>{}
                };
            } else {
                return {
                    status: "LoadingMore",
                    isLoading: true,
                    loadMore: (_numItems)=>{}
                };
            }
        }
        if (maybeLastResult.isDone) {
            return {
                status: "Exhausted",
                isLoading: false,
                loadMore: (_numItems)=>{}
            };
        }
        const continueCursor = maybeLastResult.continueCursor;
        let alreadyLoadingMore = false;
        return {
            status: "CanLoadMore",
            isLoading: false,
            loadMore: (numItems)=>{
                if (!alreadyLoadingMore) {
                    alreadyLoadingMore = true;
                    setState((prevState)=>{
                        const pageKeys = [
                            ...prevState.pageKeys,
                            prevState.nextPageKey
                        ];
                        const queries = {
                            ...prevState.queries
                        };
                        queries[prevState.nextPageKey] = {
                            query: prevState.query,
                            args: {
                                ...prevState.args,
                                paginationOpts: {
                                    numItems,
                                    cursor: continueCursor,
                                    id: prevState.id
                                }
                            }
                        };
                        return {
                            ...prevState,
                            nextPageKey: prevState.nextPageKey + 1,
                            pageKeys,
                            queries
                        };
                    });
                }
            }
        };
    }, [
        maybeLastResult,
        currState.nextPageKey
    ]);
    return {
        results,
        ...statusObject
    };
}
let paginationId = 0;
function nextPaginationId() {
    paginationId++;
    return paginationId;
}
function resetPaginationId() {
    paginationId = 0;
}
function optimisticallyUpdateValueInPaginatedQuery(localStore, query, args, updateValue) {
    const expectedArgs = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(args));
    for (const queryResult of localStore.getAllQueries(query)){
        if (queryResult.value !== void 0) {
            const { paginationOpts: _, ...innerArgs } = queryResult.args;
            if (JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(innerArgs)) === expectedArgs) {
                const value = queryResult.value;
                if (typeof value === "object" && value !== null && Array.isArray(value.page)) {
                    localStore.setQuery(query, queryResult.args, {
                        ...value,
                        page: value.page.map(updateValue)
                    });
                }
            }
        }
    }
} //# sourceMappingURL=use_paginated_query.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/ConvexAuthState.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexProviderWithAuth": (()=>ConvexProviderWithAuth),
    "useConvexAuth": (()=>useConvexAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
"use strict";
;
;
const ConvexAuthContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useConvexAuth() {
    const authContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConvexAuthContext);
    if (authContext === void 0) {
        throw new Error("Could not find `ConvexProviderWithAuth` (or `ConvexProviderWithClerk` or `ConvexProviderWithAuth0`) as an ancestor component. This component may be missing, or you might have two instances of the `convex/react` module loaded in your project.");
    }
    return authContext;
}
function ConvexProviderWithAuth({ children, client, useAuth }) {
    const { isLoading, isAuthenticated, fetchAccessToken } = useAuth();
    const [isConvexAuthenticated, setIsConvexAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (isLoading && isConvexAuthenticated !== null) {
        setIsConvexAuthenticated(null);
    }
    if (!isLoading && !isAuthenticated && isConvexAuthenticated !== false) {
        setIsConvexAuthenticated(false);
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ConvexAuthContext.Provider, {
        value: {
            isLoading: isConvexAuthenticated === null,
            isAuthenticated: isAuthenticated && (isConvexAuthenticated ?? false)
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ConvexAuthStateFirstEffect, {
        isAuthenticated,
        fetchAccessToken,
        isLoading,
        client,
        setIsConvexAuthenticated
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexProvider"], {
        client
    }, children), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ConvexAuthStateLastEffect, {
        isAuthenticated,
        fetchAccessToken,
        isLoading,
        client
    }));
}
function ConvexAuthStateFirstEffect({ isAuthenticated, fetchAccessToken, isLoading, client, setIsConvexAuthenticated }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isThisEffectRelevant = true;
        if (isAuthenticated) {
            client.setAuth(fetchAccessToken, (isAuthenticated2)=>{
                if (isThisEffectRelevant) {
                    setIsConvexAuthenticated(isAuthenticated2);
                }
            });
            return ()=>{
                isThisEffectRelevant = false;
                setIsConvexAuthenticated((isConvexAuthenticated)=>isConvexAuthenticated ? false : null);
            };
        }
    }, [
        isAuthenticated,
        fetchAccessToken,
        isLoading,
        client,
        setIsConvexAuthenticated
    ]);
    return null;
}
function ConvexAuthStateLastEffect({ isAuthenticated, fetchAccessToken, isLoading, client }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated) {
            return ()=>{
                client.clearAuth();
            };
        }
    }, [
        isAuthenticated,
        fetchAccessToken,
        isLoading,
        client
    ]);
    return null;
} //# sourceMappingURL=ConvexAuthState.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/auth_helpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthLoading": (()=>AuthLoading),
    "Authenticated": (()=>Authenticated),
    "Unauthenticated": (()=>Unauthenticated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/ConvexAuthState.js [app-ssr] (ecmascript)");
"use strict";
;
;
function Authenticated({ children }) {
    const { isLoading, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConvexAuth"])();
    if (isLoading || !isAuthenticated) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function Unauthenticated({ children }) {
    const { isLoading, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConvexAuth"])();
    if (isLoading || isAuthenticated) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function AuthLoading({ children }) {
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConvexAuth"])();
    if (!isLoading) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
} //# sourceMappingURL=auth_helpers.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/hydration.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "usePreloadedQuery": (()=>usePreloadedQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
function usePreloadedQuery(preloadedQuery) {
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(preloadedQuery._argsJSON), [
        preloadedQuery._argsJSON
    ]);
    const preloadedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(preloadedQuery._valueJSON), [
        preloadedQuery._valueJSON
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeFunctionReference"])(preloadedQuery._name), args);
    return result === void 0 ? preloadedResult : result;
} //# sourceMappingURL=hydration.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict";
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_paginated_query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_paginated_query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_queries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_queries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$auth_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/auth_helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/ConvexAuthState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/hydration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$use_subscription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/use_subscription.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react-clerk/ConvexProviderWithClerk.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvexProviderWithClerk": (()=>ConvexProviderWithClerk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react/ConvexAuthState.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
function ConvexProviderWithClerk({ children, client, useAuth }) {
    const useAuthFromClerk = useUseAuthFromClerk(useAuth);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$ConvexAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexProviderWithAuth"], {
        client,
        useAuth: useAuthFromClerk
    }, children);
}
function useUseAuthFromClerk(useAuth) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>function useAuthFromClerk() {
            const { isLoaded, isSignedIn, getToken } = useAuth();
            const fetchAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ({ forceRefreshToken })=>{
                try {
                    return getToken({
                        template: "convex",
                        skipCache: forceRefreshToken
                    });
                } catch  {
                    return null;
                }
            }, // Clerk is not memoizing its getToken function at all
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                    isLoading: !isLoaded,
                    isAuthenticated: isSignedIn ?? false,
                    fetchAccessToken
                }), [
                isLoaded,
                isSignedIn,
                fetchAccessToken
            ]);
        }, [
        useAuth
    ]);
} //# sourceMappingURL=ConvexProviderWithClerk.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react-clerk/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict";
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react-clerk/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2d$clerk$2f$ConvexProviderWithClerk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react-clerk/ConvexProviderWithClerk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2d$clerk$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/react-clerk/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=002f1_convex_dist_esm_1a2c36._.js.map