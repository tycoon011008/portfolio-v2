(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,98];
exports.modules = {

/***/ 3844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_contact_form_floating_mail_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3400);
/* harmony import */ var _components_contact_form_contact_form_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_contact_form_contact_form_modal__WEBPACK_IMPORTED_MODULE_4__]);
_components_contact_form_contact_form_modal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ContactButton() {
    const refSendBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isBtnVisible, setIsBtnVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isOpenModal, setIsOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const observerCallback = (entries)=>{
        const [entry] = entries;
        setIsBtnVisible(!entry.isIntersecting);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const btn = refSendBtn.current;
        const observer = new IntersectionObserver(observerCallback, _components_contact_form_floating_mail_button__WEBPACK_IMPORTED_MODULE_3__/* .floatingMailButtonoptions */ .K);
        if (btn) observer.observe(btn);
        return ()=>{
            if (btn) observer.unobserve(btn);
        };
    }, [
        refSendBtn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isBtnVisible && !isOpenModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form_floating_mail_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                openModal: setIsOpenModal
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                ref: refSendBtn,
                className: "inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background",
                onClick: ()=>setIsOpenModal(true),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__.MailIcon, {
                        className: "h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-base font-semibold sm:text-lg lg:text-xl",
                        children: "Send Message"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form_contact_form_modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                showModal: isOpenModal,
                setShowModal: setIsOpenModal
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactFormModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4688);
/* harmony import */ var _components_contact_form_contact_mail_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3441);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ContactFormModal({ showModal , setShowModal  }) {
    const [isSendingMail, setIsSendingMail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [toastState, setToastState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: null,
        value: false,
        message: ""
    });
    const handleSubmit = async (values)=>{
        setIsSendingMail(true);
        try {
            const response = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                setToastState({
                    type: "success",
                    value: true,
                    message: "Successfully sent email"
                });
                setShowModal(false);
            } else {
                setToastState({
                    type: response.status === 429 ? "warning" : "failure",
                    value: true,
                    message: response.status === 429 ? "Rate Limiter: Only 5 email per hour" : "Oop! Unable to send email"
                });
            }
        } catch  {
            setToastState({
                type: "failure",
                value: true,
                message: "Oop! Unable to send email"
            });
        }
        setIsSendingMail(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                show: showModal,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    as: "div",
                    className: "z-[999999]",
                    onClose: ()=>setShowModal(false),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 bg-zinc-600/30 backdrop-blur-md"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fixed inset-0 z-[9999] flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 top-full",
                                enterTo: "opacity-100 top-16",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 top-16",
                                leaveTo: "opacity-0 top-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                    className: "absolute m-4 w-[95%] max-w-xl overflow-y-auto rounded-2xl border-2 border-accent/20 bg-accent px-6 py-8 shadow-lg shadow-accent/10 md:px-10 md:py-16",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                    className: "flex items-center gap-1 text-2xl font-semibold text-background sm:gap-2 md:text-4xl",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.MailIcon, {
                                                            className: "h-8 w-8 sm:h-10 sm:w-10"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Send Message"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background p-2 text-sm text-accent transition-transform hover:scale-[1.05] hover:bg-background",
                                                    onClick: ()=>setShowModal(false),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.XIcon, {
                                                        className: "h-full w-full text-accent"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            isSubmitting: isSendingMail,
                                            handleSubmit: handleSubmit
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form_contact_mail_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                toastState: toastState,
                showToast: setToastState
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactForm)
});

// UNUSED EXPORTS: mailValidationSchema

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utility/classNames.ts
var classNames = __webpack_require__(309);
;// CONCATENATED MODULE: ./src/components/utility/custom-input.tsx



const CustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("input", {
        ref: ref,
        ...props,
        className: (0,classNames/* classNames */.A)("w-full rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent", className)
    });
});
CustomInput.displayName = "CustomInput";
/* harmony default export */ const custom_input = (CustomInput);

;// CONCATENATED MODULE: ./src/components/utility/custom-textarea.tsx



const CustomTextarea = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("textarea", {
        ref: ref,
        ...props,
        className: (0,classNames/* classNames */.A)("w-full rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent", className)
    });
});
CustomTextarea.displayName = "CustomTextarea";
/* harmony default export */ const custom_textarea = (CustomTextarea);

;// CONCATENATED MODULE: ./src/components/contact-form/contact-form.tsx






