const logger = (req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
    next();
};

export default logger;