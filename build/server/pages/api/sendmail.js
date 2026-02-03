"use strict";
(() => {
var exports = {};
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 3896:
/***/ ((module) => {

module.exports = import("lru-cache");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 2885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ mailValidationSchema)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: external "lucide-react"
const external_lucide_react_namespaceObject = require("lucide-react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utility/classNames.ts
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

;// CONCATENATED MODULE: ./src/components/utility/custom-input.tsx



const custom_input_CustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("input", {
        ref: ref,
        ...props,
        className: classNames("w-full rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent", className)
    });
});
custom_input_CustomInput.displayName = "CustomInput";
/* harmony default export */ const custom_input = ((/* unused pure expression or super */ null && (custom_input_CustomInput)));

;// CONCATENATED MODULE: ./src/components/utility/custom-textarea.tsx



const custom_textarea_CustomTextarea = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("textarea", {
        ref: ref,
        ...props,
        className: classNames("w-full rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent", className)
    });
});
custom_textarea_CustomTextarea.displayName = "CustomTextarea";
/* harmony default export */ const custom_textarea = ((/* unused pure expression or super */ null && (custom_textarea_CustomTextarea)));

;// CONCATENATED MODULE: ./src/components/contact-form/contact-form.tsx






const mailValidationSchema = external_yup_.object({
    email: external_yup_.string().email("Invalid email").required("Email required"),
    name: external_yup_.string().required("Name required"),
    subject: external_yup_.string().required("Subject required"),
    message: external_yup_.string().required("Message required")
});
const FormFieldsData = [
    {
        name: "email",
        label: "Email",
        type: "text",
        fieldType: "text",
        placeholder: "Email"
    },
    {
        name: "name",
        label: "Name",
        type: "text",
        fieldType: "text",
        placeholder: "Name"
    },
    {
        name: "subject",
        label: "Subject",
        type: "text",
        fieldType: "text",
        placeholder: "Subject"
    },
    {
        name: "message",
        label: "Message",
        type: "text",
        fieldType: "textarea",
        placeholder: "Message"
    }
];
const initialFormValues = {
    email: "",
    name: "",
    message: "",
    subject: ""
};
function ContactForm({ isSubmitting , handleSubmit  }) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Formik, {
            initialValues: initialFormValues,
            validationSchema: mailValidationSchema,
            onSubmit: handleSubmit,
            validateOnChange: true,
            children: /*#__PURE__*/ _jsxs(Form, {
                className: "mt-6 flex flex-col gap-3",
                children: [
                    FormFieldsData.map((form)=>/*#__PURE__*/ _jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx("label", {
                                        htmlFor: form.name,
                                        className: "inline font-medium text-background",
                                        children: form.label
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ _jsx(Field, {
                                        name: form.name,
                                        children: ({ field , meta  })=>form.fieldType === "text" ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsx(CustomInput, {
                                                        id: form.name,
                                                        ...field,
                                                        type: form.type,
                                                        placeholder: form.placeholder,
                                                        autoComplete: "off"
                                                    }),
                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                        children: meta.error
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsx(CustomTextarea, {
                                                        id: form.name,
                                                        ...field,
                                                        placeholder: form.placeholder
                                                    }),
                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                        children: meta.error
                                                    })
                                                ]
                                            })
                                    })
                                })
                            ]
                        }, form.name)),
                    /*#__PURE__*/ _jsx("button", {
                        "aria-label": "send email",
                        type: "submit",
                        className: "mt-4 w-full rounded-full bg-background px-4 py-3 text-center text-lg font-semibold text-accent transition-colors duration-150 hover:bg-background/90 disabled:cursor-not-allowed disabled:bg-background/80",
                        disabled: isSubmitting,
                        children: isSubmitting ? /*#__PURE__*/ _jsxs("div", {
                            className: "inline-flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ _jsx(Loader2Icon, {
                                    className: "animate-spin",
                                    size: 16
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    children: "Sending"
                                })
                            ]
                        }) : /*#__PURE__*/ _jsx("span", {
                            children: "Submit"
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 9114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2885);
/* harmony import */ var _utility_rate_limiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3235);
/* harmony import */ var _utility_sendMail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utility_rate_limiter__WEBPACK_IMPORTED_MODULE_2__]);
_utility_rate_limiter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const REQUEST_PER_HOUR = 5;
const RATELIMIT_DURATION = 3600000;
const MAX_USER_PER_SECOND = 100;
/*
  Rate Limiting Strategy:

  WARNING: This rate limiting strategy uses a combination of client IP address and user agent for identification.
  - Pros: Provides a more robust identification mechanism.
  - Cons:
    - This approach fails if we have multiple servers running as the LRU cache is bound to server's local memory which is fine for small apps which do not require to scale
    - Users behind certain proxies or networks might share the same IP address.
    - Determined attackers can still potentially circumvent these measures.
    - Privacy concerns: Collecting IP addresses and user agents may raise privacy considerations.
  
  If either the client's IP address or user agent is missing, a fallback mechanism defaults to using a UUID stored in cookies.
  - Pros: Ensures a default identification mechanism is in place.
  - Cons: UUIDs may not be entirely foolproof and can be manipulated by users.

  Always consider the privacy implications of collecting and using such information. Be transparent with users about the data you collect for rate limiting purposes.
*/ const limiter = (0,_utility_rate_limiter__WEBPACK_IMPORTED_MODULE_2__/* .rateLimiterApi */ .D)({
    interval: RATELIMIT_DURATION,
    uniqueTokenPerInterval: MAX_USER_PER_SECOND,
    getUserId: _utility_rate_limiter__WEBPACK_IMPORTED_MODULE_2__/* .getUserId */ .n
});
const handler = async (req, res)=>{
    try {
        const { method  } = req;
        if (method !== "POST") {
            res.status(405).json({
                status: 405,
                message: `Method not allowed`
            });
            return;
        }
        const body = req.body;
        const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
        if (isRateLimited.status !== 200) return;
        try {
            await _components_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_1__/* .mailValidationSchema.validate */ .i.validate(body, {
                abortEarly: false
            });
        } catch (validationError) {
            if (validationError instanceof yup__WEBPACK_IMPORTED_MODULE_0__.ValidationError) {
                res.status(422).json({
                    status: 422,
                    message: validationError.errors
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: "Internal server error"
                });
            }
            return;
        }
        const { name , email , subject , message  } = body;
        const response = await (0,_utility_sendMail__WEBPACK_IMPORTED_MODULE_3__/* .sendMail */ .Y)(name, email, subject, message);
        res.status(response.status).send(response);
    } catch (error) {
        if (error?.status === 429) {
            res.status(429).json({
                status: 429,
                message: "Rate limit exceeded"
            });
        } else {
            res.status(error.status || 500).json({
                status: error.status || 500,
                message: error.message || "Internal server error"
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ rateLimiterApi),
/* harmony export */   "n": () => (/* binding */ getUserId)
/* harmony export */ });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3896);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lru_cache__WEBPACK_IMPORTED_MODULE_0__, nanoid__WEBPACK_IMPORTED_MODULE_1__]);
([lru_cache__WEBPACK_IMPORTED_MODULE_0__, nanoid__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// This piece of code is exact implementation from Nextjs Canary Example
// https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.ts
// This can cause the server to slow down if the cache is hold for longer time for many users.


const RATE_LIMITER_USER_ID_COOKIE_NAME = "userUuid";
const RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME = "userUuid_expires";
/**
 * Creates a rate limiter API.
 *
 * @param {Object} [options={}] - Configuration options.
 * @param {number} [options.interval=60000] - Duration for the rate limiting window in milliseconds. Default is 60000 ms.
 * @param {number} [options.uniqueTokenPerInterval=50] - Maximum number of unique tokens allowed per interval. Default is 50.
 * @param {Function} [options.getUserId] - Function to extract the user ID from the request.
 * @returns {Object} An object with a `check` method to enforce rate limiting.
 */ function rateLimiterApi(options) {
    const tokenCache = new lru_cache__WEBPACK_IMPORTED_MODULE_0__.LRUCache({
        max: options?.uniqueTokenPerInterval || 50,
        ttl: options?.interval || 60000
    });
    return {
        /**
     * Checks the rate limit for a request.
     *
     * @param {NextApiResponse} res - Nextjs response object.
     * @param {NextApiRequest} req - Nextjs request object.
     * @param {number} limitPerHour - Allowed number of requests (Per hour).
     * @returns {Promise<{status: number, message: string}>} A promise that could `resolve` or `reject` to an object with status and message.
     */ check: (res, req, limitPerHour)=>new Promise((resolve, reject)=>{
                try {
                    const userId = options?.getUserId(req, res);
                    if (!userId) {
                        reject({
                            status: 400,
                            message: "Token missing"
                        });
                        return;
                    }
                    const token = `user:${userId}`;
                    const tokenCount = tokenCache.get(token) || [
                        0
                    ];
                    if (tokenCount[0] === 0) {
                        tokenCache.set(token, tokenCount);
                    }
                    tokenCount[0] += 1;
                    const currentUsage = tokenCount[0];
                    const isRateLimited = currentUsage >= limitPerHour;
                    res.setHeader("X-RateLimit-Limit", limitPerHour);
                    res.setHeader("X-RateLimit-Remaining", isRateLimited ? 0 : limitPerHour - currentUsage);
                    if (isRateLimited) {
                        reject({
                            status: 429,
                            message: "Rate limit exceeded"
                        });
                    } else {
                        resolve({
                            status: 200,
                            message: "Success"
                        });
                    }
                } catch  {
                    reject({
                        status: 500,
                        message: "Internal server error"
                    });
                }
            })
    };
}
const getUserId = (req, res)=>{
    const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    const userAgent = req.headers["user-agent"] || "";
    // If User has an userIp and userAgent return that
    // No need to set cookies as the userIp and userAgent are sufficient to rateLimit
    if (userIp && userAgent) {
        return `${userIp}-${userAgent}`;
    }
    // If userId and expiry date cookie are present and we are unable to get userIp and userAgent of user.
    if (req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME] && req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME]) {
        const expiryDate = new Date(req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME]);
        // If user id have expired set new expiry date cookie
        if (expiryDate <= new Date()) {
            // If expired give user a new Id and expiry date
            // TODO: keep the userUuid same and update only the expiry date + updating the LRU cache
            setTokenExpiryCookie(res);
            return setUserTokenCookie(res);
        }
        return req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME];
    }
    // If no userIp, userAgent and cookies can be found set the cookies
    setTokenExpiryCookie(res);
    return setUserTokenCookie(res);
};
const setUserTokenCookie = (res)=>{
    const userUuidToken = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(20);
    res.setHeader("Set-Cookie", `${RATE_LIMITER_USER_ID_COOKIE_NAME}=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
    return userUuidToken;
};
const setTokenExpiryCookie = (res)=>{
    const newExpirationDate = new Date();
    newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24);
    res.setHeader("Set-Cookie", `${RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME}=${newExpirationDate.toUTCString()}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ sendMail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ./src/utility/sendMail.ts

const sendMail = async function(name, email, subject, message) {
    const user = process.env.NODEMAILER_USER;
    const pass = process.env.NODEMAILER_PASS;
    if (!user && !pass) {
        return new Promise((resolve)=>resolve({
                status: 500,
                message: "Internal server error"
            }));
    }
    const transporter = (0,external_nodemailer_namespaceObject.createTransport)({
        service: "gmail",
        auth: {
            user,
            pass
        }
    });
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_USER,
        subject: "Portfolio: [" + subject + " ]",
        text: `${name}: <${email}>\n${message}`
    };
    return new Promise((resolve)=>{
        transporter.sendMail(mailOptions, (error)=>{
            if (error) {
                resolve({
                    status: 500,
                    message: "Failed to send mail"
                });
            } else {
                resolve({
                    status: 200,
                    message: "Mail send successfully"
                });
            }
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [403], () => (__webpack_exec__(9114)));
module.exports = __webpack_exports__;

})();