(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/a393b_@clerk_backend_dist_f56f29._.js", {

"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/errors.ts
__turbopack_esm__({
    "SignJWTError": (()=>SignJWTError),
    "TokenVerificationError": (()=>TokenVerificationError),
    "TokenVerificationErrorAction": (()=>TokenVerificationErrorAction),
    "TokenVerificationErrorCode": (()=>TokenVerificationErrorCode),
    "TokenVerificationErrorReason": (()=>TokenVerificationErrorReason)
});
var TokenVerificationErrorCode = {
    InvalidSecretKey: "clerk_key_invalid"
};
var TokenVerificationErrorReason = {
    TokenExpired: "token-expired",
    TokenInvalid: "token-invalid",
    TokenInvalidAlgorithm: "token-invalid-algorithm",
    TokenInvalidAuthorizedParties: "token-invalid-authorized-parties",
    TokenInvalidSignature: "token-invalid-signature",
    TokenNotActiveYet: "token-not-active-yet",
    TokenIatInTheFuture: "token-iat-in-the-future",
    TokenVerificationFailed: "token-verification-failed",
    InvalidSecretKey: "secret-key-invalid",
    LocalJWKMissing: "jwk-local-missing",
    RemoteJWKFailedToLoad: "jwk-remote-failed-to-load",
    RemoteJWKInvalid: "jwk-remote-invalid",
    RemoteJWKMissing: "jwk-remote-missing",
    JWKFailedToResolve: "jwk-failed-to-resolve",
    JWKKidMismatch: "jwk-kid-mismatch"
};
var TokenVerificationErrorAction = {
    ContactSupport: "Contact support@clerk.com",
    EnsureClerkJWT: "Make sure that this is a valid Clerk generate JWT.",
    SetClerkJWTKey: "Set the CLERK_JWT_KEY environment variable.",
    SetClerkSecretKey: "Set the CLERK_SECRET_KEY environment variable.",
    EnsureClockSync: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)."
};
var TokenVerificationError = class _TokenVerificationError extends Error {
    constructor({ action, message, reason }){
        super(message);
        Object.setPrototypeOf(this, _TokenVerificationError.prototype);
        this.reason = reason;
        this.message = message;
        this.action = action;
    }
    getFullMessage() {
        return `${[
            this.message,
            this.action
        ].filter((m)=>m).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
    }
};
var SignJWTError = class extends Error {
};
;
 //# sourceMappingURL=chunk-5JS2VYLU.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/runtime/browser/crypto.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "webcrypto": (()=>webcrypto)
});
const webcrypto = crypto;
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-U4E7T7J5.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "assertHeaderAlgorithm": (()=>assertHeaderAlgorithm),
    "assertHeaderType": (()=>assertHeaderType),
    "base64url": (()=>base64url),
    "decodeJwt": (()=>decodeJwt),
    "getCryptoAlgorithm": (()=>getCryptoAlgorithm),
    "hasValidSignature": (()=>hasValidSignature),
    "importKey": (()=>importKey),
    "runtime": (()=>runtime),
    "verifyJwt": (()=>verifyJwt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)");
// src/runtime.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$runtime$2f$browser$2f$crypto$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/runtime/browser/crypto.mjs [middleware] (ecmascript)");
// src/jwt/cryptoKeys.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$isomorphicAtob$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
;
;
var globalFetch = fetch.bind(globalThis);
var runtime = {
    crypto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$runtime$2f$browser$2f$crypto$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["webcrypto"],
    fetch: globalFetch,
    AbortController: globalThis.AbortController,
    Blob: globalThis.Blob,
    FormData: globalThis.FormData,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
};
// src/util/rfc4648.ts
var base64url = {
    parse (string, opts) {
        return parse(string, base64UrlEncoding, opts);
    },
    stringify (data, opts) {
        return stringify(data, base64UrlEncoding, opts);
    }
};
var base64UrlEncoding = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bits: 6
};
function parse(string, encoding, opts = {}) {
    if (!encoding.codes) {
        encoding.codes = {};
        for(let i = 0; i < encoding.chars.length; ++i){
            encoding.codes[encoding.chars[i]] = i;
        }
    }
    if (!opts.loose && string.length * encoding.bits & 7) {
        throw new SyntaxError("Invalid padding");
    }
    let end = string.length;
    while(string[end - 1] === "="){
        --end;
        if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
            throw new SyntaxError("Invalid padding");
        }
    }
    const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = encoding.codes[string[i]];
        if (value === void 0) {
            throw new SyntaxError("Invalid character " + string[i]);
        }
        buffer = buffer << encoding.bits | value;
        bits += encoding.bits;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
    }
    return out;
}
function stringify(data, encoding, opts = {}) {
    const { pad = true } = opts;
    const mask = (1 << encoding.bits) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | 255 & data[i];
        bits += 8;
        while(bits > encoding.bits){
            bits -= encoding.bits;
            out += encoding.chars[mask & buffer >> bits];
        }
    }
    if (bits) {
        out += encoding.chars[mask & buffer << encoding.bits - bits];
    }
    if (pad) {
        while(out.length * encoding.bits & 7){
            out += "=";
        }
    }
    return out;
}
// src/jwt/algorithms.ts
var algToHash = {
    RS256: "SHA-256",
    RS384: "SHA-384",
    RS512: "SHA-512"
};
var RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
var jwksAlgToCryptoAlg = {
    RS256: RSA_ALGORITHM_NAME,
    RS384: RSA_ALGORITHM_NAME,
    RS512: RSA_ALGORITHM_NAME
};
var algs = Object.keys(algToHash);
function getCryptoAlgorithm(algorithmName) {
    const hash = algToHash[algorithmName];
    const name = jwksAlgToCryptoAlg[algorithmName];
    if (!hash || !name) {
        throw new Error(`Unsupported algorithm ${algorithmName}, expected one of ${algs.join(",")}.`);
    }
    return {
        hash: {
            name: algToHash[algorithmName]
        },
        name: jwksAlgToCryptoAlg[algorithmName]
    };
}
// src/jwt/assertions.ts
var isArrayString = (s)=>{
    return Array.isArray(s) && s.length > 0 && s.every((a)=>typeof a === "string");
};
var assertAudienceClaim = (aud, audience)=>{
    const audienceList = [
        audience
    ].flat().filter((a)=>!!a);
    const audList = [
        aud
    ].flat().filter((a)=>!!a);
    const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
    if (!shouldVerifyAudience) {
        return;
    }
    if (typeof aud === "string") {
        if (!audienceList.includes(aud)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    } else if (isArrayString(aud)) {
        if (!aud.some((a)=>audienceList.includes(a))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    }
};
var assertHeaderType = (typ)=>{
    if (typeof typ === "undefined") {
        return;
    }
    if (typ !== "JWT") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalid,
            message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "JWT".`
        });
    }
};
var assertHeaderAlgorithm = (alg)=>{
    if (!algs.includes(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidAlgorithm,
            message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
        });
    }
};
var assertSubClaim = (sub)=>{
    if (typeof sub !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
        });
    }
};
var assertAuthorizedPartiesClaim = (azp, authorizedParties)=>{
    if (!azp || !authorizedParties || authorizedParties.length === 0) {
        return;
    }
    if (!authorizedParties.includes(azp)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidAuthorizedParties,
            message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
        });
    }
};
var assertExpirationClaim = (exp, clockSkewInMs)=>{
    if (typeof exp !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const expiryDate = /* @__PURE__ */ new Date(0);
    expiryDate.setUTCSeconds(exp);
    const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkewInMs;
    if (expired) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired,
            message: `JWT is expired. Expiry date: ${expiryDate.toUTCString()}, Current date: ${currentDate.toUTCString()}.`
        });
    }
};
var assertActivationClaim = (nbf, clockSkewInMs)=>{
    if (typeof nbf === "undefined") {
        return;
    }
    if (typeof nbf !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const notBeforeDate = /* @__PURE__ */ new Date(0);
    notBeforeDate.setUTCSeconds(nbf);
    const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkewInMs;
    if (early) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet,
            message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
    }
};
var assertIssuedAtClaim = (iat, clockSkewInMs)=>{
    if (typeof iat === "undefined") {
        return;
    }
    if (typeof iat !== "number") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const issuedAtDate = /* @__PURE__ */ new Date(0);
    issuedAtDate.setUTCSeconds(iat);
    const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkewInMs;
    if (postIssued) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture,
            message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
    }
};
;
function pemToBuffer(secret) {
    const trimmed = secret.replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "").replace(/\s/g, "");
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isomorphicAtob"])(trimmed);
    const buffer = new ArrayBuffer(decoded.length);
    const bufView = new Uint8Array(buffer);
    for(let i = 0, strLen = decoded.length; i < strLen; i++){
        bufView[i] = decoded.charCodeAt(i);
    }
    return bufView;
}
function importKey(key, algorithm, keyUsage) {
    if (typeof key === "object") {
        return runtime.crypto.subtle.importKey("jwk", key, algorithm, false, [
            keyUsage
        ]);
    }
    const keyData = pemToBuffer(key);
    const format = keyUsage === "sign" ? "pkcs8" : "spki";
    return runtime.crypto.subtle.importKey(format, keyData, algorithm, false, [
        keyUsage
    ]);
}
// src/jwt/verifyJwt.ts
var DEFAULT_CLOCK_SKEW_IN_SECONDS = 5 * 1e3;
async function hasValidSignature(jwt, key) {
    const { header, signature, raw } = jwt;
    const encoder = new TextEncoder();
    const data = encoder.encode([
        raw.header,
        raw.payload
    ].join("."));
    const algorithm = getCryptoAlgorithm(header.alg);
    try {
        const cryptoKey = await importKey(key, algorithm, "verify");
        const verified = await runtime.crypto.subtle.verify(algorithm.name, cryptoKey, signature, data);
        return {
            data: verified
        };
    } catch (error) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
                    message: error?.message
                })
            ]
        };
    }
}
function decodeJwt(token) {
    const tokenParts = (token || "").toString().split(".");
    if (tokenParts.length !== 3) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalid,
                    message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
                })
            ]
        };
    }
    const [rawHeader, rawPayload, rawSignature] = tokenParts;
    const decoder = new TextDecoder();
    const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, {
        loose: true
    })));
    const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, {
        loose: true
    })));
    const signature = base64url.parse(rawSignature, {
        loose: true
    });
    const data = {
        header,
        payload,
        signature,
        raw: {
            header: rawHeader,
            payload: rawPayload,
            signature: rawSignature,
            text: token
        }
    };
    return {
        data
    };
}
async function verifyJwt(token, options) {
    const { audience, authorizedParties, clockSkewInMs, key } = options;
    const clockSkew = clockSkewInMs || DEFAULT_CLOCK_SKEW_IN_SECONDS;
    const { data: decoded, errors } = decodeJwt(token);
    if (errors) {
        return {
            errors
        };
    }
    const { header, payload } = decoded;
    try {
        const { typ, alg } = header;
        assertHeaderType(typ);
        assertHeaderAlgorithm(alg);
        const { azp, sub, aud, iat, exp, nbf } = payload;
        assertSubClaim(sub);
        assertAudienceClaim([
            aud
        ], [
            audience
        ]);
        assertAuthorizedPartiesClaim(azp, authorizedParties);
        assertExpirationClaim(exp, clockSkew);
        assertActivationClaim(nbf, clockSkew);
        assertIssuedAtClaim(iat, clockSkew);
    } catch (err) {
        return {
            errors: [
                err
            ]
        };
    }
    const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
    if (signatureErrors) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].EnsureClerkJWT,
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
                    message: `Error verifying JWT signature. ${signatureErrors[0]}`
                })
            ]
        };
    }
    if (!signatureValid) {
        return {
            errors: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
                    message: "JWT signature is invalid."
                })
            ]
        };
    }
    return {
        data: payload
    };
}
;
 //# sourceMappingURL=chunk-U4E7T7J5.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthStatus": (()=>AuthStatus),
    "constants": (()=>constants),
    "createAuthenticateRequest": (()=>createAuthenticateRequest),
    "createBackendApiClient": (()=>createBackendApiClient),
    "createClerkRequest": (()=>createClerkRequest),
    "debugRequestState": (()=>debugRequestState),
    "errorThrower": (()=>errorThrower),
    "makeAuthObjectSerializable": (()=>makeAuthObjectSerializable),
    "signedInAuthObject": (()=>signedInAuthObject),
    "signedOutAuthObject": (()=>signedOutAuthObject),
    "verifyToken": (()=>verifyToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-U4E7T7J5.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$5$2e$4$2e$4$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/snakecase-keys@5.4.4/node_modules/snakecase-keys/index.js [middleware] (ecmascript)");
// src/tokens/authObjects.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/authorization.mjs [middleware] (ecmascript)");
// src/tokens/clerkRequest.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/cookie@0.7.0/node_modules/cookie/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$4PW5MDZA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-4PW5MDZA.mjs [middleware] (ecmascript)");
// src/tokens/request.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/pathToRegexp.mjs [middleware] (ecmascript)");
;
;
// src/constants.ts
var API_URL = "https://api.clerk.com";
var API_VERSION = "v1";
var USER_AGENT = `${"@clerk/backend"}@${"1.15.6"}`;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
var JWKS_CACHE_TTL_MS = 1e3 * 60 * 60;
var Attributes = {
    AuthToken: "__clerkAuthToken",
    AuthSignature: "__clerkAuthSignature",
    AuthStatus: "__clerkAuthStatus",
    AuthReason: "__clerkAuthReason",
    AuthMessage: "__clerkAuthMessage",
    ClerkUrl: "__clerkUrl"
};
var Cookies = {
    Session: "__session",
    Refresh: "__refresh",
    ClientUat: "__client_uat",
    Handshake: "__clerk_handshake",
    DevBrowser: "__clerk_db_jwt",
    RedirectCount: "__clerk_redirect_count"
};
var QueryParameters = {
    ClerkSynced: "__clerk_synced",
    ClerkRedirectUrl: "__clerk_redirect_url",
    // use the reference to Cookies to indicate that it's the same value
    DevBrowser: Cookies.DevBrowser,
    Handshake: Cookies.Handshake,
    HandshakeHelp: "__clerk_help",
    LegacyDevBrowser: "__dev_session",
    HandshakeReason: "__clerk_hs_reason"
};
var Headers2 = {
    AuthToken: "x-clerk-auth-token",
    AuthSignature: "x-clerk-auth-signature",
    AuthStatus: "x-clerk-auth-status",
    AuthReason: "x-clerk-auth-reason",
    AuthMessage: "x-clerk-auth-message",
    ClerkUrl: "x-clerk-clerk-url",
    EnableDebug: "x-clerk-debug",
    ClerkRequestData: "x-clerk-request-data",
    ClerkRedirectTo: "x-clerk-redirect-to",
    CloudFrontForwardedProto: "cloudfront-forwarded-proto",
    Authorization: "authorization",
    ForwardedPort: "x-forwarded-port",
    ForwardedProto: "x-forwarded-proto",
    ForwardedHost: "x-forwarded-host",
    Accept: "accept",
    Referrer: "referer",
    UserAgent: "user-agent",
    Origin: "origin",
    Host: "host",
    ContentType: "content-type",
    SecFetchDest: "sec-fetch-dest",
    Location: "location",
    CacheControl: "cache-control"
};
var ContentTypes = {
    Json: "application/json"
};
var constants = {
    Attributes,
    Cookies,
    Headers: Headers2,
    ContentTypes,
    QueryParameters
};
// src/api/endpoints/AbstractApi.ts
var AbstractAPI = class {
    constructor(request){
        this.request = request;
    }
    requireId(id) {
        if (!id) {
            throw new Error("A valid resource ID is required.");
        }
    }
};
// src/util/path.ts
var SEPARATOR = "/";
var MULTIPLE_SEPARATOR_REGEX = new RegExp("(?<!:)" + SEPARATOR + "{1,}", "g");
function joinPaths(...args) {
    return args.filter((p)=>p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
// src/api/endpoints/AllowlistIdentifierApi.ts
var basePath = "/allowlist_identifiers";
var AllowlistIdentifierAPI = class extends AbstractAPI {
    async getAllowlistIdentifierList() {
        return this.request({
            method: "GET",
            path: basePath,
            queryParams: {
                paginated: true
            }
        });
    }
    async createAllowlistIdentifier(params) {
        return this.request({
            method: "POST",
            path: basePath,
            bodyParams: params
        });
    }
    async deleteAllowlistIdentifier(allowlistIdentifierId) {
        this.requireId(allowlistIdentifierId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath, allowlistIdentifierId)
        });
    }
};
// src/api/endpoints/ClientApi.ts
var basePath2 = "/clients";
var ClientAPI = class extends AbstractAPI {
    async getClientList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath2,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async getClient(clientId) {
        this.requireId(clientId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath2, clientId)
        });
    }
    verifyClient(token) {
        return this.request({
            method: "POST",
            path: joinPaths(basePath2, "verify"),
            bodyParams: {
                token
            }
        });
    }
};
// src/api/endpoints/DomainApi.ts
var basePath3 = "/domains";
var DomainAPI = class extends AbstractAPI {
    async deleteDomain(id) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath3, id)
        });
    }
};
// src/api/endpoints/EmailAddressApi.ts
var basePath4 = "/email_addresses";
var EmailAddressAPI = class extends AbstractAPI {
    async getEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath4, emailAddressId)
        });
    }
    async createEmailAddress(params) {
        return this.request({
            method: "POST",
            path: basePath4,
            bodyParams: params
        });
    }
    async updateEmailAddress(emailAddressId, params = {}) {
        this.requireId(emailAddressId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath4, emailAddressId),
            bodyParams: params
        });
    }
    async deleteEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath4, emailAddressId)
        });
    }
};
// src/api/endpoints/InvitationApi.ts
var basePath5 = "/invitations";
var InvitationAPI = class extends AbstractAPI {
    async getInvitationList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath5,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async createInvitation(params) {
        return this.request({
            method: "POST",
            path: basePath5,
            bodyParams: params
        });
    }
    async revokeInvitation(invitationId) {
        this.requireId(invitationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath5, invitationId, "revoke")
        });
    }
};
// src/api/endpoints/OrganizationApi.ts
var basePath6 = "/organizations";
var OrganizationAPI = class extends AbstractAPI {
    async getOrganizationList(params) {
        return this.request({
            method: "GET",
            path: basePath6,
            queryParams: params
        });
    }
    async createOrganization(params) {
        return this.request({
            method: "POST",
            path: basePath6,
            bodyParams: params
        });
    }
    async getOrganization(params) {
        const { includeMembersCount } = params;
        const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
        this.requireId(organizationIdOrSlug);
        return this.request({
            method: "GET",
            path: joinPaths(basePath6, organizationIdOrSlug),
            queryParams: {
                includeMembersCount
            }
        });
    }
    async updateOrganization(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath6, organizationId),
            bodyParams: params
        });
    }
    async updateOrganizationLogo(organizationId, params) {
        this.requireId(organizationId);
        const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].FormData();
        formData.append("file", params?.file);
        if (params?.uploaderUserId) {
            formData.append("uploader_user_id", params?.uploaderUserId);
        }
        return this.request({
            method: "PUT",
            path: joinPaths(basePath6, organizationId, "logo"),
            formData
        });
    }
    async deleteOrganizationLogo(organizationId) {
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath6, organizationId, "logo")
        });
    }
    async updateOrganizationMetadata(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath6, organizationId, "metadata"),
            bodyParams: params
        });
    }
    async deleteOrganization(organizationId) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath6, organizationId)
        });
    }
    async getOrganizationMembershipList(params) {
        const { organizationId, limit, offset } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath6, organizationId, "memberships"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async createOrganizationMembership(params) {
        const { organizationId, userId, role } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, organizationId, "memberships"),
            bodyParams: {
                userId,
                role
            }
        });
    }
    async updateOrganizationMembership(params) {
        const { organizationId, userId, role } = params;
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath6, organizationId, "memberships", userId),
            bodyParams: {
                role
            }
        });
    }
    async updateOrganizationMembershipMetadata(params) {
        const { organizationId, userId, publicMetadata, privateMetadata } = params;
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath6, organizationId, "memberships", userId, "metadata"),
            bodyParams: {
                publicMetadata,
                privateMetadata
            }
        });
    }
    async deleteOrganizationMembership(params) {
        const { organizationId, userId } = params;
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath6, organizationId, "memberships", userId)
        });
    }
    async getOrganizationInvitationList(params) {
        const { organizationId, status, limit, offset } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath6, organizationId, "invitations"),
            queryParams: {
                status,
                limit,
                offset
            }
        });
    }
    async createOrganizationInvitation(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, organizationId, "invitations"),
            bodyParams: {
                ...bodyParams
            }
        });
    }
    async getOrganizationInvitation(params) {
        const { organizationId, invitationId } = params;
        this.requireId(organizationId);
        this.requireId(invitationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath6, organizationId, "invitations", invitationId)
        });
    }
    async revokeOrganizationInvitation(params) {
        const { organizationId, invitationId, requestingUserId } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, organizationId, "invitations", invitationId, "revoke"),
            bodyParams: {
                requestingUserId
            }
        });
    }
    async getOrganizationDomainList(params) {
        const { organizationId, limit, offset } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath6, organizationId, "domains"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async createOrganizationDomain(params) {
        const { organizationId, name, enrollmentMode, verified = true } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, organizationId, "domains"),
            bodyParams: {
                name,
                enrollmentMode,
                verified
            }
        });
    }
    async updateOrganizationDomain(params) {
        const { organizationId, domainId, ...bodyParams } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath6, organizationId, "domains", domainId),
            bodyParams
        });
    }
    async deleteOrganizationDomain(params) {
        const { organizationId, domainId } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath6, organizationId, "domains", domainId)
        });
    }
};
// src/api/endpoints/PhoneNumberApi.ts
var basePath7 = "/phone_numbers";
var PhoneNumberAPI = class extends AbstractAPI {
    async getPhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, phoneNumberId)
        });
    }
    async createPhoneNumber(params) {
        return this.request({
            method: "POST",
            path: basePath7,
            bodyParams: params
        });
    }
    async updatePhoneNumber(phoneNumberId, params = {}) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, phoneNumberId),
            bodyParams: params
        });
    }
    async deletePhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, phoneNumberId)
        });
    }
};
// src/api/endpoints/RedirectUrlApi.ts
var basePath8 = "/redirect_urls";
var RedirectUrlAPI = class extends AbstractAPI {
    async getRedirectUrlList() {
        return this.request({
            method: "GET",
            path: basePath8,
            queryParams: {
                paginated: true
            }
        });
    }
    async getRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath8, redirectUrlId)
        });
    }
    async createRedirectUrl(params) {
        return this.request({
            method: "POST",
            path: basePath8,
            bodyParams: params
        });
    }
    async deleteRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath8, redirectUrlId)
        });
    }
};
// src/api/endpoints/SessionApi.ts
var basePath9 = "/sessions";
var SessionAPI = class extends AbstractAPI {
    async getSessionList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath9,
            queryParams: {
                ...params,
                paginated: true
            }
        });
    }
    async getSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath9, sessionId)
        });
    }
    async revokeSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath9, sessionId, "revoke")
        });
    }
    async verifySession(sessionId, token) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath9, sessionId, "verify"),
            bodyParams: {
                token
            }
        });
    }
    async getToken(sessionId, template) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath9, sessionId, "tokens", template || "")
        });
    }
    async refreshSession(sessionId, params) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath9, sessionId, "refresh"),
            bodyParams: params
        });
    }
};
// src/api/endpoints/SignInTokenApi.ts
var basePath10 = "/sign_in_tokens";
var SignInTokenAPI = class extends AbstractAPI {
    async createSignInToken(params) {
        return this.request({
            method: "POST",
            path: basePath10,
            bodyParams: params
        });
    }
    async revokeSignInToken(signInTokenId) {
        this.requireId(signInTokenId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, signInTokenId, "revoke")
        });
    }
};
// src/api/endpoints/UserApi.ts
var basePath11 = "/users";
var UserAPI = class extends AbstractAPI {
    async getUserList(params = {}) {
        const { limit, offset, orderBy, ...userCountParams } = params;
        const [data, totalCount] = await Promise.all([
            this.request({
                method: "GET",
                path: basePath11,
                queryParams: params
            }),
            this.getCount(userCountParams)
        ]);
        return {
            data,
            totalCount
        };
    }
    async getUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath11, userId)
        });
    }
    async createUser(params) {
        return this.request({
            method: "POST",
            path: basePath11,
            bodyParams: params
        });
    }
    async updateUser(userId, params = {}) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath11, userId),
            bodyParams: params
        });
    }
    async updateUserProfileImage(userId, params) {
        this.requireId(userId);
        const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].FormData();
        formData.append("file", params?.file);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "profile_image"),
            formData
        });
    }
    async updateUserMetadata(userId, params) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath11, userId, "metadata"),
            bodyParams: params
        });
    }
    async deleteUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath11, userId)
        });
    }
    async getCount(params = {}) {
        return this.request({
            method: "GET",
            path: joinPaths(basePath11, "count"),
            queryParams: params
        });
    }
    async getUserOauthAccessToken(userId, provider) {
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath11, userId, "oauth_access_tokens", provider),
            queryParams: {
                paginated: true
            }
        });
    }
    async disableUserMFA(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath11, userId, "mfa")
        });
    }
    async getOrganizationMembershipList(params) {
        const { userId, limit, offset } = params;
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath11, userId, "organization_memberships"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async verifyPassword(params) {
        const { userId, password } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "verify_password"),
            bodyParams: {
                password
            }
        });
    }
    async verifyTOTP(params) {
        const { userId, code } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "verify_totp"),
            bodyParams: {
                code
            }
        });
    }
    async banUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "ban")
        });
    }
    async unbanUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "unban")
        });
    }
    async lockUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "lock")
        });
    }
    async unlockUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, userId, "unlock")
        });
    }
    async deleteUserProfileImage(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath11, userId, "profile_image")
        });
    }
};
// src/api/endpoints/SamlConnectionApi.ts
var basePath12 = "/saml_connections";
var SamlConnectionAPI = class extends AbstractAPI {
    async getSamlConnectionList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath12,
            queryParams: params
        });
    }
    async createSamlConnection(params) {
        return this.request({
            method: "POST",
            path: basePath12,
            bodyParams: params
        });
    }
    async getSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath12, samlConnectionId)
        });
    }
    async updateSamlConnection(samlConnectionId, params = {}) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath12, samlConnectionId),
            bodyParams: params
        });
    }
    async deleteSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath12, samlConnectionId)
        });
    }
};
// src/api/endpoints/TestingTokenApi.ts
var basePath13 = "/testing_tokens";
var TestingTokenAPI = class extends AbstractAPI {
    async createTestingToken() {
        return this.request({
            method: "POST",
            path: basePath13
        });
    }
};
;
;
;
;
;
;
;
;
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/backend"
});
var { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
// src/util/optionsAssertions.ts
function assertValidSecretKey(val) {
    if (!val || typeof val !== "string") {
        throw Error("Missing Clerk Secret Key. Go to https://dashboard.clerk.com and get your key for your instance.");
    }
}
function assertValidPublishableKey(val) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parsePublishableKey"])(val, {
        fatal: true
    });
}
// src/api/resources/AllowlistIdentifier.ts
var AllowlistIdentifier = class _AllowlistIdentifier {
    constructor(id, identifier, createdAt, updatedAt, invitationId){
        this.id = id;
        this.identifier = identifier;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.invitationId = invitationId;
    }
    static fromJSON(data) {
        return new _AllowlistIdentifier(data.id, data.identifier, data.created_at, data.updated_at, data.invitation_id);
    }
};
// src/api/resources/Session.ts
var Session = class _Session {
    constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt){
        this.id = id;
        this.clientId = clientId;
        this.userId = userId;
        this.status = status;
        this.lastActiveAt = lastActiveAt;
        this.expireAt = expireAt;
        this.abandonAt = abandonAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _Session(data.id, data.client_id, data.user_id, data.status, data.last_active_at, data.expire_at, data.abandon_at, data.created_at, data.updated_at);
    }
};
// src/api/resources/Client.ts
var Client = class _Client {
    constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, createdAt, updatedAt){
        this.id = id;
        this.sessionIds = sessionIds;
        this.sessions = sessions;
        this.signInId = signInId;
        this.signUpId = signUpId;
        this.lastActiveSessionId = lastActiveSessionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _Client(data.id, data.session_ids, data.sessions.map((x)=>Session.fromJSON(x)), data.sign_in_id, data.sign_up_id, data.last_active_session_id, data.created_at, data.updated_at);
    }
};
// src/api/resources/DeletedObject.ts
var DeletedObject = class _DeletedObject {
    constructor(object, id, slug, deleted){
        this.object = object;
        this.id = id;
        this.slug = slug;
        this.deleted = deleted;
    }
    static fromJSON(data) {
        return new _DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
    }
};
// src/api/resources/Email.ts
var Email = class _Email {
    constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk){
        this.id = id;
        this.fromEmailName = fromEmailName;
        this.emailAddressId = emailAddressId;
        this.toEmailAddress = toEmailAddress;
        this.subject = subject;
        this.body = body;
        this.bodyPlain = bodyPlain;
        this.status = status;
        this.slug = slug;
        this.data = data;
        this.deliveredByClerk = deliveredByClerk;
    }
    static fromJSON(data) {
        return new _Email(data.id, data.from_email_name, data.email_address_id, data.to_email_address, data.subject, data.body, data.body_plain, data.status, data.slug, data.data, data.delivered_by_clerk);
    }
};
// src/api/resources/IdentificationLink.ts
var IdentificationLink = class _IdentificationLink {
    constructor(id, type){
        this.id = id;
        this.type = type;
    }
    static fromJSON(data) {
        return new _IdentificationLink(data.id, data.type);
    }
};
// src/api/resources/Verification.ts
var Verification = class _Verification {
    constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null, message = null){
        this.status = status;
        this.strategy = strategy;
        this.externalVerificationRedirectURL = externalVerificationRedirectURL;
        this.attempts = attempts;
        this.expireAt = expireAt;
        this.nonce = nonce;
        this.message = message;
    }
    static fromJSON(data) {
        return new _Verification(data.status, data.strategy, data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null, data.attempts, data.expire_at, data.nonce);
    }
};
// src/api/resources/EmailAddress.ts
var EmailAddress = class _EmailAddress {
    constructor(id, emailAddress, verification, linkedTo){
        this.id = id;
        this.emailAddress = emailAddress;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new _EmailAddress(data.id, data.email_address, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/ExternalAccount.ts
var ExternalAccount = class _ExternalAccount {
    constructor(id, provider, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, imageUrl, username, publicMetadata = {}, label, verification){
        this.id = id;
        this.provider = provider;
        this.identificationId = identificationId;
        this.externalId = externalId;
        this.approvedScopes = approvedScopes;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.username = username;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new _ExternalAccount(data.id, data.provider, data.identification_id, data.provider_user_id, data.approved_scopes, data.email_address, data.first_name, data.last_name, data.image_url || "", data.username, data.public_metadata, data.label, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/Invitation.ts
var Invitation = class _Invitation {
    constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, url, revoked){
        this.id = id;
        this.emailAddress = emailAddress;
        this.publicMetadata = publicMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.url = url;
        this.revoked = revoked;
    }
    static fromJSON(data) {
        return new _Invitation(data.id, data.email_address, data.public_metadata, data.created_at, data.updated_at, data.status, data.url, data.revoked);
    }
};
// src/api/resources/JSON.ts
var ObjectType = {
    AllowlistIdentifier: "allowlist_identifier",
    Client: "client",
    Email: "email",
    EmailAddress: "email_address",
    ExternalAccount: "external_account",
    FacebookAccount: "facebook_account",
    GoogleAccount: "google_account",
    Invitation: "invitation",
    OauthAccessToken: "oauth_access_token",
    Organization: "organization",
    OrganizationInvitation: "organization_invitation",
    OrganizationMembership: "organization_membership",
    PhoneNumber: "phone_number",
    RedirectUrl: "redirect_url",
    SamlAccount: "saml_account",
    Session: "session",
    SignInAttempt: "sign_in_attempt",
    SignInToken: "sign_in_token",
    SignUpAttempt: "sign_up_attempt",
    SmsMessage: "sms_message",
    User: "user",
    Web3Wallet: "web3_wallet",
    Token: "token",
    TotalCount: "total_count",
    TestingToken: "testing_token",
    Role: "role",
    Permission: "permission"
};
// src/api/resources/OauthAccessToken.ts
var OauthAccessToken = class _OauthAccessToken {
    constructor(externalAccountId, provider, token, publicMetadata = {}, label, scopes, tokenSecret){
        this.externalAccountId = externalAccountId;
        this.provider = provider;
        this.token = token;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.scopes = scopes;
        this.tokenSecret = tokenSecret;
    }
    static fromJSON(data) {
        return new _OauthAccessToken(data.external_account_id, data.provider, data.token, data.public_metadata, data.label || "", data.scopes, data.token_secret);
    }
};
// src/api/resources/Organization.ts
var Organization = class _Organization {
    constructor(id, name, slug, imageUrl, hasImage, createdBy, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled, membersCount){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.maxAllowedMemberships = maxAllowedMemberships;
        this.adminDeleteEnabled = adminDeleteEnabled;
        this.membersCount = membersCount;
    }
    static fromJSON(data) {
        return new _Organization(data.id, data.name, data.slug, data.image_url || "", data.has_image, data.created_by, data.created_at, data.updated_at, data.public_metadata, data.private_metadata, data.max_allowed_memberships, data.admin_delete_enabled, data.members_count);
    }
};
// src/api/resources/OrganizationInvitation.ts
var OrganizationInvitation = class _OrganizationInvitation {
    constructor(id, emailAddress, role, organizationId, createdAt, updatedAt, status, publicMetadata = {}, privateMetadata = {}){
        this.id = id;
        this.emailAddress = emailAddress;
        this.role = role;
        this.organizationId = organizationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
    }
    static fromJSON(data) {
        return new _OrganizationInvitation(data.id, data.email_address, data.role, data.organization_id, data.created_at, data.updated_at, data.status, data.public_metadata, data.private_metadata);
    }
};
// src/api/resources/OrganizationMembership.ts
var OrganizationMembership = class _OrganizationMembership {
    constructor(id, role, permissions, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData){
        this.id = id;
        this.role = role;
        this.permissions = permissions;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.organization = organization;
        this.publicUserData = publicUserData;
    }
    static fromJSON(data) {
        return new _OrganizationMembership(data.id, data.role, data.permissions, data.public_metadata, data.private_metadata, data.created_at, data.updated_at, Organization.fromJSON(data.organization), OrganizationMembershipPublicUserData.fromJSON(data.public_user_data));
    }
};
var OrganizationMembershipPublicUserData = class _OrganizationMembershipPublicUserData {
    constructor(identifier, firstName, lastName, imageUrl, hasImage, userId){
        this.identifier = identifier;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.userId = userId;
    }
    static fromJSON(data) {
        return new _OrganizationMembershipPublicUserData(data.identifier, data.first_name, data.last_name, data.image_url, data.has_image, data.user_id);
    }
};
// src/api/resources/PhoneNumber.ts
var PhoneNumber = class _PhoneNumber {
    constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo){
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.reservedForSecondFactor = reservedForSecondFactor;
        this.defaultSecondFactor = defaultSecondFactor;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new _PhoneNumber(data.id, data.phone_number, data.reserved_for_second_factor, data.default_second_factor, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/RedirectUrl.ts
var RedirectUrl = class _RedirectUrl {
    constructor(id, url, createdAt, updatedAt){
        this.id = id;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SignInTokens.ts
var SignInToken = class _SignInToken {
    constructor(id, userId, token, status, url, createdAt, updatedAt){
        this.id = id;
        this.userId = userId;
        this.token = token;
        this.status = status;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SMSMessage.ts
var SMSMessage = class _SMSMessage {
    constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data){
        this.id = id;
        this.fromPhoneNumber = fromPhoneNumber;
        this.toPhoneNumber = toPhoneNumber;
        this.message = message;
        this.status = status;
        this.phoneNumberId = phoneNumberId;
        this.data = data;
    }
    static fromJSON(data) {
        return new _SMSMessage(data.id, data.from_phone_number, data.to_phone_number, data.message, data.status, data.phone_number_id, data.data);
    }
};
// src/api/resources/Token.ts
var Token = class _Token {
    constructor(jwt){
        this.jwt = jwt;
    }
    static fromJSON(data) {
        return new _Token(data.jwt);
    }
};
// src/api/resources/SamlConnection.ts
var SamlAccountConnection = class _SamlAccountConnection {
    constructor(id, name, domain, active, provider, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt){
        this.id = id;
        this.name = name;
        this.domain = domain;
        this.active = active;
        this.provider = provider;
        this.syncUserAttributes = syncUserAttributes;
        this.allowSubdomains = allowSubdomains;
        this.allowIdpInitiated = allowIdpInitiated;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new _SamlAccountConnection(data.id, data.name, data.domain, data.active, data.provider, data.sync_user_attributes, data.allow_subdomains, data.allow_idp_initiated, data.created_at, data.updated_at);
    }
};
// src/api/resources/SamlAccount.ts
var SamlAccount = class _SamlAccount {
    constructor(id, provider, providerUserId, active, emailAddress, firstName, lastName, verification, samlConnection){
        this.id = id;
        this.provider = provider;
        this.providerUserId = providerUserId;
        this.active = active;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.verification = verification;
        this.samlConnection = samlConnection;
    }
    static fromJSON(data) {
        return new _SamlAccount(data.id, data.provider, data.provider_user_id, data.active, data.email_address, data.first_name, data.last_name, data.verification && Verification.fromJSON(data.verification), data.saml_connection && SamlAccountConnection.fromJSON(data.saml_connection));
    }
};
// src/api/resources/Web3Wallet.ts
var Web3Wallet = class _Web3Wallet {
    constructor(id, web3Wallet, verification){
        this.id = id;
        this.web3Wallet = web3Wallet;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new _Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/User.ts
var User = class _User {
    constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, locked, createdAt, updatedAt, imageUrl, hasImage, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = [], samlAccounts = [], lastActiveAt, createOrganizationEnabled, createOrganizationsLimit = null, deleteSelfEnabled, legalAcceptedAt){
        this.id = id;
        this.passwordEnabled = passwordEnabled;
        this.totpEnabled = totpEnabled;
        this.backupCodeEnabled = backupCodeEnabled;
        this.twoFactorEnabled = twoFactorEnabled;
        this.banned = banned;
        this.locked = locked;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.primaryEmailAddressId = primaryEmailAddressId;
        this.primaryPhoneNumberId = primaryPhoneNumberId;
        this.primaryWeb3WalletId = primaryWeb3WalletId;
        this.lastSignInAt = lastSignInAt;
        this.externalId = externalId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.unsafeMetadata = unsafeMetadata;
        this.emailAddresses = emailAddresses;
        this.phoneNumbers = phoneNumbers;
        this.web3Wallets = web3Wallets;
        this.externalAccounts = externalAccounts;
        this.samlAccounts = samlAccounts;
        this.lastActiveAt = lastActiveAt;
        this.createOrganizationEnabled = createOrganizationEnabled;
        this.createOrganizationsLimit = createOrganizationsLimit;
        this.deleteSelfEnabled = deleteSelfEnabled;
        this.legalAcceptedAt = legalAcceptedAt;
    }
    static fromJSON(data) {
        return new _User(data.id, data.password_enabled, data.totp_enabled, data.backup_code_enabled, data.two_factor_enabled, data.banned, data.locked, data.created_at, data.updated_at, data.image_url, data.has_image, data.primary_email_address_id, data.primary_phone_number_id, data.primary_web3_wallet_id, data.last_sign_in_at, data.external_id, data.username, data.first_name, data.last_name, data.public_metadata, data.private_metadata, data.unsafe_metadata, (data.email_addresses || []).map((x)=>EmailAddress.fromJSON(x)), (data.phone_numbers || []).map((x)=>PhoneNumber.fromJSON(x)), (data.web3_wallets || []).map((x)=>Web3Wallet.fromJSON(x)), (data.external_accounts || []).map((x)=>ExternalAccount.fromJSON(x)), (data.saml_accounts || []).map((x)=>SamlAccount.fromJSON(x)), data.last_active_at, data.create_organization_enabled, data.create_organizations_limit, data.delete_self_enabled, data.legal_accepted_at);
    }
    get primaryEmailAddress() {
        return this.emailAddresses.find(({ id })=>id === this.primaryEmailAddressId) ?? null;
    }
    get primaryPhoneNumber() {
        return this.phoneNumbers.find(({ id })=>id === this.primaryPhoneNumberId) ?? null;
    }
    get primaryWeb3Wallet() {
        return this.web3Wallets.find(({ id })=>id === this.primaryWeb3WalletId) ?? null;
    }
    get fullName() {
        return [
            this.firstName,
            this.lastName
        ].join(" ").trim() || null;
    }
};
// src/api/resources/Deserializer.ts
function deserialize(payload) {
    let data, totalCount;
    if (Array.isArray(payload)) {
        const data2 = payload.map((item)=>jsonToObject(item));
        return {
            data: data2
        };
    } else if (isPaginated(payload)) {
        data = payload.data.map((item)=>jsonToObject(item));
        totalCount = payload.total_count;
        return {
            data,
            totalCount
        };
    } else {
        return {
            data: jsonToObject(payload)
        };
    }
}
function isPaginated(payload) {
    if (!payload || typeof payload !== "object" || !("data" in payload)) {
        return false;
    }
    return Array.isArray(payload.data) && payload.data !== void 0;
}
function getCount(item) {
    return item.total_count;
}
function jsonToObject(item) {
    if (typeof item !== "string" && "object" in item && "deleted" in item) {
        return DeletedObject.fromJSON(item);
    }
    switch(item.object){
        case ObjectType.AllowlistIdentifier:
            return AllowlistIdentifier.fromJSON(item);
        case ObjectType.Client:
            return Client.fromJSON(item);
        case ObjectType.EmailAddress:
            return EmailAddress.fromJSON(item);
        case ObjectType.Email:
            return Email.fromJSON(item);
        case ObjectType.Invitation:
            return Invitation.fromJSON(item);
        case ObjectType.OauthAccessToken:
            return OauthAccessToken.fromJSON(item);
        case ObjectType.Organization:
            return Organization.fromJSON(item);
        case ObjectType.OrganizationInvitation:
            return OrganizationInvitation.fromJSON(item);
        case ObjectType.OrganizationMembership:
            return OrganizationMembership.fromJSON(item);
        case ObjectType.PhoneNumber:
            return PhoneNumber.fromJSON(item);
        case ObjectType.RedirectUrl:
            return RedirectUrl.fromJSON(item);
        case ObjectType.SignInToken:
            return SignInToken.fromJSON(item);
        case ObjectType.Session:
            return Session.fromJSON(item);
        case ObjectType.SmsMessage:
            return SMSMessage.fromJSON(item);
        case ObjectType.Token:
            return Token.fromJSON(item);
        case ObjectType.TotalCount:
            return getCount(item);
        case ObjectType.User:
            return User.fromJSON(item);
        default:
            return item;
    }
}
// src/api/request.ts
function buildRequest(options) {
    const requestFn = async (requestOptions)=>{
        const { secretKey, apiUrl = API_URL, apiVersion = API_VERSION, userAgent = USER_AGENT } = options;
        const { path, method, queryParams, headerParams, bodyParams, formData } = requestOptions;
        assertValidSecretKey(secretKey);
        const url = joinPaths(apiUrl, apiVersion, path);
        const finalUrl = new URL(url);
        if (queryParams) {
            const snakecasedQueryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$5$2e$4$2e$4$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
                ...queryParams
            });
            for (const [key, val] of Object.entries(snakecasedQueryParams)){
                if (val) {
                    [
                        val
                    ].flat().forEach((v)=>finalUrl.searchParams.append(key, v));
                }
            }
        }
        const headers = {
            Authorization: `Bearer ${secretKey}`,
            "User-Agent": userAgent,
            ...headerParams
        };
        let res;
        try {
            if (formData) {
                res = await (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].fetch)(finalUrl.href, {
                    method,
                    headers,
                    body: formData
                });
            } else {
                headers["Content-Type"] = "application/json";
                const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
                const body = hasBody ? {
                    body: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$5$2e$4$2e$4$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(bodyParams, {
                        deep: false
                    }))
                } : null;
                res = await (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].fetch)(finalUrl.href, {
                    method,
                    headers,
                    ...body
                });
            }
            const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
            const responseBody = await (isJSONResponse ? res.json() : res.text());
            if (!res.ok) {
                return {
                    data: null,
                    errors: parseErrors(responseBody),
                    status: res?.status,
                    statusText: res?.statusText,
                    clerkTraceId: getTraceId(responseBody, res?.headers)
                };
            }
            return {
                ...deserialize(responseBody),
                errors: null
            };
        } catch (err) {
            if (err instanceof Error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: "unexpected_error",
                            message: err.message || "Unexpected error"
                        }
                    ],
                    clerkTraceId: getTraceId(err, res?.headers)
                };
            }
            return {
                data: null,
                errors: parseErrors(err),
                status: res?.status,
                statusText: res?.statusText,
                clerkTraceId: getTraceId(err, res?.headers)
            };
        }
    };
    return withLegacyRequestReturn(requestFn);
}
function getTraceId(data, headers) {
    if (data && typeof data === "object" && "clerk_trace_id" in data && typeof data.clerk_trace_id === "string") {
        return data.clerk_trace_id;
    }
    const cfRay = headers?.get("cf-ray");
    return cfRay || "";
}
function parseErrors(data) {
    if (!!data && typeof data === "object" && "errors" in data) {
        const errors = data.errors;
        return errors.length > 0 ? errors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parseError"]) : [];
    }
    return [];
}
function withLegacyRequestReturn(cb) {
    return async (...args)=>{
        const { data, errors, totalCount, status, statusText, clerkTraceId } = await cb(...args);
        if (errors) {
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["ClerkAPIResponseError"](statusText || "", {
                data: [],
                status,
                clerkTraceId
            });
            error.errors = errors;
            throw error;
        }
        if (typeof totalCount !== "undefined") {
            return {
                data,
                totalCount
            };
        }
        return data;
    };
}
// src/api/factory.ts
function createBackendApiClient(options) {
    const request = buildRequest(options);
    return {
        allowlistIdentifiers: new AllowlistIdentifierAPI(request),
        clients: new ClientAPI(request),
        emailAddresses: new EmailAddressAPI(request),
        invitations: new InvitationAPI(request),
        organizations: new OrganizationAPI(request),
        phoneNumbers: new PhoneNumberAPI(request),
        redirectUrls: new RedirectUrlAPI(request),
        sessions: new SessionAPI(request),
        signInTokens: new SignInTokenAPI(request),
        users: new UserAPI(request),
        domains: new DomainAPI(request),
        samlConnections: new SamlConnectionAPI(request),
        testingTokens: new TestingTokenAPI(request)
    };
}
;
var createDebug = (data)=>{
    return ()=>{
        const res = {
            ...data
        };
        res.secretKey = (res.secretKey || "").substring(0, 7);
        res.jwtKey = (res.jwtKey || "").substring(0, 7);
        return {
            ...res
        };
    };
};
function signedInAuthObject(authenticateContext, sessionToken, sessionClaims) {
    const { act: actor, sid: sessionId, org_id: orgId, org_role: orgRole, org_slug: orgSlug, org_permissions: orgPermissions, sub: userId, fva } = sessionClaims;
    const apiClient = createBackendApiClient(authenticateContext);
    const getToken = createGetToken({
        sessionId,
        sessionToken,
        fetcher: async (...args)=>(await apiClient.sessions.getToken(...args)).jwt
    });
    const __experimental_factorVerificationAge = fva ?? null;
    return {
        actor,
        sessionClaims,
        sessionId,
        userId,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        __experimental_factorVerificationAge,
        getToken,
        has: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createCheckAuthorization"])({
            orgId,
            orgRole,
            orgPermissions,
            userId,
            __experimental_factorVerificationAge
        }),
        debug: createDebug({
            ...authenticateContext,
            sessionToken
        })
    };
}
function signedOutAuthObject(debugData) {
    return {
        sessionClaims: null,
        sessionId: null,
        userId: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        orgPermissions: null,
        __experimental_factorVerificationAge: null,
        getToken: ()=>Promise.resolve(null),
        has: ()=>false,
        debug: createDebug(debugData)
    };
}
var makeAuthObjectSerializable = (obj)=>{
    const { debug, getToken, has, ...rest } = obj;
    return rest;
};
var createGetToken = (params)=>{
    const { fetcher, sessionToken, sessionId } = params || {};
    return async (options = {})=>{
        if (!sessionId) {
            return null;
        }
        if (options.template) {
            return fetcher(sessionId, options.template);
        }
        return sessionToken;
    };
};
// src/tokens/authStatus.ts
var AuthStatus = {
    SignedIn: "signed-in",
    SignedOut: "signed-out",
    Handshake: "handshake"
};
var AuthErrorReason = {
    ClientUATWithoutSessionToken: "client-uat-but-no-session-token",
    DevBrowserMissing: "dev-browser-missing",
    DevBrowserSync: "dev-browser-sync",
    PrimaryRespondsToSyncing: "primary-responds-to-syncing",
    SatelliteCookieNeedsSyncing: "satellite-needs-syncing",
    SessionTokenAndUATMissing: "session-token-and-uat-missing",
    SessionTokenMissing: "session-token-missing",
    SessionTokenExpired: "session-token-expired",
    SessionTokenIATBeforeClientUAT: "session-token-iat-before-client-uat",
    SessionTokenNBF: "session-token-nbf",
    SessionTokenIatInTheFuture: "session-token-iat-in-the-future",
    SessionTokenWithoutClientUAT: "session-token-but-no-client-uat",
    ActiveOrganizationMismatch: "active-organization-mismatch",
    UnexpectedError: "unexpected-error"
};
function signedIn(authenticateContext, sessionClaims, headers = new Headers(), token) {
    const authObject = signedInAuthObject(authenticateContext, token, sessionClaims);
    return {
        status: AuthStatus.SignedIn,
        reason: null,
        message: null,
        proxyUrl: authenticateContext.proxyUrl || "",
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: true,
        toAuth: ()=>authObject,
        headers,
        token
    };
}
function signedOut(authenticateContext, reason, message = "", headers = new Headers()) {
    return withDebugHeaders({
        status: AuthStatus.SignedOut,
        reason,
        message,
        proxyUrl: authenticateContext.proxyUrl || "",
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: false,
        headers,
        toAuth: ()=>signedOutAuthObject({
                ...authenticateContext,
                status: AuthStatus.SignedOut,
                reason,
                message
            }),
        token: null
    });
}
function handshake(authenticateContext, reason, message = "", headers) {
    return withDebugHeaders({
        status: AuthStatus.Handshake,
        reason,
        message,
        publishableKey: authenticateContext.publishableKey || "",
        isSatellite: authenticateContext.isSatellite || false,
        domain: authenticateContext.domain || "",
        proxyUrl: authenticateContext.proxyUrl || "",
        signInUrl: authenticateContext.signInUrl || "",
        signUpUrl: authenticateContext.signUpUrl || "",
        afterSignInUrl: authenticateContext.afterSignInUrl || "",
        afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
        isSignedIn: false,
        headers,
        toAuth: ()=>null,
        token: null
    });
}
var withDebugHeaders = (requestState)=>{
    const headers = new Headers(requestState.headers || {});
    if (requestState.message) {
        try {
            headers.set(constants.Headers.AuthMessage, requestState.message);
        } catch (e) {}
    }
    if (requestState.reason) {
        try {
            headers.set(constants.Headers.AuthReason, requestState.reason);
        } catch (e) {}
    }
    if (requestState.status) {
        try {
            headers.set(constants.Headers.AuthStatus, requestState.status);
        } catch (e) {}
    }
    requestState.headers = headers;
    return requestState;
};
;
// src/tokens/clerkUrl.ts
var ClerkUrl = class extends URL {
    isCrossOrigin(other) {
        return this.origin !== new URL(other.toString()).origin;
    }
};
var createClerkUrl = (...args)=>{
    return new ClerkUrl(...args);
};
// src/tokens/clerkRequest.ts
var ClerkRequest = class extends Request {
    constructor(input, init){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        super(url, init || typeof input === "string" ? void 0 : input);
        this.clerkUrl = this.deriveUrlFromHeaders(this);
        this.cookies = this.parseCookies(this);
    }
    toJSON() {
        return {
            url: this.clerkUrl.href,
            method: this.method,
            headers: JSON.stringify(Object.fromEntries(this.headers)),
            clerkUrl: this.clerkUrl.toString(),
            cookies: JSON.stringify(Object.fromEntries(this.cookies))
        };
    }
    /**
   * Used to fix request.url using the x-forwarded-* headers
   * TODO add detailed description of the issues this solves
   */ deriveUrlFromHeaders(req) {
        const initialUrl = new URL(req.url);
        const forwardedProto = req.headers.get(constants.Headers.ForwardedProto);
        const forwardedHost = req.headers.get(constants.Headers.ForwardedHost);
        const host = req.headers.get(constants.Headers.Host);
        const protocol = initialUrl.protocol;
        const resolvedHost = this.getFirstValueFromHeader(forwardedHost) ?? host;
        const resolvedProtocol = this.getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
        const origin = resolvedHost && resolvedProtocol ? `${resolvedProtocol}://${resolvedHost}` : initialUrl.origin;
        if (origin === initialUrl.origin) {
            return createClerkUrl(initialUrl);
        }
        return createClerkUrl(initialUrl.pathname + initialUrl.search, origin);
    }
    getFirstValueFromHeader(value) {
        return value?.split(",")[0];
    }
    parseCookies(req) {
        const cookiesRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parse"])(this.decodeCookieValue(req.headers.get("cookie") || ""));
        return new Map(Object.entries(cookiesRecord));
    }
    decodeCookieValue(str) {
        return str ? str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : str;
    }
};
var createClerkRequest = (...args)=>{
    return args[0] instanceof ClerkRequest ? args[0] : new ClerkRequest(...args);
};
// src/tokens/keys.ts
var cache = {};
var lastUpdatedAt = 0;
function getFromCache(kid) {
    return cache[kid];
}
function getCacheValues() {
    return Object.values(cache);
}
function setInCache(jwk, shouldExpire = true) {
    cache[jwk.kid] = jwk;
    lastUpdatedAt = shouldExpire ? Date.now() : -1;
}
var LocalJwkKid = "local";
var PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
var PEM_TRAILER = "-----END PUBLIC KEY-----";
var RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
var RSA_SUFFIX = "IDAQAB";
function loadClerkJWKFromLocal(localKey) {
    if (!getFromCache(LocalJwkKid)) {
        if (!localKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
                message: "Missing local JWK.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].LocalJWKMissing
            });
        }
        const modulus = localKey.replace(/(\r\n|\n|\r)/gm, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
        setInCache({
            kid: "local",
            kty: "RSA",
            alg: "RS256",
            n: modulus,
            e: "AQAB"
        }, false);
    }
    return getFromCache(LocalJwkKid);
}
async function loadClerkJWKFromRemote({ secretKey, apiUrl = API_URL, apiVersion = API_VERSION, kid, skipJwksCache }) {
    if (skipJwksCache || cacheHasExpired() || !getFromCache(kid)) {
        if (!secretKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: "Failed to load JWKS from Clerk Backend or Frontend API.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
            });
        }
        const fetcher = ()=>fetchJWKSFromBAPI(apiUrl, secretKey, apiVersion);
        const { keys } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$4PW5MDZA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["callWithRetry"])(fetcher);
        if (!keys || !keys.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
                reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
            });
        }
        keys.forEach((key)=>setInCache(key));
    }
    const jwk = getFromCache(kid);
    if (!jwk) {
        const cacheValues = getCacheValues();
        const jwkKeys = cacheValues.map((jwk2)=>jwk2.kid).sort().join(", ");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: `Go to your Dashboard and validate your secret and public keys are correct. ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport} if the issue persists.`,
            message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT. The following kid is available: ${jwkKeys}`,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKKidMismatch
        });
    }
    return jwk;
}
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
    if (!key) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkSecretKey,
            message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
        });
    }
    const url = new URL(apiUrl);
    url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
    const response = await (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].fetch)(url.href, {
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        const json = await response.json();
        const invalidSecretKeyError = getErrorObjectByCode(json?.errors, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorCode"].InvalidSecretKey);
        if (invalidSecretKeyError) {
            const reason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].InvalidSecretKey;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
                message: invalidSecretKeyError.message,
                reason
            });
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].ContactSupport,
            message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].RemoteJWKFailedToLoad
        });
    }
    return response.json();
}
function cacheHasExpired() {
    if (lastUpdatedAt === -1) {
        return false;
    }
    const isExpired = Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
    if (isExpired) {
        cache = {};
    }
    return isExpired;
}
var getErrorObjectByCode = (errors, code)=>{
    if (!errors) {
        return null;
    }
    return errors.find((err)=>err.code === code);
};
// src/tokens/verify.ts
async function verifyToken(token, options) {
    const { data: decodedResult, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        return {
            errors
        };
    }
    const { header } = decodedResult;
    const { kid } = header;
    try {
        let key;
        if (options.jwtKey) {
            key = loadClerkJWKFromLocal(options.jwtKey);
        } else if (options.secretKey) {
            key = await loadClerkJWKFromRemote({
                ...options,
                kid
            });
        } else {
            return {
                errors: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
                        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
                        message: "Failed to resolve JWK during verification.",
                        reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKFailedToResolve
                    })
                ]
            };
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["verifyJwt"])(token, {
            ...options,
            key
        });
    } catch (error) {
        return {
            errors: [
                error
            ]
        };
    }
}
;
// src/tokens/authenticateContext.ts
var AuthenticateContext = class {
    constructor(cookieSuffix, clerkRequest, options){
        this.cookieSuffix = cookieSuffix;
        this.clerkRequest = clerkRequest;
        this.initPublishableKeyValues(options);
        this.initHeaderValues();
        this.initCookieValues();
        this.initHandshakeValues();
        Object.assign(this, options);
        this.clerkUrl = this.clerkRequest.clerkUrl;
    }
    get sessionToken() {
        return this.sessionTokenInCookie || this.sessionTokenInHeader;
    }
    initPublishableKeyValues(options) {
        assertValidPublishableKey(options.publishableKey);
        this.publishableKey = options.publishableKey;
        const pk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parsePublishableKey"])(this.publishableKey, {
            fatal: true,
            proxyUrl: options.proxyUrl,
            domain: options.domain
        });
        this.instanceType = pk.instanceType;
        this.frontendApi = pk.frontendApi;
    }
    initHeaderValues() {
        this.sessionTokenInHeader = this.stripAuthorizationHeader(this.getHeader(constants.Headers.Authorization));
        this.origin = this.getHeader(constants.Headers.Origin);
        this.host = this.getHeader(constants.Headers.Host);
        this.forwardedHost = this.getHeader(constants.Headers.ForwardedHost);
        this.forwardedProto = this.getHeader(constants.Headers.CloudFrontForwardedProto) || this.getHeader(constants.Headers.ForwardedProto);
        this.referrer = this.getHeader(constants.Headers.Referrer);
        this.userAgent = this.getHeader(constants.Headers.UserAgent);
        this.secFetchDest = this.getHeader(constants.Headers.SecFetchDest);
        this.accept = this.getHeader(constants.Headers.Accept);
    }
    initCookieValues() {
        this.suffixedCookies = this.shouldUseSuffixed();
        this.sessionTokenInCookie = this.getSuffixedOrUnSuffixedCookie(constants.Cookies.Session);
        this.refreshTokenInCookie = this.getSuffixedCookie(constants.Cookies.Refresh);
        this.clientUat = Number.parseInt(this.getSuffixedOrUnSuffixedCookie(constants.Cookies.ClientUat) || "") || 0;
    }
    initHandshakeValues() {
        this.devBrowserToken = this.getQueryParam(constants.QueryParameters.DevBrowser) || this.getSuffixedOrUnSuffixedCookie(constants.Cookies.DevBrowser);
        this.handshakeToken = this.getQueryParam(constants.QueryParameters.Handshake) || this.getCookie(constants.Cookies.Handshake);
        this.handshakeRedirectLoopCounter = Number(this.getCookie(constants.Cookies.RedirectCount)) || 0;
    }
    stripAuthorizationHeader(authValue) {
        return authValue?.replace("Bearer ", "");
    }
    getQueryParam(name) {
        return this.clerkRequest.clerkUrl.searchParams.get(name);
    }
    getHeader(name) {
        return this.clerkRequest.headers.get(name) || void 0;
    }
    getCookie(name) {
        return this.clerkRequest.cookies.get(name) || void 0;
    }
    getSuffixedCookie(name) {
        return this.getCookie((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getSuffixedCookieName"])(name, this.cookieSuffix)) || void 0;
    }
    getSuffixedOrUnSuffixedCookie(cookieName) {
        if (this.suffixedCookies) {
            return this.getSuffixedCookie(cookieName);
        }
        return this.getCookie(cookieName);
    }
    shouldUseSuffixed() {
        const suffixedClientUat = this.getSuffixedCookie(constants.Cookies.ClientUat);
        const clientUat = this.getCookie(constants.Cookies.ClientUat);
        const suffixedSession = this.getSuffixedCookie(constants.Cookies.Session) || "";
        const session = this.getCookie(constants.Cookies.Session) || "";
        if (session && !this.tokenHasIssuer(session)) {
            return false;
        }
        if (session && !this.tokenBelongsToInstance(session)) {
            return true;
        }
        if (!suffixedClientUat && !suffixedSession) {
            return false;
        }
        const { data: sessionData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(session);
        const sessionIat = sessionData?.payload.iat || 0;
        const { data: suffixedSessionData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(suffixedSession);
        const suffixedSessionIat = suffixedSessionData?.payload.iat || 0;
        if (suffixedClientUat !== "0" && clientUat !== "0" && sessionIat > suffixedSessionIat) {
            return false;
        }
        if (suffixedClientUat === "0" && clientUat !== "0") {
            return false;
        }
        if (this.instanceType !== "production") {
            const isSuffixedSessionExpired = this.sessionExpired(suffixedSessionData);
            if (suffixedClientUat !== "0" && clientUat === "0" && isSuffixedSessionExpired) {
                return false;
            }
        }
        if (!suffixedClientUat && suffixedSession) {
            return false;
        }
        return true;
    }
    tokenHasIssuer(token) {
        const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
        if (errors) {
            return false;
        }
        return !!data.payload.iss;
    }
    tokenBelongsToInstance(token) {
        if (!token) {
            return false;
        }
        const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
        if (errors) {
            return false;
        }
        const tokenIssuer = data.payload.iss.replace(/https?:\/\//gi, "");
        return this.frontendApi === tokenIssuer;
    }
    sessionExpired(jwt) {
        return !!jwt && jwt?.payload.exp <= Date.now() / 1e3 >> 0;
    }
};
var createAuthenticateContext = async (clerkRequest, options)=>{
    const cookieSuffix = options.publishableKey ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getCookieSuffix"])(options.publishableKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["runtime"].crypto.subtle) : "";
    return new AuthenticateContext(cookieSuffix, clerkRequest, options);
};
// src/tokens/cookie.ts
var getCookieName = (cookieDirective)=>{
    return cookieDirective.split(";")[0]?.split("=")[0];
};
var getCookieValue = (cookieDirective)=>{
    return cookieDirective.split(";")[0]?.split("=")[1];
};
// src/tokens/handshake.ts
async function verifyHandshakeJwt(token, { key }) {
    const { data: decoded, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        throw errors[0];
    }
    const { header, payload } = decoded;
    const { typ, alg } = header;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["assertHeaderType"])(typ);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["assertHeaderAlgorithm"])(alg);
    const { data: signatureValid, errors: signatureErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["hasValidSignature"])(decoded, key);
    if (signatureErrors) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenVerificationFailed,
            message: `Error verifying handshake token. ${signatureErrors[0]}`
        });
    }
    if (!signatureValid) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature,
            message: "Handshake signature is invalid."
        });
    }
    return payload;
}
async function verifyHandshakeToken(token, options) {
    const { secretKey, apiUrl, apiVersion, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
    const { data, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
    if (errors) {
        throw errors[0];
    }
    const { kid } = data.header;
    let key;
    if (jwtKey) {
        key = loadClerkJWKFromLocal(jwtKey);
    } else if (secretKey) {
        key = await loadClerkJWKFromRemote({
            secretKey,
            apiUrl,
            apiVersion,
            kid,
            jwksCacheTtlInMs,
            skipJwksCache
        });
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"]({
            action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorAction"].SetClerkJWTKey,
            message: "Failed to resolve JWK during handshake verification.",
            reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].JWKFailedToResolve
        });
    }
    return await verifyHandshakeJwt(token, {
        key
    });
}
// src/tokens/request.ts
var RefreshTokenErrorReason = {
    NonEligibleNoCookie: "non-eligible-no-refresh-cookie",
    NonEligibleNonGet: "non-eligible-non-get",
    InvalidSessionToken: "invalid-session-token",
    MissingApiClient: "missing-api-client",
    MissingSessionToken: "missing-session-token",
    MissingRefreshToken: "missing-refresh-token",
    ExpiredSessionTokenDecodeFailed: "expired-session-token-decode-failed",
    ExpiredSessionTokenMissingSidClaim: "expired-session-token-missing-sid-claim",
    FetchError: "fetch-error",
    UnexpectedSDKError: "unexpected-sdk-error",
    UnexpectedBAPIError: "unexpected-bapi-error"
};
function assertSignInUrlExists(signInUrl, key) {
    if (!signInUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isDevelopmentFromSecretKey"])(key)) {
        throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
    }
}
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
    if (!proxyUrlOrDomain) {
        throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
    }
}
function assertSignInUrlFormatAndOrigin(_signInUrl, origin) {
    let signInUrl;
    try {
        signInUrl = new URL(_signInUrl);
    } catch  {
        throw new Error(`The signInUrl needs to have a absolute url format.`);
    }
    if (signInUrl.origin === origin) {
        throw new Error(`The signInUrl needs to be on a different origin than your satellite application.`);
    }
}
function isRequestEligibleForHandshake(authenticateContext) {
    const { accept, secFetchDest } = authenticateContext;
    if (secFetchDest === "document" || secFetchDest === "iframe") {
        return true;
    }
    if (!secFetchDest && accept?.startsWith("text/html")) {
        return true;
    }
    return false;
}
function isRequestEligibleForRefresh(err, authenticateContext, request) {
    return err.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired && !!authenticateContext.refreshTokenInCookie && request.method === "GET";
}
async function authenticateRequest(request, options) {
    const authenticateContext = await createAuthenticateContext(createClerkRequest(request), options);
    assertValidSecretKey(authenticateContext.secretKey);
    if (authenticateContext.isSatellite) {
        assertSignInUrlExists(authenticateContext.signInUrl, authenticateContext.secretKey);
        if (authenticateContext.signInUrl && authenticateContext.origin) {
            assertSignInUrlFormatAndOrigin(authenticateContext.signInUrl, authenticateContext.origin);
        }
        assertProxyUrlOrDomain(authenticateContext.proxyUrl || authenticateContext.domain);
    }
    const organizationSyncTargetMatchers = computeOrganizationSyncTargetMatchers(options.organizationSyncOptions);
    function removeDevBrowserFromURL(url) {
        const updatedURL = new URL(url);
        updatedURL.searchParams.delete(constants.QueryParameters.DevBrowser);
        updatedURL.searchParams.delete(constants.QueryParameters.LegacyDevBrowser);
        return updatedURL;
    }
    function buildRedirectToHandshake({ handshakeReason }) {
        const redirectUrl = removeDevBrowserFromURL(authenticateContext.clerkUrl);
        const frontendApiNoProtocol = authenticateContext.frontendApi.replace(/http(s)?:\/\//, "");
        const url = new URL(`https://${frontendApiNoProtocol}/v1/client/handshake`);
        url.searchParams.append("redirect_url", redirectUrl?.href || "");
        url.searchParams.append("suffixed_cookies", authenticateContext.suffixedCookies.toString());
        url.searchParams.append(constants.QueryParameters.HandshakeReason, handshakeReason);
        if (authenticateContext.instanceType === "development" && authenticateContext.devBrowserToken) {
            url.searchParams.append(constants.QueryParameters.DevBrowser, authenticateContext.devBrowserToken);
        }
        const toActivate = getOrganizationSyncTarget(authenticateContext.clerkUrl, options.organizationSyncOptions, organizationSyncTargetMatchers);
        if (toActivate) {
            const params = getOrganizationSyncQueryParams(toActivate);
            params.forEach((value, key)=>{
                url.searchParams.append(key, value);
            });
        }
        return new Headers({
            [constants.Headers.Location]: url.href
        });
    }
    async function resolveHandshake() {
        const headers = new Headers({
            "Access-Control-Allow-Origin": "null",
            "Access-Control-Allow-Credentials": "true"
        });
        const handshakePayload = await verifyHandshakeToken(authenticateContext.handshakeToken, authenticateContext);
        const cookiesToSet = handshakePayload.handshake;
        let sessionToken = "";
        cookiesToSet.forEach((x)=>{
            headers.append("Set-Cookie", x);
            if (getCookieName(x).startsWith(constants.Cookies.Session)) {
                sessionToken = getCookieValue(x);
            }
        });
        if (authenticateContext.instanceType === "development") {
            const newUrl = new URL(authenticateContext.clerkUrl);
            newUrl.searchParams.delete(constants.QueryParameters.Handshake);
            newUrl.searchParams.delete(constants.QueryParameters.HandshakeHelp);
            headers.append(constants.Headers.Location, newUrl.toString());
            headers.set(constants.Headers.CacheControl, "no-store");
        }
        if (sessionToken === "") {
            return signedOut(authenticateContext, AuthErrorReason.SessionTokenMissing, "", headers);
        }
        const { data, errors: [error] = [] } = await verifyToken(sessionToken, authenticateContext);
        if (data) {
            return signedIn(authenticateContext, data, headers, sessionToken);
        }
        if (authenticateContext.instanceType === "development" && (error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired || error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet || error?.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture)) {
            error.tokenCarrier = "cookie";
            console.error(`Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will attempt to account for the clock skew in development.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${error.getFullMessage()}`);
            const { data: retryResult, errors: [retryError] = [] } = await verifyToken(sessionToken, {
                ...authenticateContext,
                clockSkewInMs: 864e5
            });
            if (retryResult) {
                return signedIn(authenticateContext, retryResult, headers, sessionToken);
            }
            throw retryError;
        }
        throw error;
    }
    async function refreshToken(authenticateContext2) {
        if (!options.apiClient) {
            return {
                data: null,
                error: {
                    message: "An apiClient is needed to perform token refresh.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingApiClient
                    }
                }
            };
        }
        const { sessionToken: expiredSessionToken, refreshTokenInCookie: refreshToken2 } = authenticateContext2;
        if (!expiredSessionToken) {
            return {
                data: null,
                error: {
                    message: "Session token must be provided.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingSessionToken
                    }
                }
            };
        }
        if (!refreshToken2) {
            return {
                data: null,
                error: {
                    message: "Refresh token must be provided.",
                    cause: {
                        reason: RefreshTokenErrorReason.MissingRefreshToken
                    }
                }
            };
        }
        const { data: decodeResult, errors: decodedErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(expiredSessionToken);
        if (!decodeResult || decodedErrors) {
            return {
                data: null,
                error: {
                    message: "Unable to decode the expired session token.",
                    cause: {
                        reason: RefreshTokenErrorReason.ExpiredSessionTokenDecodeFailed,
                        errors: decodedErrors
                    }
                }
            };
        }
        if (!decodeResult?.payload?.sid) {
            return {
                data: null,
                error: {
                    message: "Expired session token is missing the `sid` claim.",
                    cause: {
                        reason: RefreshTokenErrorReason.ExpiredSessionTokenMissingSidClaim
                    }
                }
            };
        }
        try {
            const tokenResponse = await options.apiClient.sessions.refreshSession(decodeResult.payload.sid, {
                expired_token: expiredSessionToken || "",
                refresh_token: refreshToken2 || "",
                request_origin: authenticateContext2.clerkUrl.origin,
                // The refresh endpoint expects headers as Record<string, string[]>, so we need to transform it.
                request_headers: Object.fromEntries(Array.from(request.headers.entries()).map(([k, v])=>[
                        k,
                        [
                            v
                        ]
                    ]))
            });
            return {
                data: tokenResponse.jwt,
                error: null
            };
        } catch (err) {
            if (err?.errors?.length) {
                if (err.errors[0].code === "unexpected_error") {
                    return {
                        data: null,
                        error: {
                            message: `Fetch unexpected error`,
                            cause: {
                                reason: RefreshTokenErrorReason.FetchError,
                                errors: err.errors
                            }
                        }
                    };
                }
                return {
                    data: null,
                    error: {
                        message: err.errors[0].code,
                        cause: {
                            reason: err.errors[0].code,
                            errors: err.errors
                        }
                    }
                };
            } else {
                return {
                    data: null,
                    error: {
                        message: `Unexpected Server/BAPI error`,
                        cause: {
                            reason: RefreshTokenErrorReason.UnexpectedBAPIError,
                            errors: [
                                err
                            ]
                        }
                    }
                };
            }
        }
    }
    async function attemptRefresh(authenticateContext2) {
        const { data: sessionToken, error } = await refreshToken(authenticateContext2);
        if (!sessionToken) {
            return {
                data: null,
                error
            };
        }
        const { data: jwtPayload, errors } = await verifyToken(sessionToken, authenticateContext2);
        if (errors) {
            return {
                data: null,
                error: {
                    message: `Clerk: unable to verify refreshed session token.`,
                    cause: {
                        reason: RefreshTokenErrorReason.InvalidSessionToken,
                        errors
                    }
                }
            };
        }
        return {
            data: {
                jwtPayload,
                sessionToken
            },
            error: null
        };
    }
    function handleMaybeHandshakeStatus(authenticateContext2, reason, message, headers) {
        if (isRequestEligibleForHandshake(authenticateContext2)) {
            const handshakeHeaders = headers ?? buildRedirectToHandshake({
                handshakeReason: reason
            });
            if (handshakeHeaders.get(constants.Headers.Location)) {
                handshakeHeaders.set(constants.Headers.CacheControl, "no-store");
            }
            const isRedirectLoop = setHandshakeInfiniteRedirectionLoopHeaders(handshakeHeaders);
            if (isRedirectLoop) {
                const msg = `Clerk: Refreshing the session token resulted in an infinite redirect loop. This usually means that your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard.`;
                console.log(msg);
                return signedOut(authenticateContext2, reason, message);
            }
            return handshake(authenticateContext2, reason, message, handshakeHeaders);
        }
        return signedOut(authenticateContext2, reason, message);
    }
    function handleMaybeOrganizationSyncHandshake(authenticateContext2, auth) {
        const organizationSyncTarget = getOrganizationSyncTarget(authenticateContext2.clerkUrl, options.organizationSyncOptions, organizationSyncTargetMatchers);
        if (!organizationSyncTarget) {
            return null;
        }
        let mustActivate = false;
        if (organizationSyncTarget.type === "organization") {
            if (organizationSyncTarget.organizationSlug && organizationSyncTarget.organizationSlug !== auth.orgSlug) {
                mustActivate = true;
            }
            if (organizationSyncTarget.organizationId && organizationSyncTarget.organizationId !== auth.orgId) {
                mustActivate = true;
            }
        }
        if (organizationSyncTarget.type === "personalAccount" && auth.orgId) {
            mustActivate = true;
        }
        if (!mustActivate) {
            return null;
        }
        if (authenticateContext2.handshakeRedirectLoopCounter > 0) {
            console.warn("Clerk: Organization activation handshake loop detected. This is likely due to an invalid organization ID or slug. Skipping organization activation.");
            return null;
        }
        const handshakeState = handleMaybeHandshakeStatus(authenticateContext2, AuthErrorReason.ActiveOrganizationMismatch, "");
        if (handshakeState.status !== "handshake") {
            return null;
        }
        return handshakeState;
    }
    async function authenticateRequestWithTokenInHeader() {
        const { sessionTokenInHeader } = authenticateContext;
        try {
            const { data, errors } = await verifyToken(sessionTokenInHeader, authenticateContext);
            if (errors) {
                throw errors[0];
            }
            return signedIn(authenticateContext, data, void 0, sessionTokenInHeader);
        } catch (err) {
            return handleError(err, "header");
        }
    }
    function setHandshakeInfiniteRedirectionLoopHeaders(headers) {
        if (authenticateContext.handshakeRedirectLoopCounter === 3) {
            return true;
        }
        const newCounterValue = authenticateContext.handshakeRedirectLoopCounter + 1;
        const cookieName = constants.Cookies.RedirectCount;
        headers.append("Set-Cookie", `${cookieName}=${newCounterValue}; SameSite=Lax; HttpOnly; Max-Age=3`);
        return false;
    }
    function handleHandshakeTokenVerificationErrorInDevelopment(error) {
        if (error.reason === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenInvalidSignature) {
            const msg = `Clerk: Handshake token verification failed due to an invalid signature. If you have switched Clerk keys locally, clear your cookies and try again.`;
            throw new Error(msg);
        }
        throw new Error(`Clerk: Handshake token verification failed: ${error.getFullMessage()}.`);
    }
    async function authenticateRequestWithTokenInCookie() {
        const hasActiveClient = authenticateContext.clientUat;
        const hasSessionToken = !!authenticateContext.sessionTokenInCookie;
        const hasDevBrowserToken = !!authenticateContext.devBrowserToken;
        const isRequestEligibleForMultiDomainSync = authenticateContext.isSatellite && authenticateContext.secFetchDest === "document" && !authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.ClerkSynced);
        if (authenticateContext.handshakeToken) {
            try {
                return await resolveHandshake();
            } catch (error) {
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"] && authenticateContext.instanceType === "development") {
                    handleHandshakeTokenVerificationErrorInDevelopment(error);
                } else {
                    console.error("Clerk: unable to resolve handshake:", error);
                }
            }
        }
        if (authenticateContext.instanceType === "development" && authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.DevBrowser)) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserSync, "");
        }
        if (authenticateContext.instanceType === "production" && isRequestEligibleForMultiDomainSync) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "");
        }
        if (authenticateContext.instanceType === "development" && isRequestEligibleForMultiDomainSync) {
            const redirectURL = new URL(authenticateContext.signInUrl);
            redirectURL.searchParams.append(constants.QueryParameters.ClerkRedirectUrl, authenticateContext.clerkUrl.toString());
            const authErrReason = AuthErrorReason.SatelliteCookieNeedsSyncing;
            redirectURL.searchParams.append(constants.QueryParameters.HandshakeReason, authErrReason);
            const headers = new Headers({
                [constants.Headers.Location]: redirectURL.toString()
            });
            return handleMaybeHandshakeStatus(authenticateContext, authErrReason, "", headers);
        }
        const redirectUrl = new URL(authenticateContext.clerkUrl).searchParams.get(constants.QueryParameters.ClerkRedirectUrl);
        if (authenticateContext.instanceType === "development" && !authenticateContext.isSatellite && redirectUrl) {
            const redirectBackToSatelliteUrl = new URL(redirectUrl);
            if (authenticateContext.devBrowserToken) {
                redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.DevBrowser, authenticateContext.devBrowserToken);
            }
            redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.ClerkSynced, "true");
            const authErrReason = AuthErrorReason.PrimaryRespondsToSyncing;
            redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.HandshakeReason, authErrReason);
            const headers = new Headers({
                [constants.Headers.Location]: redirectBackToSatelliteUrl.toString()
            });
            return handleMaybeHandshakeStatus(authenticateContext, authErrReason, "", headers);
        }
        if (authenticateContext.instanceType === "development" && !hasDevBrowserToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserMissing, "");
        }
        if (!hasActiveClient && !hasSessionToken) {
            return signedOut(authenticateContext, AuthErrorReason.SessionTokenAndUATMissing, "");
        }
        if (!hasActiveClient && hasSessionToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenWithoutClientUAT, "");
        }
        if (hasActiveClient && !hasSessionToken) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.ClientUATWithoutSessionToken, "");
        }
        const { data: decodeResult, errors: decodedErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["decodeJwt"])(authenticateContext.sessionTokenInCookie);
        if (decodedErrors) {
            return handleError(decodedErrors[0], "cookie");
        }
        if (decodeResult.payload.iat < authenticateContext.clientUat) {
            return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenIATBeforeClientUAT, "");
        }
        try {
            const { data, errors } = await verifyToken(authenticateContext.sessionTokenInCookie, authenticateContext);
            if (errors) {
                throw errors[0];
            }
            const signedInRequestState = signedIn(authenticateContext, data, void 0, authenticateContext.sessionTokenInCookie);
            const handshakeRequestState = handleMaybeOrganizationSyncHandshake(authenticateContext, signedInRequestState.toAuth());
            if (handshakeRequestState) {
                return handshakeRequestState;
            }
            return signedInRequestState;
        } catch (err) {
            return handleError(err, "cookie");
        }
        return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
    }
    async function handleError(err, tokenCarrier) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationError"])) {
            return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
        }
        let refreshError;
        if (isRequestEligibleForRefresh(err, authenticateContext, request)) {
            const { data, error } = await attemptRefresh(authenticateContext);
            if (data) {
                return signedIn(authenticateContext, data.jwtPayload, void 0, data.sessionToken);
            }
            if (error?.cause?.reason) {
                refreshError = error.cause.reason;
            } else {
                refreshError = RefreshTokenErrorReason.UnexpectedSDKError;
            }
        } else {
            if (request.method !== "GET") {
                refreshError = RefreshTokenErrorReason.NonEligibleNonGet;
            } else if (!authenticateContext.refreshTokenInCookie) {
                refreshError = RefreshTokenErrorReason.NonEligibleNoCookie;
            } else {
                refreshError = null;
            }
        }
        err.tokenCarrier = tokenCarrier;
        const reasonToHandshake = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture
        ].includes(err.reason);
        if (reasonToHandshake) {
            return handleMaybeHandshakeStatus(authenticateContext, convertTokenVerificationErrorReasonToAuthErrorReason({
                tokenError: err.reason,
                refreshError
            }), err.getFullMessage());
        }
        return signedOut(authenticateContext, err.reason, err.getFullMessage());
    }
    if (authenticateContext.sessionTokenInHeader) {
        return authenticateRequestWithTokenInHeader();
    }
    return authenticateRequestWithTokenInCookie();
}
var debugRequestState = (params)=>{
    const { isSignedIn, proxyUrl, reason, message, publishableKey, isSatellite, domain } = params;
    return {
        isSignedIn,
        proxyUrl,
        reason,
        message,
        publishableKey,
        isSatellite,
        domain
    };
};
function computeOrganizationSyncTargetMatchers(options) {
    let personalAccountMatcher = null;
    if (options?.personalAccountPatterns) {
        try {
            personalAccountMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["match"])(options.personalAccountPatterns);
        } catch (e) {
            throw new Error(`Invalid personal account pattern "${options.personalAccountPatterns}": "${e}"`);
        }
    }
    let organizationMatcher = null;
    if (options?.organizationPatterns) {
        try {
            organizationMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["match"])(options.organizationPatterns);
        } catch (e) {
            throw new Error(`Clerk: Invalid organization pattern "${options.organizationPatterns}": "${e}"`);
        }
    }
    return {
        OrganizationMatcher: organizationMatcher,
        PersonalAccountMatcher: personalAccountMatcher
    };
}
function getOrganizationSyncTarget(url, options, matchers) {
    if (!options) {
        return null;
    }
    if (matchers.OrganizationMatcher) {
        let orgResult;
        try {
            orgResult = matchers.OrganizationMatcher(url.pathname);
        } catch (e) {
            console.error(`Clerk: Failed to apply organization pattern "${options.organizationPatterns}" to a path`, e);
            return null;
        }
        if (orgResult && "params" in orgResult) {
            const params = orgResult.params;
            if ("id" in params && typeof params.id === "string") {
                return {
                    type: "organization",
                    organizationId: params.id
                };
            }
            if ("slug" in params && typeof params.slug === "string") {
                return {
                    type: "organization",
                    organizationSlug: params.slug
                };
            }
            console.warn("Clerk: Detected an organization pattern match, but no organization ID or slug was found in the URL. Does the pattern include `:id` or `:slug`?");
        }
    }
    if (matchers.PersonalAccountMatcher) {
        let personalResult;
        try {
            personalResult = matchers.PersonalAccountMatcher(url.pathname);
        } catch (e) {
            console.error(`Failed to apply personal account pattern "${options.personalAccountPatterns}" to a path`, e);
            return null;
        }
        if (personalResult) {
            return {
                type: "personalAccount"
            };
        }
    }
    return null;
}
function getOrganizationSyncQueryParams(toActivate) {
    const ret = /* @__PURE__ */ new Map();
    if (toActivate.type === "personalAccount") {
        ret.set("organization_id", "");
    }
    if (toActivate.type === "organization") {
        if (toActivate.organizationId) {
            ret.set("organization_id", toActivate.organizationId);
        }
        if (toActivate.organizationSlug) {
            ret.set("organization_id", toActivate.organizationSlug);
        }
    }
    return ret;
}
var convertTokenVerificationErrorReasonToAuthErrorReason = ({ tokenError, refreshError })=>{
    switch(tokenError){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenExpired:
            return `${AuthErrorReason.SessionTokenExpired}-refresh-${refreshError}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenNotActiveYet:
            return AuthErrorReason.SessionTokenNBF;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TokenVerificationErrorReason"].TokenIatInTheFuture:
            return AuthErrorReason.SessionTokenIatInTheFuture;
        default:
            return AuthErrorReason.UnexpectedError;
    }
};
// src/util/mergePreDefinedOptions.ts
function mergePreDefinedOptions(preDefinedOptions, options) {
    return Object.keys(preDefinedOptions).reduce((obj, key)=>{
        return {
            ...obj,
            [key]: options[key] || obj[key]
        };
    }, {
        ...preDefinedOptions
    });
}
// src/tokens/factory.ts
var defaultOptions = {
    secretKey: "",
    jwtKey: "",
    apiUrl: void 0,
    apiVersion: void 0,
    proxyUrl: "",
    publishableKey: "",
    isSatellite: false,
    domain: "",
    audience: ""
};
function createAuthenticateRequest(params) {
    const buildTimeOptions = mergePreDefinedOptions(defaultOptions, params.options);
    const apiClient = params.apiClient;
    const authenticateRequest2 = (request, options = {})=>{
        const { apiUrl, apiVersion } = buildTimeOptions;
        const runTimeOptions = mergePreDefinedOptions(buildTimeOptions, options);
        return authenticateRequest(request, {
            ...options,
            ...runTimeOptions,
            // We should add all the omitted props from options here (eg apiUrl / apiVersion)
            // to avoid runtime options override them.
            apiUrl,
            apiVersion,
            apiClient
        });
    };
    return {
        authenticateRequest: authenticateRequest2,
        debugRequestState
    };
}
;
 //# sourceMappingURL=chunk-HYKPXULP.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-U4E7T7J5.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$snakecase$2d$keys$40$5$2e$4$2e$4$2f$node_modules$2f$snakecase$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/snakecase-keys@5.4.4/node_modules/snakecase-keys/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/url.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$callWithRetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/callWithRetry.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/deprecated.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/authorization.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/cookie@0.7.0/node_modules/cookie/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$pathToRegexp$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/pathToRegexp.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createRedirect": (()=>createRedirect),
    "decorateObjectWithResources": (()=>decorateObjectWithResources),
    "stripPrivateDataFromObject": (()=>stripPrivateDataFromObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
;
;
;
// src/createRedirect.ts
var buildUrl = (_baseUrl, _targetUrl, _returnBackUrl, _devBrowserToken)=>{
    if (_baseUrl === "") {
        return legacyBuildUrl(_targetUrl.toString(), _returnBackUrl?.toString());
    }
    const baseUrl = new URL(_baseUrl);
    const returnBackUrl = _returnBackUrl ? new URL(_returnBackUrl, baseUrl) : void 0;
    const res = new URL(_targetUrl, baseUrl);
    if (returnBackUrl) {
        res.searchParams.set("redirect_url", returnBackUrl.toString());
    }
    if (_devBrowserToken && baseUrl.hostname !== res.hostname) {
        res.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].QueryParameters.DevBrowser, _devBrowserToken);
    }
    return res.toString();
};
var legacyBuildUrl = (targetUrl, redirectUrl)=>{
    let url;
    if (!targetUrl.startsWith("http")) {
        if (!redirectUrl || !redirectUrl.startsWith("http")) {
            throw new Error("destination url or return back url should be an absolute path url!");
        }
        const baseURL = new URL(redirectUrl);
        url = new URL(targetUrl, baseURL.origin);
    } else {
        url = new URL(targetUrl);
    }
    if (redirectUrl) {
        url.searchParams.set("redirect_url", redirectUrl);
    }
    return url.toString();
};
var buildAccountsBaseUrl = (frontendApi)=>{
    if (!frontendApi) {
        return "";
    }
    const accountsBaseUrl = frontendApi.replace(/(clerk\.accountsstage\.)/, "accountsstage.").replace(/(clerk\.accounts\.|clerk\.)/, "accounts.");
    return `https://${accountsBaseUrl}`;
};
var createRedirect = (params)=>{
    const { publishableKey, redirectAdapter, signInUrl, signUpUrl, baseUrl } = params;
    const parsedPublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey);
    const frontendApi = parsedPublishableKey?.frontendApi;
    const isDevelopment = parsedPublishableKey?.instanceType === "development";
    const accountsBaseUrl = buildAccountsBaseUrl(frontendApi);
    const redirectToSignUp = ({ returnBackUrl } = {})=>{
        if (!signUpUrl && !accountsBaseUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        }
        const accountsSignUpUrl = `${accountsBaseUrl}/sign-up`;
        return redirectAdapter(buildUrl(baseUrl, signUpUrl || accountsSignUpUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
    };
    const redirectToSignIn = ({ returnBackUrl } = {})=>{
        if (!signInUrl && !accountsBaseUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        }
        const accountsSignInUrl = `${accountsBaseUrl}/sign-in`;
        return redirectAdapter(buildUrl(baseUrl, signInUrl || accountsSignInUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
    };
    return {
        redirectToSignUp,
        redirectToSignIn
    };
};
// src/util/decorateObjectWithResources.ts
var decorateObjectWithResources = async (obj, authObj, opts)=>{
    const { loadSession, loadUser, loadOrganization } = opts || {};
    const { userId, sessionId, orgId } = authObj;
    const { sessions, users, organizations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBackendApiClient"])({
        ...opts
    });
    const [sessionResp, userResp, organizationResp] = await Promise.all([
        loadSession && sessionId ? sessions.getSession(sessionId) : Promise.resolve(void 0),
        loadUser && userId ? users.getUser(userId) : Promise.resolve(void 0),
        loadOrganization && orgId ? organizations.getOrganization({
            organizationId: orgId
        }) : Promise.resolve(void 0)
    ]);
    const resources = stripPrivateDataFromObject({
        session: sessionResp,
        user: userResp,
        organization: organizationResp
    });
    return Object.assign(obj, resources);
};
function stripPrivateDataFromObject(authObject) {
    const user = authObject.user ? {
        ...authObject.user
    } : authObject.user;
    const organization = authObject.organization ? {
        ...authObject.organization
    } : authObject.organization;
    prunePrivateMetadata(user);
    prunePrivateMetadata(organization);
    return {
        ...authObject,
        user,
        organization
    };
}
function prunePrivateMetadata(resource) {
    if (resource) {
        delete resource["privateMetadata"];
        delete resource["private_metadata"];
    }
    return resource;
}
;
 //# sourceMappingURL=internal.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-U4E7T7J5.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/jwt/legacyReturn.ts
__turbopack_esm__({
    "withLegacyReturn": (()=>withLegacyReturn),
    "withLegacySyncReturn": (()=>withLegacySyncReturn)
});
function withLegacyReturn(cb) {
    return async (...args)=>{
        const { data, errors } = await cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
function withLegacySyncReturn(cb) {
    return (...args)=>{
        const { data, errors } = cb(...args);
        if (errors) {
            throw errors[0];
        }
        return data;
    };
}
;
 //# sourceMappingURL=chunk-P263NW7Z.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/index.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createClerkClient": (()=>createClerkClient),
    "verifyToken": (()=>verifyToken2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$U4E7T7J5$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-U4E7T7J5.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5JS2VYLU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-5JS2VYLU.mjs [middleware] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <locals>");
;
;
;
;
;
var verifyToken2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$P263NW7Z$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["withLegacyReturn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyToken"]);
function createClerkClient(options) {
    const opts = {
        ...options
    };
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBackendApiClient"])(opts);
    const requestState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthenticateRequest"])({
        options: opts,
        apiClient
    });
    const telemetry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TelemetryCollector"]({
        ...options.telemetry,
        publishableKey: opts.publishableKey,
        secretKey: opts.secretKey,
        ...opts.sdkMetadata ? {
            sdk: opts.sdkMetadata.name,
            sdkVersion: opts.sdkMetadata.version
        } : {}
    });
    return {
        ...apiClient,
        ...requestState,
        telemetry
    };
}
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=a393b_%40clerk_backend_dist_f56f29._.js.map