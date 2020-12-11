enum methods {
    "console",
    "return",
}

/**
 * Greet someone
 * @param {string} message - e.g. Somebody's name.
 * @param {string} [method=console] - Use console to emit directly and return to get a value
 */
export function greet(
    message: string,
    method: keyof typeof methods = "console",
) {
    switch (method) {
        case "console":
            console.log(`Hello, ${message}`);
            break;
        case "return":
            return `Hello, ${message}`;
    }
}