const mailValidationSchema = external_yup_namespaceObject.object({
    email: external_yup_namespaceObject.string().email("Invalid email").required("Email required"),
    name: external_yup_namespaceObject.string().required("Name required"),
    subject: external_yup_namespaceObject.string().required("Subject required"),
    message: external_yup_namespaceObject.string().required("Message required")
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
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(external_formik_namespaceObject.Formik, {
            initialValues: initialFormValues,
            validationSchema: mailValidationSchema,
            onSubmit: handleSubmit,
            validateOnChange: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_formik_namespaceObject.Form, {
                className: "mt-6 flex flex-col gap-3",
                children: [
                    FormFieldsData.map((form)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        htmlFor: form.name,
                                        className: "inline font-medium text-background",
                                        children: form.label
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_formik_namespaceObject.Field, {
                                        name: form.name,
                                        children: ({ field , meta  })=>form.fieldType === "text" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(custom_input, {
                                                        id: form.name,
                                                        ...field,
                                                        type: form.type,
                                                        placeholder: form.placeholder,
                                                        autoComplete: "off"
                                                    }),
                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                        children: meta.error
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(custom_textarea, {
                                                        id: form.name,
                                                        ...field,
                                                        placeholder: form.placeholder
                                                    }),
                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                        children: meta.error
                                                    })
                                                ]
                                            })
                                    })
                                })
                            ]
                        }, form.name)),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        "aria-label": "send email",
                        type: "submit",
                        className: "mt-4 w-full rounded-full bg-background px-4 py-3 text-center text-lg font-semibold text-accent transition-colors duration-150 hover:bg-background/90 disabled:cursor-not-allowed disabled:bg-background/80",
                        disabled: isSubmitting,
                        children: isSubmitting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "inline-flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Loader2Icon, {
                                    className: "animate-spin",
                                    size: 16
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Sending"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "Submit"
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 3441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactMailToast)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/components/utility/custom-toast.tsx



function CustomToast({ children , duration =3000 , open , onClose , className  }) {
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            onClose();
        }, duration);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        duration,
        onClose
    ]);
    if (true) {
        return null;
    }
    return /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: className,
        children: children
    }), document.body);
}

// EXTERNAL MODULE: ./src/utility/classNames.ts
var classNames = __webpack_require__(309);
;// CONCATENATED MODULE: ./src/components/contact-form/contact-mail-toast.tsx




function ContactMailToast({ toastState , showToast  }) {
    return toastState.value ? /*#__PURE__*/ jsx_runtime.jsx(CustomToast, {
        open: toastState.value,
        duration: 3000,
        onClose: ()=>showToast((prev)=>({
                    ...prev,
                    value: false
                })),
        className: (0,classNames/* classNames */.A)("fixed right-4 top-6 z-[9999] rounded-lg bg-accent px-4 py-2 font-semibold text-white shadow-xl", toastState.type === "success" ? "bg-teal-500" : toastState.type === "warning" ? "bg-yellow-500" : "bg-red-600"),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex w-full max-w-xs items-center gap-2",
            children: [
                toastState.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.CircleCheckIcon, {
                    className: "h-6 w-6 md:h-8 md:w-8"
                }) : /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.TriangleAlertIcon, {
                    className: "h-6 w-6 md:h-8 md:w-8"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "text-sm md:text-xl",
                    children: toastState.message
                })
            ]
        })
    }) : null;
}


/***/ }),

/***/ 3400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ floatingMailButtonoptions),
/* harmony export */   "Z": () => (/* binding */ FloatingMailButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3329);


const floatingMailButtonoptions = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1
};
function FloatingMailButton({ openModal  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "open send mail modal",
        type: "button",
        className: "fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2 text-background transition-colors duration-150 hover:bg-accent/80 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16",
        onClick: ()=>openModal(true),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .MailIcon */ .bV, {})
    });
}


