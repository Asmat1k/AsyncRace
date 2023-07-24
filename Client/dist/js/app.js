(() => {
    "use strict";
    var __webpack_modules__ = {
        174: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.r(__webpack_exports__);
        },
        866: function(__unused_webpack_module, exports, __webpack_require__) {
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                var desc = Object.getOwnPropertyDescriptor(m, k);
                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
                Object.defineProperty(o, k2, desc);
            } : function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                o[k2] = m[k];
            });
            var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            });
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__(174);
            const myFunctions = __importStar(__webpack_require__(345));
            const generate_garage_1 = __webpack_require__(480);
            myFunctions.isWebp();
            (0, generate_garage_1.getPages)();
        },
        345: (__unused_webpack_module, exports) => {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shuffleArray = exports.getRandomNumber = exports.bodyLockToggle = exports.bodyLock = exports.bodyUnlock = exports.bodyLockStatus = exports.isWebp = void 0;
            function isWebp() {
                function testWebP(callback) {
                    const webP = new Image;
                    webP.onload = webP.onerror = () => {
                        callback(webP.height === 2);
                    };
                    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
                }
                testWebP((support => {
                    const className = support === true ? "webp" : "no-webp";
                    document.documentElement.classList.add(className);
                }));
            }
            exports.isWebp = isWebp;
            exports.bodyLockStatus = true;
            const bodyUnlock = (delay = 300) => {
                const body = document.body;
                if (exports.bodyLockStatus) {
                    const lockPadding = document.querySelectorAll("[data-lp]");
                    setTimeout((() => {
                        for (let index = 0; index < lockPadding.length; index++) {
                            const el = lockPadding[index];
                            el.style.paddingRight = "0px";
                        }
                        body.style.paddingRight = "0px";
                        document.documentElement.classList.remove("lock");
                    }), delay);
                    exports.bodyLockStatus = false;
                    setTimeout((() => {
                        exports.bodyLockStatus = true;
                    }), delay);
                }
            };
            exports.bodyUnlock = bodyUnlock;
            const bodyLock = (delay = 300) => {
                const body = document.body;
                if (exports.bodyLockStatus) {
                    const lockPadding = document.querySelectorAll("[data-lp]");
                    const wrapperElement = document.querySelector(".wrapper");
                    for (let index = 0; index < lockPadding.length; index++) {
                        const el = lockPadding[index];
                        el.style.paddingRight = `${window.innerWidth - wrapperElement.offsetWidth}px`;
                    }
                    body.style.paddingRight = `${window.innerWidth - wrapperElement.offsetWidth}px`;
                    document.documentElement.classList.add("lock");
                    exports.bodyLockStatus = false;
                    setTimeout((() => {
                        exports.bodyLockStatus = true;
                    }), delay);
                }
            };
            exports.bodyLock = bodyLock;
            const bodyLockToggle = (delay = 300) => {
                if (document.documentElement.classList.contains("lock")) (0, exports.bodyUnlock)(delay); else (0, 
                exports.bodyLock)(delay);
            };
            exports.bodyLockToggle = bodyLockToggle;
            const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            exports.getRandomNumber = getRandomNumber;
            const shuffleArray = array => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [ array[j], array[i] ];
                }
                return array;
            };
            exports.shuffleArray = shuffleArray;
        },
        280: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.deleteCar = void 0;
            const generate_garage_1 = __webpack_require__(480);
            function deleteCar(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = `http://127.0.0.1:3000/garage/${id}`;
                        const response = yield fetch(url, {
                            method: "DELETE"
                        });
                        const car = yield response.json();
                        yield (0, generate_garage_1.changeList)();
                        return car;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.deleteCar = deleteCar;
        },
        610: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getCar = void 0;
            function getCar(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/garage/${id}`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (err) {
                        throw err;
                    }
                }));
            }
            exports.getCar = getCar;
        },
        935: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getTotalCars = exports.getCars = void 0;
            function getCars(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/garage?_page=${id}&_limit=7`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (err) {
                        throw err;
                    }
                }));
            }
            exports.getCars = getCars;
            function getTotalCars() {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/garage`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (err) {
                        throw err;
                    }
                }));
            }
            exports.getTotalCars = getTotalCars;
        },
        787: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.createCar = exports.setCar = void 0;
            const update_garage_1 = __webpack_require__(800);
            const get_cars_1 = __webpack_require__(935);
            function setCar() {
                const createButton = document.querySelector(".create");
                const name = document.querySelector(".info__car-new");
                const color = document.querySelector(".set-color");
                const count = document.querySelector(".garage__all-list");
                createButton.addEventListener("click", (() => __awaiter(this, void 0, void 0, (function*() {
                    if (name.value.length > 0) {
                        yield createCar({
                            name: name.value,
                            //!TODO ПОФИКСИТЬ ВЫБОР ЦВЕТА
                            color: color.value
                        });
                        yield (0, update_garage_1.updateCars)();
                        let length = (yield (0, get_cars_1.getTotalCars)()).length;
                        count.innerHTML = `${length}`;
                        name.value = "";
                    }
                }))));
            }
            exports.setCar = setCar;
            function createCar(body) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const url = "http://127.0.0.1:3000/garage";
                    const response = yield fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    });
                    const car = yield response.json();
                    return car;
                }));
            }
            exports.createCar = createCar;
        },
        113: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.upadteCar = void 0;
            const choose_car_1 = __webpack_require__(839);
            const generate_garage_1 = __webpack_require__(480);
            function upadteCar() {
                const updateButton = document.querySelector(".update");
                const name = document.querySelector(".info__car");
                const color = document.querySelector(".update-color");
                updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener("click", (() => __awaiter(this, void 0, void 0, (function*() {
                    if (name.value.length > 0 && choose_car_1.isCarChoosed) {
                        yield updateItem({
                            name: name.value,
                            color: color.value
                        }, choose_car_1.choosedCarId.toString());
                        (0, choose_car_1.resetCarChoosed)();
                        yield (0, generate_garage_1.changeList)();
                        name.value = "";
                    }
                }))));
            }
            exports.upadteCar = upadteCar;
            function updateItem(body, id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const url = `http://127.0.0.1:3000/garage/${id}`;
                    const response = yield fetch(url, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    });
                    const car = yield response.json();
                    return car;
                }));
            }
        },
        692: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.driveMode = void 0;
            function driveMode(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
                    const response = yield fetch(url, {
                        method: "PATCH"
                    });
                    const data = yield response.json();
                    return data;
                }));
            }
            exports.driveMode = driveMode;
        },
        634: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.startEngine = void 0;
            function startEngine(id, status) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status ? "started" : "stopped"}`;
                    const response = yield fetch(url, {
                        method: "PATCH"
                    });
                    const data = yield response.json();
                    return data;
                }));
            }
            exports.startEngine = startEngine;
        },
        802: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.deleteWinner = void 0;
            function deleteWinner(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/winners/${id}`;
                        const response = yield fetch(url, {
                            method: "DELETE"
                        });
                        const data = yield response.json();
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.deleteWinner = deleteWinner;
        },
        581: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getWinner = void 0;
            function getWinner(id) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/winners/${id}`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.getWinner = getWinner;
        },
        170: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getAllWinners = exports.getTotalWinners = void 0;
            function getTotalWinners(page, sort, order) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = `http://127.0.0.1:3000/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.getTotalWinners = getTotalWinners;
            function getAllWinners() {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/winners`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.getAllWinners = getAllWinners;
        },
        835: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setWinner = void 0;
            function setWinner(body) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = `http://127.0.0.1:3000/winners`;
                        const response = yield fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(body)
                        });
                        const data = yield response.json();
                        console.log(data);
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.setWinner = setWinner;
        },
        393: function(__unused_webpack_module, exports) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.updateWinner = void 0;
            function updateWinner(id, body) {
                return __awaiter(this, void 0, void 0, (function*() {
                    try {
                        const url = ` http://127.0.0.1:3000/winners/${id}`;
                        const response = yield fetch(url, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(body)
                        });
                        const data = yield response.json();
                        return data;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.updateWinner = updateWinner;
        },
        839: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.resetCarChoosed = exports.fillCarInfo = exports.chooseCar = exports.choosedCarId = exports.isCarChoosed = void 0;
            const delete_car_1 = __webpack_require__(280);
            const delete_winner_1 = __webpack_require__(802);
            exports.isCarChoosed = false;
            function chooseCar() {
                const buttons = document.querySelectorAll(".controls");
                const nums = document.querySelectorAll(".garage__car-num");
                buttons.forEach(((button, index) => {
                    button.addEventListener("click", (() => __awaiter(this, void 0, void 0, (function*() {
                        if (button.classList.contains("select")) {
                            exports.isCarChoosed = true;
                            exports.choosedCarId = +nums[index / 2].innerHTML;
                            yield fillCarInfo(exports.choosedCarId);
                        }
                        if (button.classList.contains("remove")) {
                            yield (0, delete_car_1.deleteCar)(+nums[index % 2 > 0 ? Math.floor(index / 2) : index].innerHTML);
                            yield (0, delete_winner_1.deleteWinner)(+nums[index % 2 > 0 ? Math.floor(index / 2) : index].innerHTML);
                        }
                    }))));
                }));
            }
            exports.chooseCar = chooseCar;
            function fillCarInfo(i) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const name = document.querySelector(".info__car");
                    const color = document.querySelector(".update-color");
                    const id = document.querySelector(".info__num");
                    try {
                        const url = `http://127.0.0.1:3000/garage/${i}`;
                        const response = yield fetch(url);
                        const data = yield response.json();
                        name.value = data.name;
                        color.value = data.color;
                        id.innerHTML = data.id;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.fillCarInfo = fillCarInfo;
            function resetCarChoosed() {
                exports.isCarChoosed = false;
            }
            exports.resetCarChoosed = resetCarChoosed;
        },
        154: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.gameControls = void 0;
            const generate_garage_1 = __webpack_require__(480);
            const race_all_1 = __webpack_require__(173);
            const reset_all_1 = __webpack_require__(202);
            const set_car_1 = __webpack_require__(787);
            const car_models_1 = __webpack_require__(38);
            const car_models_2 = __webpack_require__(38);
            const colors_1 = __webpack_require__(588);
            function gameControls() {
                const gameButtons = document.querySelectorAll(".mode__item");
                gameButtons.forEach((button => {
                    button.addEventListener("click", (event => __awaiter(this, void 0, void 0, (function*() {
                        const eventTarget = event.target;
                        if (button.classList.contains("generate")) {
                            for (let i = 0; i < 100; i += 1) {
                                const carName = `${car_models_2.carBrand[getRandomNum(0, car_models_2.carBrand.length - 1)]} ${car_models_1.carModel[getRandomNum(0, car_models_2.carBrand.length - 1)]}`;
                                const carColor = colors_1.colors[getRandomNum(0, colors_1.colors.length)];
                                yield (0, set_car_1.createCar)({
                                    name: carName,
                                    color: carColor
                                });
                            }
                            yield (0, generate_garage_1.changeList)();
                        }
                        if (button.classList.contains("race-all")) {
                            eventTarget.disabled = true;
                            (0, race_all_1.startRace)();
                        }
                        if (button.classList.contains("reset")) {
                            eventTarget.disabled = true;
                            (0, reset_all_1.endRace)();
                        }
                    }))));
                }));
            }
            exports.gameControls = gameControls;
            function getRandomNum(min, max) {
                return Math.trunc(Math.random() * (max - min) + min);
            }
        },
        173: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.buttonsDisable = exports.showWinnerBlock = exports.startRace = exports.animated = exports.id = exports.score = void 0;
            const get_car_1 = __webpack_require__(610);
            const get_cars_1 = __webpack_require__(935);
            const drive_engine_1 = __webpack_require__(692);
            const start_engine_1 = __webpack_require__(634);
            const page_1 = __webpack_require__(176);
            const get_winner_1 = __webpack_require__(581);
            const set_winner_1 = __webpack_require__(835);
            const update_winner_1 = __webpack_require__(393);
            exports.score = 100;
            exports.animated = 0;
            function startRace() {
                const headerButtons = document.querySelectorAll(".header__item button");
                const items = document.querySelectorAll(".garage__item");
                const startButtons = document.querySelectorAll(".start");
                const stopButtons = document.querySelectorAll(".stop");
                const resetButton = document.querySelector(".reset");
                let win = false;
                exports.animated = 0;
                buttonsDisable(headerButtons, true);
                items.forEach((item => __awaiter(this, void 0, void 0, (function*() {
                    buttonsDisable(startButtons, true);
                    const carModel = item.querySelector(".garage__car");
                    const carId = item.querySelector(".garage__car-num");
                    const response = yield (0, start_engine_1.startEngine)(+carId.innerHTML, true);
                    try {
                        const time = response.distance / response.velocity / 1e3;
                        carModel.style.animationDuration = `${time}s`;
                        carModel.classList.add("garage__car_race");
                        exports.animated += 1;
                        if (exports.animated === (yield (0, get_cars_1.getCars)(page_1.currentPage)).length) resetButton.disabled = false;
                        buttonsDisable(stopButtons, false);
                        yield (0, drive_engine_1.driveMode)(+carId.innerHTML);
                        if (!win) {
                            win = true;
                            exports.score = +time.toFixed(2);
                            exports.id = +carId.innerHTML;
                            if (carModel.classList.contains("garage__car_race")) {
                                try {
                                    yield showWinnerBlock(exports.id, exports.score);
                                    yield (0, set_winner_1.setWinner)({
                                        id: exports.id,
                                        wins: 1,
                                        time: exports.score
                                    });
                                    console.log("New winner created!");
                                } catch (getWinnerError) {
                                    const result = yield (0, get_winner_1.getWinner)(exports.id);
                                    yield (0, update_winner_1.updateWinner)(exports.id, {
                                        wins: result.wins += 1,
                                        time: exports.score < result.time ? exports.score : result.time
                                    });
                                    console.log("Winner is updated!");
                                }
                                buttonsDisable(headerButtons, false);
                            }
                        }
                    } catch (driveError) {
                        if (carModel.classList.contains("garage__car_race")) {
                            carModel.style.transform = "scale(1.5) rotate(10deg)";
                            carModel.style.animationPlayState = "paused";
                        }
                    }
                    buttonsDisable(headerButtons, false);
                }))));
            }
            exports.startRace = startRace;
            function showWinnerBlock(id, time) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const popup = document.querySelector(".popup");
                    const car = yield (0, get_car_1.getCar)(id);
                    popup.innerHTML = "";
                    popup.style.display = "block";
                    popup.innerHTML = `<div class="popup__container">\n    <div class="popup__body">\n      <div class="popup__info">Winner: <span class="popup-name">${car.name}</span></div>\n      <div class="popup__info">Time: <span class="popup-time">${time}</span></div>  \n    </div>\n  </div>`;
                }));
            }
            exports.showWinnerBlock = showWinnerBlock;
            function buttonsDisable(items, flag) {
                items.forEach((item => {
                    item.disabled = flag;
                }));
            }
            exports.buttonsDisable = buttonsDisable;
        },
        586: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.carRace = void 0;
            const drive_engine_1 = __webpack_require__(692);
            const start_engine_1 = __webpack_require__(634);
            function carRace() {
                const raceButtons = document.querySelectorAll(".race");
                const nums = document.querySelectorAll(".garage__car-num");
                const cars = document.querySelectorAll(".garage__car");
                const startButtons = document.querySelectorAll(".start");
                const stopButtons = document.querySelectorAll(".stop");
                raceButtons.forEach(((button, index) => {
                    button.addEventListener("click", (event => __awaiter(this, void 0, void 0, (function*() {
                        const eventTarget = event.target;
                        eventTarget.disabled = true;
                        if (button.classList.contains("start")) try {
                            const response = yield (0, start_engine_1.startEngine)(+nums[index / 2].innerHTML, true);
                            try {
                                const time = response.distance / response.velocity;
                                cars[index / 2].style.animationDuration = `${time / 1e3}s`;
                                cars[index / 2].classList.add("garage__car_race");
                                stopButtons[index / 2].disabled = false;
                                yield (0, drive_engine_1.driveMode)(+nums[index / 2].innerHTML);
                            } catch (driveError) {
                                stopButtons[index / 2].disabled = false;
                                cars[index / 2].style.animationPlayState = "paused";
                                throw driveError;
                            }
                        } catch (EngineStartError) {
                            cars[index / 2].style.transform = "scale(1.5) rotate(10deg)";
                            cars[index / 2].style.animationPlayState = "paused";
                            throw EngineStartError;
                        }
                        if (button.classList.contains("stop")) {
                            yield (0, start_engine_1.startEngine)(+nums[Math.floor(index / 2)].innerHTML, false);
                            cars[Math.floor(index / 2)].classList.remove("garage__car_race");
                            cars[Math.floor(index / 2)].style.transform = "scale(1.5)";
                            cars[Math.floor(index / 2)].style.animationPlayState = "running";
                            eventTarget.disabled = true;
                            startButtons[Math.floor(index / 2)].disabled = false;
                        }
                    }))));
                }));
            }
            exports.carRace = carRace;
        },
        202: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getStopStatus = exports.hideWinnerBlock = exports.endRace = exports.isStopped = void 0;
            const start_engine_1 = __webpack_require__(634);
            const race_all_1 = __webpack_require__(173);
            exports.isStopped = false;
            function endRace() {
                const headerButtons = document.querySelectorAll(".header__item button");
                const items = document.querySelectorAll(".garage__item");
                const startButtons = document.querySelectorAll(".start");
                const stopButtons = document.querySelectorAll(".stop");
                const raceButtons = document.querySelector(".race-all");
                (0, race_all_1.buttonsDisable)(headerButtons, false);
                items.forEach((item => __awaiter(this, void 0, void 0, (function*() {
                    (0, race_all_1.buttonsDisable)(startButtons, false);
                    (0, race_all_1.buttonsDisable)(stopButtons, true);
                    const carModel = item.querySelector(".garage__car");
                    carModel.classList.remove("garage__car_race");
                    carModel.style.transform = "scale(1.5)";
                    carModel.style.animationPlayState = "running";
                    raceButtons.disabled = false;
                    const carId = item.querySelector(".garage__car-num");
                    yield (0, start_engine_1.startEngine)(+carId.innerHTML, false);
                }))));
                hideWinnerBlock();
            }
            exports.endRace = endRace;
            function hideWinnerBlock() {
                const popup = document.querySelector(".popup");
                popup.style.display = "none";
                popup.innerHTML = "";
            }
            exports.hideWinnerBlock = hideWinnerBlock;
            function getStopStatus() {
                return exports.isStopped;
            }
            exports.getStopStatus = getStopStatus;
        },
        443: (__unused_webpack_module, exports) => {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.blurInputs = exports.colorUpdate = exports.colorCreate = exports.updateInput = exports.createInput = void 0;
            exports.createInput = "";
            exports.updateInput = "";
            exports.colorCreate = "#6452F9";
            exports.colorUpdate = "#E6C78C";
            function blurInputs() {
                const inputs = document.querySelectorAll("input");
                inputs.forEach((input => {
                    if (input.classList.contains("info__car-new")) exports.createInput = input.value;
                    if (input.classList.contains("info__car")) exports.updateInput = input.value;
                    if (input.classList.contains("set-color")) exports.colorCreate = input.value;
                    if (input.classList.contains("update-color")) exports.colorUpdate = input.value;
                }));
            }
            exports.blurInputs = blurInputs;
        },
        489: (__unused_webpack_module, exports, __webpack_require__) => {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.changePage = void 0;
            const save_input_1 = __webpack_require__(443);
            const generate_garage_1 = __webpack_require__(480);
            const generate_winners_1 = __webpack_require__(888);
            function changePage() {
                const winnersButton = document.querySelector(".winners");
                const garageButton = document.querySelector(".gar");
                winnersButton.addEventListener("click", (() => {
                    (0, save_input_1.blurInputs)();
                    (0, generate_winners_1.getWinnersPage)();
                }));
                garageButton.addEventListener("click", (() => {
                    (0, generate_garage_1.getPages)();
                }));
            }
            exports.changePage = changePage;
        },
        480: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getGarageCar = exports.changeList = exports.getPages = void 0;
            const get_cars_1 = __webpack_require__(935);
            const game_controls_1 = __webpack_require__(154);
            const page_1 = __webpack_require__(176);
            const pagination_garage_1 = __webpack_require__(167);
            const race_1 = __webpack_require__(586);
            const set_car_1 = __webpack_require__(787);
            const choose_car_1 = __webpack_require__(839);
            const upadte_car_1 = __webpack_require__(113);
            const change_page_1 = __webpack_require__(489);
            const save_input_1 = __webpack_require__(443);
            function getPages() {
                return __awaiter(this, void 0, void 0, (function*() {
                    document.body.innerHTML = "";
                    const wrapper = document.createElement("div");
                    wrapper.classList.add("wrapper");
                    const header = document.createElement("header");
                    header.classList.add("header");
                    header.innerHTML = `<div class="header__container">\n    <div class="header__body">\n      <nav class="header__nav">\n        <ul class="header__list">\n          <li class="header__item"><button class="gar">GARAGE</button></li>\n          <li class="header__item"><button class="winners">WINNERS</button></li>\n        </ul>\n      </nav>\n    </div>\n  </div>`;
                    wrapper.appendChild(header);
                    const page = document.createElement("main");
                    page.classList.add("page");
                    const input = document.createElement("section");
                    input.classList.add("info");
                    input.innerHTML = `<div class="info__container">\n    <div class="info__body">\n      <div class="info__list">\n        <div class="info__item">\n          <input type="text" placeholder="Car name" maxlength="30" class="info__input info__car-new" value="${save_input_1.createInput}">\n          <div class="info__color">\n            <input class="info__color-cur set-color" type="color" value="${save_input_1.colorCreate}">\n          </div>\n          <button class="info__button create">Create</button>\n        </div>\n        <div class="info__item">\n          <input type="text" placeholder="New car name" maxlength="30" class="info__input info__car" value="${save_input_1.updateInput}">\n          <div class="info__color">\n            <input class="info__color-cur update-color" type="color" value="${save_input_1.colorUpdate}">\n          </div>\n          <button class="info__button update">Update</button>\n          <h3 class="info__num"></h3>\n        </div>\n      </div>\n    </div>\n  </div>`;
                    page.appendChild(input);
                    const mode = document.createElement("section");
                    mode.classList.add("mode");
                    mode.innerHTML = `<div class="mode__container">\n    <div class="mode__body">\n      <div class="mode__list">\n        <button class="mode__item race-all">RACE</button>\n        <button class="mode__item reset" disabled>RESET</button>\n        <button class="mode__item generate">GENERATE</button>\n      </div>\n    </div>\n  </div>`;
                    page.appendChild(mode);
                    const garage = document.createElement("section");
                    garage.classList.add("garage");
                    garage.innerHTML = `<div class="garage__container">\n  <div class="garage__body">\n    <div class="garage__info">\n      <div class="garage__title">Garage(<span class="garage__all-list">1</span>)</div>\n      <div class="garage__page">Page #<span class="garage__cur-page">${page_1.currentPage}</span> </div>  \n    </div>\n    <ul class="garage__list">\n    </ul>\n    <div class="garage__pag-controls">\n      <button class="garage__button pagination prev">PREV</button>\n      <button class="garage__button pagination next">NEXT</button>\n    </div>\n    </div>\n  </div>`;
                    page.appendChild(garage);
                    const popup = document.createElement("section");
                    popup.classList.add("popup");
                    popup.innerHTML = `<div class="popup__container">\n    <div class="popup__body">\n      <div class="popup__info">Winner: <span class="popup-name">NAME</span></div>\n      <div class="popup__info">Time: <span class="popup-time">2:30</span></div>  \n    </div>\n  </div>`;
                    page.appendChild(popup);
                    wrapper.appendChild(page);
                    document.body.append(wrapper);
                    changeList();
                    (0, change_page_1.changePage)();
                    (0, set_car_1.setCar)();
                    (0, upadte_car_1.upadteCar)();
                    (0, game_controls_1.gameControls)();
                    (0, pagination_garage_1.slideGaragePagination)();
                }));
            }
            exports.getPages = getPages;
            function changeList() {
                return __awaiter(this, void 0, void 0, (function*() {
                    const list = document.querySelector(".garage__list");
                    const count = document.querySelector(".garage__all-list");
                    list.innerHTML = "";
                    count.innerHTML = `${(yield (0, get_cars_1.getTotalCars)()).length}`;
                    let length = (yield (0, get_cars_1.getCars)(page_1.currentPage)).length;
                    length = length > 7 ? 7 : length;
                    for (let i = 0; i < length; i += 1) {
                        const car = yield getGarageCar(i);
                        list.appendChild(car);
                    }
                    yield (0, pagination_garage_1.garagePaginationButtons)(".pagination");
                    (0, choose_car_1.chooseCar)();
                    (0, race_1.carRace)();
                }));
            }
            exports.changeList = changeList;
            function getGarageCar(i) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const car = document.createElement("li");
                    car.classList.add("garage__item");
                    try {
                        const cars = yield (0, get_cars_1.getCars)(page_1.currentPage);
                        car.innerHTML = `<div class="garage__controls">\n      <div class="garage__buttons">\n        <button class="garage__button controls select">SELECT</button>\n        <button class="garage__button controls remove">REMOVE</button>\n      </div>\n      <h2 class="garage__car-name">${cars[i].name}</h2>\n      <h3 class="garage__car-num">${cars[i].id}</h3>\n    </div>\n    <div class="garage__race">\n      <div class="garage__pit">\n        <div class="garage__start-stop">\n          <button class="garage__button race start">GO</button>\n          <button class="garage__button race stop" disabled>STOP</button>\n        </div>\n      </div>\n      <div class="garage__road">\n        <div class="garage__car">\n          <i class="fa-solid fa-car-side fa-2xl" style="color: ${cars[i].color};"></i>\n        </div>\n        <div class="garage__finish">\n          <i class="fa-solid fa-flag-checkered fa-2xl" style="color: #ffffff;"></i>\n        </div>  \n      </div>\n    </div>`;
                        return car;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.getGarageCar = getGarageCar;
        },
        888: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getWinnersCar = exports.changeWinnersList = exports.getWinnersPage = void 0;
            const get_car_1 = __webpack_require__(610);
            const pagination_winners_1 = __webpack_require__(142);
            const page_1 = __webpack_require__(176);
            const get_winners_1 = __webpack_require__(170);
            const sort_winners_1 = __webpack_require__(797);
            function getWinnersPage() {
                const page = document.querySelector(".page");
                page.innerHTML = "";
                const leader = document.createElement("section");
                leader.classList.add("winner");
                leader.innerHTML = `<div class="winner__container">\n    <div class="winner__body">\n      <div class="winner__info">\n        <h2 class="winner__title">Winners (<span class="winner__count">-</span>)</h2>\n        <h3 class="winner__subtitle">Page (<span class="winner__page">${page_1.winnersPage}</span>)</h3>\n      </div>\n      <div class="winner__table">\n        <ul class="winner__list">\n        </ul>\n      </div>\n      <div class="winner__controls">\n        <button class="winner__button prev">PREV</button>\n        <button class="winner__button next">NEXT</button>\n      </div>\n    </div>\n  </div>`;
                page.appendChild(leader);
                changeWinnersList();
                (0, pagination_winners_1.slideWinnersPagination)();
            }
            exports.getWinnersPage = getWinnersPage;
            function changeWinnersList(sort, order) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const list = document.querySelector(".winner__list");
                    const count = document.querySelector(".winner__count");
                    list.innerHTML = "";
                    const listHeader = document.createElement("li");
                    listHeader.classList.add("winner__item");
                    listHeader.classList.add("winner__header");
                    listHeader.innerHTML = `<div class="winner__number">Number</div>\n  <div class="winner__car">Car</div>\n  <div class="winner__name">Name</div>\n  <div class="winner__wins winner-sort">Wins</div>\n  <div class="winner__time winner-sort">Best time</div>`;
                    list.appendChild(listHeader);
                    count.innerHTML = `${(yield (0, get_winners_1.getAllWinners)()).length}`;
                    let length = (yield (0, get_winners_1.getTotalWinners)(page_1.winnersPage, "id", "ASC")).length;
                    for (let i = 0; i < length; i += 1) {
                        const car = yield getWinnersCar(i, sort, order);
                        list.appendChild(car);
                    }
                    yield (0, pagination_winners_1.winnnersPaginationButtons)(".winner__button");
                    (0, sort_winners_1.sortWinnersTable)();
                }));
            }
            exports.changeWinnersList = changeWinnersList;
            function getWinnersCar(i, sort, order) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const car = document.createElement("li");
                    car.classList.add("garage__item");
                    try {
                        const result = yield (0, get_winners_1.getTotalWinners)(page_1.winnersPage, sort, order);
                        const carParams = yield (0, get_car_1.getCar)(result[i].id);
                        car.innerHTML = `<li class="winner__item">\n      <div class="winner__number">${i + 1}</div>\n      <div class="winner__car">\n        <i class="fa-solid fa-car-side fa-2xl" style="color: ${carParams.color};"></i>\n      </div>\n      <div class="winner__name">${carParams.name}</div>\n      <div class="winner__wins">${result[i].wins}</div>\n      <div class="winner__time">${result[i].time}</div>\n    </li>`;
                        return car;
                    } catch (error) {
                        throw error;
                    }
                }));
            }
            exports.getWinnersCar = getWinnersCar;
        },
        800: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.updateCars = void 0;
            const get_cars_1 = __webpack_require__(935);
            const page_1 = __webpack_require__(176);
            const choose_car_1 = __webpack_require__(839);
            const generate_garage_1 = __webpack_require__(480);
            function updateCars() {
                return __awaiter(this, void 0, void 0, (function*() {
                    const list = document.querySelector(".garage__list");
                    const last = (yield (0, get_cars_1.getCars)(page_1.currentPage)).length;
                    const car = yield (0, generate_garage_1.getGarageCar)(last - 1);
                    list.appendChild(car);
                    yield (0, choose_car_1.chooseCar)();
                }));
            }
            exports.updateCars = updateCars;
        },
        176: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.changeWinnersCurrentPage = exports.changeGarageCurrentPage = exports.winnersPage = exports.currentPage = void 0;
            const get_cars_1 = __webpack_require__(935);
            const get_winners_1 = __webpack_require__(170);
            const generate_garage_1 = __webpack_require__(480);
            const generate_winners_1 = __webpack_require__(888);
            exports.currentPage = 1;
            exports.winnersPage = 1;
            function changeGarageCurrentPage(flag) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const page = document.querySelector(".garage__cur-page");
                    if (flag) {
                        if ((yield (0, get_cars_1.getCars)(exports.currentPage + 1)).length > 0) {
                            exports.currentPage += 1;
                            (0, generate_garage_1.changeList)();
                        }
                    } else if (exports.currentPage > 1) {
                        exports.currentPage -= 1;
                        (0, generate_garage_1.changeList)();
                    }
                    page.innerHTML = `${exports.currentPage}`;
                }));
            }
            exports.changeGarageCurrentPage = changeGarageCurrentPage;
            function changeWinnersCurrentPage(flag) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const page = document.querySelector(".winner__page");
                    if (flag) {
                        if ((yield (0, get_winners_1.getTotalWinners)(exports.winnersPage + 1, "id", "ASC")).length > 0) {
                            exports.winnersPage += 1;
                            (0, generate_winners_1.changeWinnersList)();
                        }
                    } else if (exports.winnersPage > 1) {
                        exports.winnersPage -= 1;
                        (0, generate_winners_1.changeWinnersList)();
                    }
                    page.innerHTML = `${exports.winnersPage}`;
                }));
            }
            exports.changeWinnersCurrentPage = changeWinnersCurrentPage;
        },
        167: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.garagePaginationButtons = exports.slideGaragePagination = void 0;
            const get_cars_1 = __webpack_require__(935);
            const reset_all_1 = __webpack_require__(202);
            const page_1 = __webpack_require__(176);
            function slideGaragePagination() {
                const pagButtons = document.querySelectorAll(".pagination");
                const resetButton = document.querySelector(".reset");
                const raceButton = document.querySelector(".race-all");
                pagButtons.forEach((button => {
                    button.addEventListener("click", (() => {
                        (0, reset_all_1.hideWinnerBlock)();
                        resetButton.disabled = true;
                        raceButton.disabled = false;
                        if (button.classList.contains("next")) (0, page_1.changeGarageCurrentPage)(true);
                        if (button.classList.contains("prev")) (0, page_1.changeGarageCurrentPage)(false);
                    }));
                }));
            }
            exports.slideGaragePagination = slideGaragePagination;
            function garagePaginationButtons(className) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const buttons = document.querySelectorAll(className);
                    if (page_1.currentPage - 1 === 0) buttons[0].disabled = true; else buttons[0].disabled = false;
                    if ((yield (0, get_cars_1.getCars)(page_1.currentPage + 1)).length <= 0) buttons[1].disabled = true; else buttons[1].disabled = false;
                }));
            }
            exports.garagePaginationButtons = garagePaginationButtons;
        },
        142: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.winnnersPaginationButtons = exports.slideWinnersPagination = void 0;
            const get_winners_1 = __webpack_require__(170);
            const page_1 = __webpack_require__(176);
            function slideWinnersPagination() {
                const pagButtons = document.querySelectorAll(".winner__button");
                pagButtons.forEach((button => {
                    button.addEventListener("click", (() => {
                        if (button.classList.contains("next")) (0, page_1.changeWinnersCurrentPage)(true);
                        if (button.classList.contains("prev")) (0, page_1.changeWinnersCurrentPage)(false);
                    }));
                }));
            }
            exports.slideWinnersPagination = slideWinnersPagination;
            function winnnersPaginationButtons(className) {
                return __awaiter(this, void 0, void 0, (function*() {
                    const buttons = document.querySelectorAll(className);
                    if (page_1.winnersPage - 1 === 0) buttons[0].disabled = true; else buttons[0].disabled = false;
                    if ((yield (0, get_winners_1.getTotalWinners)(page_1.winnersPage + 1, "id", "ASC")).length <= 0) buttons[1].disabled = true; else buttons[1].disabled = false;
                }));
            }
            exports.winnnersPaginationButtons = winnnersPaginationButtons;
        },
        38: (__unused_webpack_module, exports) => {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.carModel = exports.carBrand = void 0;
            exports.carBrand = [ "Nissan", "Skoda", "Dodge", "Mitsubishi", "Ford", "Toyota", "Lada", "Saab", "Volvo", "Daf", "GMC", "UAZ", "VAZ", "Citroen", "Renault", "Subaru", "Audi", "BMW", "Porshe", "Mersedes", "Honda", "Mazda", "Haval", "Geely", "Omooda", "Genesis", "Lexus", "Rolls-Roys", "Acura", "Alfa Romeo", "Bently", "Aston Martin", "Aurus", "Tesla", "Hyundai", "Opel", "Lamborgini", "Ferrari", "Land Rover", "Bugatti", "Volkswagen", "JAC" ];
            exports.carModel = [ "X-Trail", "Rapid", "Kodiaq", "Lancer 9", "Passat", "C4", "Terrano", "Focus", "CLS", "Transit", "Chellenger", "2109", "Outlander", "Mustang", "Mark-2", "Granta", "V40", "Symbol", "911", "Civic", "MX-3", "X5", "Urus", "M5", "Fabia", "F7x", "S63", "X-Ray", "Model-S", "Solaris", "Polo", "Tiguan", "Toureg", "Caravan", "Soul", "Ceed", "Sportage", "Sata-Fe", "Lancer 10", "Camry", "Corolla", " RAV-4", "Astra", "Huracan", "Aventodor", "Passat", "Golf", "Jetta", "Tiguan" ];
        },
        588: (__unused_webpack_module, exports) => {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.colors = void 0;
            exports.colors = [ "#A41C1C", "#C246EF", "#006FFF", "#8AA2C1", "#008D13", "#FFF700", "#FF0000", "#00FFF7", "#00FF89", "#FFFFFF", "#22269C", "#D5B342", "#BDFF4B", "#D54BFF", "#EDFF4B", "#9A9C80", "#D048DB", "#BE5CF2", "#8048DB", "#6452F9", "#FFB005", "#DE1B04", "#9211F5", "#0484DE", "#0DFC44", "#FFF26E", "#DE955F", "#F575CD ", "#5F5FDE", "#5F5FDE", "#08FD0E", "#0756E3", "#FA149C", "#E6C78C", "#2CFD08", "#1C07E3" ];
        },
        797: function(__unused_webpack_module, exports, __webpack_require__) {
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.sortWinnersTable = void 0;
            const generate_winners_1 = __webpack_require__(888);
            let isWinsClicked = false;
            let isTimeClicked = false;
            function sortWinnersTable() {
                const sortButtons = document.querySelectorAll(".winner-sort");
                sortButtons.forEach((button => {
                    button.addEventListener("click", (() => __awaiter(this, void 0, void 0, (function*() {
                        if (button.classList.contains("winner__wins")) {
                            isWinsClicked = !isWinsClicked;
                            (0, generate_winners_1.changeWinnersList)("wins", isWinsClicked ? "ASC" : "DESC");
                        }
                        if (button.classList.contains("winner__time")) {
                            isTimeClicked = !isTimeClicked;
                            (0, generate_winners_1.changeWinnersList)("time", isTimeClicked ? "ASC" : "DESC");
                        }
                    }))));
                }));
            }
            exports.sortWinnersTable = sortWinnersTable;
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    __webpack_require__(866);
})();