const cron = require("node-cron");
const { sendWeatherReportToAllUsers } = require("../services/user.service");

// Use the scheduleTime variable here
const scheduleTime = "* */3 * * *"; // 3 hrs

// Export a function to start the scheduler
module.exports = () => {
  cron.schedule(scheduleTime, () => {
    console.log("Running email sending job...");
    sendWeatherReportToAllUsers();
  });
};
