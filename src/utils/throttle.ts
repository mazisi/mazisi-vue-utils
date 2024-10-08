export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    limit: number,
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false
    let lastFunc: ReturnType<typeof setTimeout>
    let lastRan: number
  
    return function (this: any, ...args: Parameters<T>): void {
      if (!inThrottle) {
        func.apply(this, args)
        lastRan = Date.now()
        inThrottle = true
      }
      else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args)
            lastRan = Date.now()
          }
        }, Math.max(limit - (Date.now() - lastRan), 0))
      }
    }
  }

  /**
   * NB: Throttling is a technique used to control how often a function can be executed over time. 
   * It ensures that a function is only called at most once every limit milliseconds, even if it's triggered frequently.
   */