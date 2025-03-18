const retry = (count, callback) => {
    return async (...args) => {
        let c = 0;
        while (c <= count) {
            try {
                return await callback(...args)
            } catch (error) {
                if (c == count) throw new Error(error.message)
                c++
            }
        }
    }
}

const timeout = (delay, callback) => {
    return async (...args) => {
        return Promise.race([callback(...args),
        new Promise((_, reject) => setTimeout(() => {
            return reject(new Error('timeout'))
        }, delay))
        ])
    }
}