/***/ }),

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CursorTrailCanvas)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utility/cursor-trail.ts
function cursorTrail(props) {
    const colorRaw = getComputedStyle(document.documentElement).getPropertyValue("--accent");
    const accentColor = `hsla(${colorRaw ? colorRaw.split(" ").join(",") : "0, 0%, 0%"}, 0.35)`;
    const { ref , color  } = props;
    const ctx = ref.current?.getContext("2d");
    let AnimationFeature = {
        friction: 0.5,
        trails: 20,
        size: 40,
        dampening: 0.2,
        tension: 0.98
    };
    let cursorPosition = {
        x: 0,
        y: 0
    };
    let running = true;
    class NewNode {
        constructor(){
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
        }
    }
    class Line {
        constructor(e){
            this.spring = e.spring + 0.1 * Math.random() - 0.05;
            this.friction = AnimationFeature.friction + 0.01 * Math.random() - 0.005;
            const cursorPosition = e.cursorPosition ?? {
                x: 0,
                y: 0
            };
            this.nodes = [];
            for(let i = 0; i < AnimationFeature.size; i++){
                const t = new NewNode();
                t.x = cursorPosition.x;
                t.y = cursorPosition.y;
                this.nodes.push(t);
            }
        }
        update() {
            let e = this.spring;
            let t = this.nodes[0];
            t.vx += (cursorPosition.x - t.x) * e;
            t.vy += (cursorPosition.y - t.y) * e;
            for(let i = 0, a = this.nodes.length; i < a; i++){
                t = this.nodes[i];
                if (i > 0) {
                    const n = this.nodes[i - 1];
                    t.vx += (n.x - t.x) * e;
                    t.vy += (n.y - t.y) * e;
                    t.vx += n.vx * AnimationFeature.dampening;
                    t.vy += n.vy * AnimationFeature.dampening;
                }
                t.vx *= this.friction;
                t.vy *= this.friction;
                t.x += t.vx;
                t.y += t.vy;
                e *= AnimationFeature.tension;
            }
        }
        draw() {
            let e, t;
            let n = this.nodes[0].x;
            let i = this.nodes[0].y;
            ctx.beginPath();
            ctx.moveTo(n, i);
            for(let a = 1, o = this.nodes.length - 2; a < o; a++){
                const e = this.nodes[a];
                const t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[this.nodes.length - 2];
            t = this.nodes[this.nodes.length - 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function renderAnimation() {
        if (running) {
            ctx.globalCompositeOperation = "source-over";
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = "lighter";
            ctx.strokeStyle = color || accentColor;
            ctx.lineWidth = 1;
            for(let x, t = 0; t < AnimationFeature.trails; t++){
                if (newLines[t] !== undefined) {
                    x = newLines[t];
                    x.update();
                    x.draw();
                }
            }
            window.requestAnimationFrame(renderAnimation);
        }
    }
    let newLines = [];
    function move(event) {
        !(event instanceof MouseEvent) ? (cursorPosition.x = event.touches[0].pageX, cursorPosition.y = event.touches[0].pageY) : (cursorPosition.x = event.clientX, cursorPosition.y = event.clientY);
        event.preventDefault();
    }
    function createLine(event) {
        event.touches.length === 1 && (cursorPosition.x = event.touches[0].pageX, cursorPosition.y = event.touches[0].pageY);
    }
    function onMouseMove(e) {
        function populateLines() {
            newLines = [];
            for(let i = 0; i < AnimationFeature.trails; i++){
                newLines.push(new Line({
                    spring: 0.45 + i / AnimationFeature.trails * 0.025
                }));
            }
        }
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchstart", onMouseMove);
        document.addEventListener("mousemove", move);
        document.addEventListener("touchmove", createLine);
        document.addEventListener("touchstart", createLine);
        move(e);
        populateLines();
        renderAnimation();
    }
    function resizeCanvas() {
        ctx.canvas.width = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight;
    }
    function stopAnimation() {
        running = false;
    }
    function startAnimation() {
        if (!running) {
            running = true;
            renderAnimation();
        }
    }
    function renderTrailCursor() {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchstart", onMouseMove);
        window.addEventListener("orientationchange", resizeCanvas);
        window.addEventListener("resize", resizeCanvas);
        // window.addEventListener("scroll", trackYScroll);
        window.addEventListener("focus", startAnimation);
        window.addEventListener("blur", stopAnimation);
        resizeCanvas();
    }
    function cleanUp() {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", createLine);
        document.removeEventListener("touchstart", createLine);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchstart", onMouseMove);
        window.removeEventListener("orientationchange", resizeCanvas);
        window.removeEventListener("resize", resizeCanvas);
        // window.removeEventListener("scroll", trackYScroll);
        window.removeEventListener("focus", startAnimation);
        window.removeEventListener("blur", stopAnimation);
    }
    return {
        cleanUp,
        renderTrailCursor,
        stopAnimation,
        startAnimation
    };
}

;// CONCATENATED MODULE: ./src/components/cursor-trail-canvas.tsx



function CursorTrailCanvas(props) {
    const refCanvas = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const { cleanUp , renderTrailCursor  } = cursorTrail({
            ref: refCanvas,
            color: props.color
        });
        renderTrailCursor();
        return ()=>{
            cleanUp();
        };
    }, [
        props.color
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("canvas", {
        ref: refCanvas,
        className: props.className,
        style: props.style
    });
}


/***/ }),

/***/ 9879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
        fill: "transparent",
        strokeWidth: "3",
        strokeLinecap: "round",
        ...props
    });
