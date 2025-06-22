import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20, '60 s')
});

const rateLimiter = async (req, res, next) => {
    try {
        const identifier = req.ip || 'anonymous';
        const { success } = await ratelimit.limit(identifier);
        
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next();

    } catch (error) {
        console.error("Rate limiter error:", error);
        next(); // Continue on error instead of sending 500
    }
}

export default rateLimiter;