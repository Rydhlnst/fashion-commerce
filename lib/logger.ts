import pino from "pino";

const isEdge = process.env.NEXT_RUNTIME === "edge";
const isProduction = process.env.NODE_ENV === "production";

let logger: pino.Logger;

if (!isEdge && !isProduction) {
  // dev mode – pino-pretty
  logger = pino({
    level: process.env.LOG_LEVEL || "info",
    transport: {
      target: require.resolve("pino-pretty"), 
      options: {
        colorize: true,
        ignore: "pid,hostname",
        translateTime: "SYS:standard",
      },
    },
    formatters: {
      level: (label) => ({ level: label.toUpperCase() }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  });
} else {
  // production / edge / RSC
  logger = pino({
    level: process.env.LOG_LEVEL || "info",
    formatters: {
      level: (label) => ({ level: label.toUpperCase() }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  });
}

export default logger;
