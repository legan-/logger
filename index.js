import { format } from "date-fns";

export default class Log {
  dateFormat() {
    return format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS");
  }

  getOutputLine(variant, message) {
    return `${this.dateFormat()} - ${variant} : ${message}`;
  }

  writeToFile(output) {
    // eslint-disable-next-line no-console
    console.log(output);
  }

  static debug(message) {
    const output = this.prototype.getOutputLine("DEBUG", message);
    this.prototype.writeToFile(output);
  }

  static info(message) {
    const output = this.prototype.getOutputLine("INFO ", message);
    this.prototype.writeToFile(output);
  }

  static warn(message) {
    const output = this.prototype.getOutputLine("WARN ", message);
    this.prototype.writeToFile(output);
  }

  static error(message) {
    const output = this.prototype.getOutputLine("ERROR", message);
    this.prototype.writeToFile(output);
  }

  static hr() {
    const output = "";
    this.prototype.writeToFile(output);
  }
}
