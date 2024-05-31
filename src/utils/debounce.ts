export function customDebounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: NodeJS.Timeout;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;

        const later = function () {
            timeout = null!;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