function MenuLogo(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "open menu",
        onClick: props.toggle,
        className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)("relative z-50 flex h-12 w-12 select-none items-center gap-1 rounded-full p-3 py-1 font-semibold shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:hidden", props.open ? "hidden" : "bg-zinc-100 dark:bg-zinc-900"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.svg, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 23 23",
            className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)("mt-1 ", props.open ? "stroke-zinc-100 dark:stroke-accent" : "stroke-accent"),
            animate: props.open ? "open" : "close",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        close: {
                            d: "M 2 2.5 L 20 2.5"
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        close: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    transition: {
                        duration: 0.1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        close: {
                            d: "M 2 16.346 L 20 16.346"
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_utility_theme_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MobileMenu({ openMenu , routes , setOpenMenu  }) {
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = (href)=>{
        setOpenMenu(false);
        router.push(href);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
        show: openMenu,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
            as: "div",
            className: "z-50",
            onClose: setOpenMenu,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 bottom-full",
                    enterTo: "opacity-100 bottom-[15%]",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 bottom-[15%]",
                    leaveTo: "opacity-0 bottom-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                        className: "pointer-events-none absolute flex min-h-[85%] w-full flex-col items-center justify-center overflow-y-auto rounded-b-2xl border-2 border-accent/20 bg-background px-6 py-8 text-accent shadow-lg shadow-accent/10 md:px-10 md:py-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pointer-events-auto flex flex-col items-center gap-6 text-center",
                                children: [
                                    routes.map((link, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "group relative py-2 text-3xl font-medium",
                                            onClick: ()=>handleClick(link.href),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .A)(pathName === link.href ? "w-full" : "w-0", "absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full")
                                                }),
                                                link.title
                                            ]
                                        }, i)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utility_theme_switch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        setClose: setOpenMenu
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute bottom-0 py-6",
                                children: "\xa92023 Ryan Collins"
                            })
                        ]
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



function ThemeSwitch(props) {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);
    const handleThemeChange = ()=>{
        if (props.setClose) {
            props.setClose(false);
        }
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        "aria-label": "toggle theme",
        className: "mt-8 h-10 w-10 rounded-full text-accent transition-[scale] duration-200 hover:scale-[1.1] md:mr-4 md:mt-0 md:h-6 md:w-6",
        onClick: handleThemeChange,
        children: mounted && (theme === "dark" || resolvedTheme === "dark" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    stroke: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 24 24",
                    height: "100%",
                    width: "100%",
                    fill: "transparent",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93M19.07 19.07l-1.414-1.414M12 17a5 5 0 100-10 5 5 0 000 10z"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: "toggle theme"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            height: "100%",
            width: "100%",
            fill: "transparent",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            })
        }))
    });
}


/***/ }),

/***/ 2703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ routes)
/* harmony export */ });
const routes = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Projects",
        href: "/projects"
    }
];


/***/ }),

/***/ 8995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_contact_form_contact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7134);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3329);
/* harmony import */ var _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_contact_form_contact_button__WEBPACK_IMPORTED_MODULE_1__]);
_components_contact_form_contact_button__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base",
                            children: "Get in touch"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `mailto:${_data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.email */ .F.email}`,
                        target: "_blank",
                        className: "mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "collins011008@"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "gmail.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form_contact_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-foreground",
                        children: "\xa92024 Ryan Collins"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.github */ .F.github,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Github",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .GithubIcon */ .ET, {
                                    className: "text-accent transition-colors duration-150 hover:text-accent-foreground"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.twitter */ .F.twitter,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Twitter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterIcon */ .Zm, {
                                    className: "text-accent transition-colors duration-150 hover:text-accent-foreground"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.facebook */ .F.facebook,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Facebook",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookIcon */ .Vq, {
                                    className: "text-accent transition-colors duration-150 hover:text-accent-foreground"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.telegram */ .F.telegram,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Telegram",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .TelegramIcon */ .YG, {
                                    className: "text-accent transition-colors duration-150 hover:text-accent-foreground"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_layout_main_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1140);
