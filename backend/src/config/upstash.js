import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '60 s')
});

const rateLimiter = async (req, res, next) => {
    try {
        const identifier = req.ip || 'anonymous';
        const { success } = await ratelimit.limit(identifier);
        
        if (!success) {
            return res.status(429).json({ error: 'Too many requests' });
            console.error('Rate limit exceeded for:', identifier);
        }
        
        next();
    } catch (error) {
        console.error('Rate limiter error:', error);
        next(); 
    }
};

export default rateLimiter;