/* harmony import */ var next_font_google_target_css_path_src_layout_main_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_layout_main_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9177);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8995);
/* harmony import */ var _data_navigationRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2703);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_navbar__WEBPACK_IMPORTED_MODULE_1__, _layout_footer__WEBPACK_IMPORTED_MODULE_2__]);
([_layout_navbar__WEBPACK_IMPORTED_MODULE_1__, _layout_footer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function MainLayout(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .A)("min-h-screen", (next_font_google_target_css_path_src_layout_main_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default().className)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        routes: _data_navigationRoutes__WEBPACK_IMPORTED_MODULE_3__/* .routes */ ._
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        children: props.children
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_utility_menu_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9879);
/* harmony import */ var _components_utility_theme_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5616);
/* harmony import */ var _animation_animated_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1468);
/* harmony import */ var _components_utility_mobile_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2169);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_utility_menu_button__WEBPACK_IMPORTED_MODULE_5__, _animation_animated_logo__WEBPACK_IMPORTED_MODULE_7__, _components_utility_mobile_menu__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_utility_menu_button__WEBPACK_IMPORTED_MODULE_5__, _animation_animated_logo__WEBPACK_IMPORTED_MODULE_7__, _components_utility_mobile_menu__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Navbar(props) {
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleModal = ()=>{
        setIsModalOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex items-center justify-between lg:max-w-7xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: "drop-shadow-teralight flex items-center justify-center",
                        "aria-label": "Return to home page",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative h-12 w-12 sm:h-14 sm:w-14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_animated_logo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex gap-2 text-sm font-medium",
                                children: props.routes.map((_link, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-3 transition-transform duration-100 hover:scale-[1.1]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: _link.href,
                                            className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_9__/* .classNames */ .A)(pathName === _link.href ? "font-semibold text-background dark:hover:text-foreground" : "text-foreground", "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200"),
                                            children: [
                                                _link.href === pathName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                                                    layoutId: "tab-pill",
                                                    animate: {
                                                        transition: {
                                                            x: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30
                                                            }
                                                        }
                                                    },
                                                    className: "absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                                                }),
                                                _link.title
                                            ]
                                        })
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utility_theme_switch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utility_menu_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            open: isModalOpen,
                            toggle: toggleModal
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utility_mobile_menu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                routes: props.routes,
                openMenu: isModalOpen,
                setOpenMenu: setIsModalOpen
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _layout_main_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8025);
/* harmony import */ var _components_cursor_trail_canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layout_main_layout__WEBPACK_IMPORTED_MODULE_5__]);
([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layout_main_layout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                attribute: "class",
                defaultTheme: "light",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_main_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        mode: "wait",
                        initial: false,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cursor_trail_canvas__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "pointer-events-none fixed inset-0 -z-10 h-full w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }, router.asPath)
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("lucide-react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 4098:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ siteMetadata)
/* harmony export */ });
const siteMetadata = {
    title: "Ryan Collins portfolio",
    author: "Ryan Collins",
    headerTitle: "Ryan Collins",
    description: "Frontend and Reactjs developer",
    language: "en-us",
    theme: "light",
    siteName: "ryancollins.me",
    siteUrl: "https://ryancollins.me",
    siteRepo: "https://github.com/tycoon011008/ryancollins-v2",
    siteLogo: "/favicon.ico",
    image: "/static/homepage.png",
    twitterImage: "/static/homepage.png",
    socialBanner: "/static/homepage.png",
    email: "collins011008@gmail.com",
    github: "https://github.com/tycoon011008",
    twitter: "https://twitter.com/collins011008",
    facebook: "https://www.facebook.com/profile.php?id=61587355021331",
    telegram: "https://t.me/collins011008",
    linkedin: "https://www.linkedin.com/in/",
    locale: "en-US",
    googleSiteVerification: "_YJlO90eSoye2AQOhbkRAzNbejzCGiTgAD4RNR3NtHc"
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,962,329,994], () => (__webpack_exec__(3844)));
module.exports = __webpack_exports__;

})();